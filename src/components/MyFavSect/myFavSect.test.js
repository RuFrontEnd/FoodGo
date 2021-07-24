import React from 'react';
import { render } from '@testing-library/react';
import MyFavSect, { getMyFav } from 'components/myFavSect/MyFavSect';
// import { useSelector } from 'react-redux';w
// import { jest } from '@jest/globals';

test('get myFav data', async () => {
  const myFavs = await getMyFav(Math.random());
  console.log('myFavs', myFavs);
  expect(myFavs.data.length).toBeGreaterThanOrEqual(0);
  //   const { getByText } = render(<MyFavSect />);
  //   const req = jest.fn();
  //   const linkElement = getByText(/learn react/i);
  //   expect(linkElement).toBeInTheDocument();
});
