import { render, screen } from '@testing-library/react';
import App from './App';

describe('Testing our weather app', () =>{
  test('renders page title Weather App', () => {
    render(<App />);
    const linkElement = screen.getByText(/Weather App/i);
    expect(linkElement).toBeInTheDocument();
  });

}
  
)

