import React from 'react';
import { render, screen } from '@testing-library/react';
import { BrowserRouter } from 'react-router-dom';
import NavBar from '../NavBar';

describe('<NavBar />', () => {
  it('Renders NavBar component correctly', () => {
    const { getByText } = render(
      <BrowserRouter>
        <NavBar />
      </BrowserRouter>,
    );
    expect(getByText(/Movies/i)).toBeInTheDocument();
  });

  it('Render correct NavBar Brand name', () => {
    const { getByText } = render(
      <BrowserRouter>
        <NavBar />
      </BrowserRouter>,
    );
    expect(getByText(/Palace/i)).toBeInTheDocument();
  });

  it('Render NavBar input', () => {
    render(<BrowserRouter><NavBar /></BrowserRouter>);
    const inputNode = screen.getByPlaceholderText('Search Movie');
    expect(inputNode).toBeTruthy();
  });
});
