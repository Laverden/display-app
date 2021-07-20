import { render, screen } from '@testing-library/react';
import Header from '../Header';

describe("Header", () => {

  it('should render same text passed into title prop', () => {
    render(<Header title="My Header"/>);
    const headingElement = screen.getByText(/my header/i);
    expect(headingElement).toBeInTheDocument();
  });

})

// it('should render heading role element with same text passed into title prop', () => {
//   render(<Header title="My Header"/>);
//   const headingElement = screen.getByRole("heading");
//   expect(headingElement).toBeInTheDocument();
// });

// it('should render element with title header', () => {
//   render(<Header title="My Header"/>);
//   const headingElement = screen.getByTitle("header");
//   expect(headingElement).toBeInTheDocument();
// });

// it('should render element with test id main-header', () => {
//   render(<Header title="My Header"/>);
//   const headingElement = screen.getByTestId("main-header");
//   expect(headingElement).toBeInTheDocument();
// });

// // Find By
// it('should render same text passed into title prop [async]', async () => {
//   render(<Header title="My Header"/>);
//   const headingElement = await screen.findByText(/my header/i);
//   expect(headingElement).toBeInTheDocument();
// });

// // Query By
// it('should not render a second Header', async () => {
//   render(<Header title="My Header"/>);
//   const headingElement = screen.queryByText(/a header/i);
//   expect(headingElement).not.toBeInTheDocument();
// });