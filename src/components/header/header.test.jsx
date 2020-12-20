import { render, screen } from '@testing-library/react';
import Header from './header';

describe('header', () => {
  const headerTitleText = 'Header Title';

  it('displays title correctly', () => {
    render(<Header titleText={headerTitleText} />);
    expect(screen.getByText(headerTitleText)).toBeInTheDocument();
  });
});