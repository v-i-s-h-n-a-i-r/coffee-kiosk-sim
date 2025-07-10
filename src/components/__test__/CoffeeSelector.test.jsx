import { render, screen, fireEvent } from '@testing-library/react';
import CoffeeSelector from '../CoffeeSelector';
import '@testing-library/jest-dom';

test('renders coffee options and handles selection', () => {
  const setCoffeeType = vi.fn();
  render(<CoffeeSelector coffeeType="" setCoffeeType={setCoffeeType} />);
  const espressoBtn = screen.getByText('Espresso');
  fireEvent.click(espressoBtn);
  expect(setCoffeeType).toHaveBeenCalledWith('Espresso');
});
