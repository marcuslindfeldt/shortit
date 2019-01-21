import React from 'react';
import { render } from 'react-testing-library';
import { LinkList } from './RecentLinks';

it('renders without crashing', () => {
  const link = {
    id: '$FbaklIYB',
    url: 'https://www.gatsbyjs.org/',
  };

  const { getByTestId } = render(<LinkList links={[link]} />);

  expect(getByTestId('link-list')).not.toBeNull();
});

it('renders a url', () => {
  const links = [
    {
      id: '$FbaklIYB',
      url: 'https://www.gatsbyjs.org/',
    },
  ];
  const { getByText } = render(<LinkList links={links} />);

  expect(getByText(links[0].url)).toBeDefined();
});

it('renders several urls', () => {
  const links = [
    {
      id: '$FbaklIYB',
      url: 'https://www.gatsbyjs.org/',
    },
    {
      id: 'gBtM$q5E6',
      url: 'https://testing-library.com/',
    },
  ];
  const { getByText } = render(<LinkList links={links} />);

  expect(getByText(links[0].url)).toBeDefined();
  expect(getByText(links[1].url)).toBeDefined();
});
