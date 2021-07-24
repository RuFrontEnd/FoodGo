import React from 'react';
import { render } from '@testing-library/react';
import MyFavSect from 'components/myFavSect/MyFavSect';

test('renders learn react link', () => {
  const { getByText } = render(<MyFavSect />);
  const linkElement = getByText(/learn react/i);
  expect(linkElement).toBeInTheDocument();
});
