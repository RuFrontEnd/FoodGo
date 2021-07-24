import React, { useState } from 'react';
import { render, screen } from '@testing-library/react';
import MyFavSect, { getMyFav } from 'components/myFavSect/MyFavSect';
import { Provider } from 'react-redux';
import store from 'redux/store';
// import { useSelector } from 'react-redux';
// import { jest } from '@jest/globals';

describe('測試myFavSect.js', () => {
  test('是否取得我的最愛資料', async () => {
    const myFavs = await getMyFav(Math.random());
    // console.log('myFavs', myFavs);
    expect(myFavs.data.length).toBeGreaterThanOrEqual(0);
  });

  test('是否myFavSect元件成功渲染', async () => {
    render(
      <Provider store={store}>
        <MyFavSect />
      </Provider>
    );
    await getMyFav(Math.random()).then((res) => {
      const title = screen.getByTestId('myFavSect-title');
      // console.log('title', title);
      expect(title).toBeInTheDocument();
    });
  });
});
