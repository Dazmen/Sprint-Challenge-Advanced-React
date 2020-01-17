import React from 'react';
import { render, fireEvent } from '@testing-library/react';
import App from './App';

test('renders without crashing', () => {
  render(<App />)
});

it('Dark Mode Button renders and works', () => {
  const {getByTestId} = render(<App />);

  const button = getByTestId(/darkmodeswitch/i);
  fireEvent.click(button)
})

test('Nav Bar renders', () => {
  const {getByTestId} = render(<App />);

  getByTestId(/navbar/i);
})

test('List of Players Renders', () => {
  const {getByTestId} = render(<App />);

  getByTestId(/playerlist/i);
})

