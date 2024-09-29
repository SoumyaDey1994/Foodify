import { render } from "@testing-library/react";
import Contact from "../components/Contact";
import { screen } from "@testing-library/react";
import "@testing-library/jest-dom";

describe("Test Contact Component", () => {
  test("component heading should load", () => {
    // Render component
    render(<Contact />);
    // Query element
    const heading = screen.getByRole("heading");
    // Assertion
    expect(heading).toBeInTheDocument();
  });

  test("component should have submit button", () => {
    // Render component
    render(<Contact />);
    // Query element
    const button = screen.getByRole("button");
    // Assertion
    expect(button).toBeInTheDocument();
  });

  test("component should have 2 input boxes", () => {
    // Render component
    render(<Contact />);
    // Query element
    const inputs = screen.getAllByRole("textbox");
    // Assertion
    expect(inputs.length).toBe(2);
  });
});
