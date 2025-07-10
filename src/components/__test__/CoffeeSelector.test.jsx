/// <reference types="vitest" />
import { render, screen, fireEvent } from '@testing-library/react';
import CoffeeSelector from '../CoffeeSelector';

describe('CoffeeSelector', () => {
  it('renders coffee options and handles selection', () => {
    const setCoffeeType = vi.fn(); // 👈 using Vitest mock function
    render(<CoffeeSelector coffeeType="" setCoffeeType={setCoffeeType} />);
    const espressoBtn = screen.getByText('Espresso');
    fireEvent.click(espressoBtn);
    expect(setCoffeeType).toHaveBeenCalledWith('Espresso');
  });
});
