import { render, screen } from '../test-utils';
import Contact from '../Contact';

describe('Contact component', () => {
  beforeEach(() => {
    render(<Contact />);
  });
  it('renders greeting with name', () => {
    expect(screen.getByText('Get in Touch')).toBeInTheDocument();
    expect(screen.getByText('Contact details')).toBeInTheDocument();
  });

  it('has a submit button', () => {
    expect(screen.getByRole('button', { name: /submit/i })).toBeInTheDocument();
  });
});

// // src/components/Hello.test.tsx
// import { render, screen } from "@testing-library/react";
// import Contact from "./Contact";

// // Mock the store
// // jest.mock("@/stores/useCartStore", () => ({
// //   useCartStore: jest.fn(() => ({
// //     cartItems: [],
// //     addToCart: jest.fn(),
// //   })),
// // }));

// test("renders greeting with name", () => {
//   render(<Contact />);
//   const heading = screen.getByText("Get in Touch");
//   expect(heading).toBeInTheDocument();
// });
