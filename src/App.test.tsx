import React from 'react';
import { render, screen } from '@testing-library/react';
import App from './App';

test('renders the main project heading', async () => {
  render(<App />);
  // We look for a heading with the specific name "My Projects".
  // This is more specific than searching by text and avoids matching the nav link.
  const headingElement = await screen.findByRole('heading', { name: /My Projects/i });
  expect(headingElement).toBeInTheDocument();
});
