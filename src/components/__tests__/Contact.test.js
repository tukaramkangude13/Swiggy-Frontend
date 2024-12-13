import { render, screen } from "@testing-library/react";
import { ContactUs } from "../ContactUs";
import "@testing-library/jest-dom"; // Ensure this is imported for matchers like toBeInTheDocument

test("ContactUs page should render correctly", () => {
    // Render the ContactUs component
    render(<ContactUs />);

    const heading = screen.getByRole("heading");

  expect(heading).toBeInTheDocument();
});
