import React, { useState } from 'react';
import { render, screen } from '@testing-library/react';
import MyFavSect, { getMyFav } from 'components/myFavSect/MyFavSect';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import { Provider } from 'react-redux';
import store from 'redux/store';
import axios from 'axios';

describe('測試myFavSect.js', () => {
  test('是否取得我的最愛資料', async () => {
    const myFavs = await getMyFav(Math.random());
    expect(myFavs.data.length).toBeGreaterThanOrEqual(0);
  });

  test('是否myFavSect元件成功渲染', async () => {
    render(
      <Provider store={store}>
        <Router>
          <MyFavSect />
        </Router>
      </Provider>
    );

    await getMyFav(Math.random()).then((res) => {
      console.log('res.data', res.data);
      const title = screen.getByTestId('myFavSect-title');
      expect(title).toBeInTheDocument();
    });
  });
});
