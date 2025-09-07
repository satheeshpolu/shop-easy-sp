import React from "react";
import { render, screen } from "@testing-library/react";
import "@testing-library/jest-dom";
import LoadingText from "../LoadingText";

describe("LoadingText component", () => {
  it("renders the given title", () => {
    const title = "Loading...";
    
    render(<LoadingText title={title} />);
    
    // Check if the element with the text is in the document
    const element = screen.getByText(title);
    expect(element).toBeInTheDocument();

    // Optionally check if it has the correct class
    expect(element).toHaveClass("loadingText");
  });
});
