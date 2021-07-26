import React, { useState } from 'react';
import { render, screen } from '@testing-library/react';
import ProductCard, {
  addMyFav,
  deleteMyFav,
} from 'components/productCard/ProductCard';
import MyFavSect from 'components/myFavSect/MyFavSect';
// import { act } from 'react-dom/test-utils';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import { Provider } from 'react-redux';
import store from 'redux/store';
import axios from 'axios';

describe('測試增刪我的最愛', () => {
  test('是否增加我的最愛並渲染至頁面', async () => {
    const mockFavItem = jest.fn();
    mockFavItem.mockReturnValue({
      product_sid: 2,
      currentUser: 87,
    });
    const addmyFavObj = await addMyFav(mockFavItem);
    // console.log('addmyFavObj', addmyFavObj);
    // act(() => {
      render(
        <Provider store={store}>
          <Router>
            <MyFavSect />
          </Router>
        </Provider>
      );
      const myFavProductCard = screen.getByTestId(`myFavSect-productCard-2`);
      expect(myFavProductCard).toBeInTheDocument();
    // });
  });

  //   test('是否刪除我的最愛並渲染至頁面', async () => {
  //     const mockFavItem = jest.fn();
  //     mockFavItem.mockReturnValue({
  //       product_sid: 2,
  //       currentUser: 87,
  //     });
  //     const addmyFavObj = await deleteMyFav(mockFavItem);
  //     console.log('addmyFavObj', addmyFavObj);
  //     // expect(addmyFavObj).toBeGreaterThanOrEqual(0);
  //     render(
  //       <Provider store={store}>
  //         <Router>
  //           <ProductCard testid={'myFavSect-productCard-2'} />
  //         </Router>
  //       </Provider>
  //     );
  //     const myFavProductCard = screen.getByTestId(`myFavSect-productCard-2`);
  //     expect(myFavProductCard).not.toBeInTheDocument();
  //   });
});
