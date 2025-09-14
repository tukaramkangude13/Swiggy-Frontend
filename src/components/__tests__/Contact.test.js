import { render, screen, fireEvent } from "@testing-library/react";
import { ContactUs } from "../ContactUs";
import "@testing-library/jest-dom"; // For matchers like toBeInTheDocument

describe("ContactUs Component", () => {
  test("renders the ContactUs page correctly", () => {
    // Render the ContactUs component
    render(<ContactUs />);

    // Check if the heading is present
    const heading = screen.getByRole("heading", { name: /contact us/i });
    expect(heading).toBeInTheDocument();

    // Check if the form elements are rendered
    expect(screen.getByLabelText(/name/i)).toBeInTheDocument();
    expect(screen.getByLabelText(/email/i)).toBeInTheDocument();
    expect(screen.getByLabelText(/message/i)).toBeInTheDocument();

    // Check if the submit button is rendered
    const submitButton = screen.getByRole("button", { name: /send message/i });
    expect(submitButton).toBeInTheDocument();
  });

  test("updates input values when typed into", () => {
    render(<ContactUs />);

    // Type into the Name field
    const nameInput = screen.getByLabelText(/name/i);
    fireEvent.change(nameInput, { target: { value: "John Doe" } });
    expect(nameInput.value).toBe("John Doe");

    // Type into the Email field
    const emailInput = screen.getByLabelText(/email/i);
    fireEvent.change(emailInput, { target: { value: "john.doe@example.com" } });
    expect(emailInput.value).toBe("john.doe@example.com");

    // Type into the Message field
    const messageInput = screen.getByLabelText(/message/i);
    fireEvent.change(messageInput, { target: { value: "Hello, this is a test message." } });
    expect(messageInput.value).toBe("Hello, this is a test message.");
  });

  test("shows error message if form is submitted with empty fields", () => {
    render(<ContactUs />);

    const submitButton = screen.getByRole("button", { name: /send message/i });
    fireEvent.click(submitButton);

    // Check for the error message
    const errorMessage = screen.getByText(/please fill in all fields\./i);
    expect(errorMessage).toBeInTheDocument();
  });

  test("shows success message on valid form submission", () => {
    render(<ContactUs />);

    // Fill in valid inputs
    fireEvent.change(screen.getByLabelText(/name/i), { target: { value: "John Doe" } });
    fireEvent.change(screen.getByLabelText(/email/i), { target: { value: "john.doe@example.com" } });
    fireEvent.change(screen.getByLabelText(/message/i), { target: { value: "This is a test message." } });

    // Submit the form
    const submitButton = screen.getByRole("button", { name: /send message/i });
    fireEvent.click(submitButton);

    // Check for the success message
    const successMessage = screen.getByText(/thank you for reaching out! we will get back to you soon\./i);
    expect(successMessage).toBeInTheDocument();
  });

  test("displays customer support details", () => {
    render(<ContactUs />);

    // Check for customer support details
    expect(screen.getByText(/customer support: \+91 9876543210/i)).toBeInTheDocument();
    expect(screen.getByText(/email: support@swiggyclone\.com/i)).toBeInTheDocument();
    expect(screen.getByText(/123 foodie street, swiggy city, india/i)).toBeInTheDocument();
  });
});
