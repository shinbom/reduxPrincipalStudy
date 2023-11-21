import { fireEvent, getByText, render, screen } from '@testing-library/react';

import App from './App';
import { container } from 'tsyringe';

test('App', () => {
  render(<App />)
})




const context = describe;

describe('App', () => {
  beforeEach(() => {
    container.clearInstances();
  })
  context('when press increase button twice', () => {
    test('counter', () => {
      render(<App />);
      fireEvent.click(screen.getByText('Increase'));

      expect(screen.getAllByText('Count : 1')).toHaveLength(2);
    })
  })

  context('when press increase button twice', () => {
    test('counter', () => {
      render(<App />);
      fireEvent.click(screen.getByText('Increase'));
      fireEvent.click(screen.getByText('Increase'));

      expect(screen.getAllByText('Count : 2')).toHaveLength(2);
    })
  })
})