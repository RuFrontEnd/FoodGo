import React from 'react';
import { render } from '@testing-library/react';
import MyFavSect, { getMyFav } from 'components/myFavSect/MyFavSect';
import { useSelector } from 'react-redux';
// import { jest } from '@jest/globals';

const currentUser = useSelector((state) => state.member.currentUser);
test('renders learn react link', async () => {
  console.log('getMyFav', await getMyFav(currentUser));
  //   const { getByText } = render(<MyFavSect />);
  //   const req = jest.fn();
  //   const linkElement = getByText(/learn react/i);
  //   expect(linkElement).toBeInTheDocument();
});
