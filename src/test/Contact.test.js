import { render } from "@testing-library/react";
import Contact from "../components/Contact";
import { screen } from "@testing-library/react";
import '@testing-library/jest-dom';

describe("Should test Contact Component", () => {

    test('component heading should load', () => {
        // Render component
        render(<Contact/>);
        // Query element
        const heading = screen.getByRole("heading");
        // Assertion
        expect(heading).toBeInTheDocument();
    })
});