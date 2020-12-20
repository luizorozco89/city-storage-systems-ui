import { render, screen } from '@testing-library/react';
import SearchInputContainer from './search-input-container';

describe('search input container', () => {
  const handleChange = () => {};
  const matchesQuantity = 0;

  it('matches found element displays when input value is not empty', () => {
    const searchInputValue = '23.45';
    render(<SearchInputContainer handleChange={handleChange} searchInputValue={searchInputValue} matchesQuantity={matchesQuantity} />);
    const serachInputContainer = screen.getByTestId('search-input-container');
    const matchesFoundElement = serachInputContainer.querySelector('#matches-text');
    expect(matchesFoundElement).toBeInTheDocument();
  });

  it('matches found element does not display when input value is empty', () => {
    const searchInputValue = '';
    render(<SearchInputContainer handleChange={handleChange} searchInputValue={searchInputValue} matchesQuantity={matchesQuantity} />);
    const serachInputContainer = screen.getByTestId('search-input-container');
    const matchesFoundElement = serachInputContainer.querySelector('#matches-text');
    expect(matchesFoundElement).not.toBeInTheDocument();
  });

  it('matches found element does not display when input value is undefined', () => {
    let searchInputValue;
    render(<SearchInputContainer handleChange={handleChange} searchInputValue={searchInputValue} matchesQuantity={matchesQuantity} />);
    const serachInputContainer = screen.getByTestId('search-input-container');
    const matchesFoundElement = serachInputContainer.querySelector('#matches-text');
    expect(matchesFoundElement).not.toBeInTheDocument();
  });
});