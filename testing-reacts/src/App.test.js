import { render, screen } from '@testing-library/react';
import App from './App';

// these is already in the app

test('renders learn react link', () => {
  render(<App />);
  const linkElement = screen.getByText("Button testing in react");
  expect(linkElement).toBeInTheDocument();
});
