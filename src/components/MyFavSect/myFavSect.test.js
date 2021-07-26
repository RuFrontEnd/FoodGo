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
    const res = {
      data: [
        {
          sid: 1,
          product_sid: 1,
          comments: 0,
          created_at: '2021-07-18T12:41:29.000Z',
          member_sid: 87,
          productname: '中歐香料嫩雞胸',
          categories: '1.低GI便當',
          price: '170',
          img_id: '00_bento-chicken-breast',
          Protein: '10g',
          Fat: '2g',
          carbohydrate: '8g',
          calories: '400卡',
          introduction:
            '簡單卻迷人的迷迭香風味，經過真空舒肥的肉質軟嫩又Juicy，特別加入研磨風乾大蒜，濃郁香氣，清爽不膩。',
          startRating: 4.5,
          contentNum: '75',
          purchased: 85,
        },
      ],
    }; // 模擬axios回傳的值
    axios.get = jest.fn(); // 把執行的getMyFav()回傳的axios.get值替換掉
    axios.get.mockResolvedValue(res); // 回傳的axios.get值替換成res
    render(
      <Provider store={store}>
        <Router>
          <MyFavSect />
        </Router>
      </Provider>
    );

    await getMyFav().then((res) => {
    //   console.log('res.data', res.data);
      const title = screen.getByTestId('myFavSect-title');
      expect(title).toBeInTheDocument();
    });
  });
});
