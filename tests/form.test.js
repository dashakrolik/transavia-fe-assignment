import PageWithJSbasedForm from "../pages/form";
import "@testing-library/jest-dom";
import { render, screen } from "@testing-library/react";

describe("form component", () => {
  it("renders an form component", () => {
    render(<PageWithJSbasedForm />);
    // check if all components are rendered
    expect(screen.getByTestId("form-container")).toBeInTheDocument();
    expect(screen.getByTestId("form-paragraph")).toBeInTheDocument();
    expect(screen.getByTestId("form-fields-container")).toBeInTheDocument();
    expect(screen.getByTestId("flights-form")).toBeInTheDocument();
    expect(screen.getByTestId("flights-form-origin-label")).toBeInTheDocument();

    expect(
      screen.getByTestId("flights-form-origin-field-button")
    ).toBeInTheDocument();
    expect(
      screen.getByTestId("flights-form-destination-label")
    ).toBeInTheDocument();
    expect(
      screen.getByTestId("flights-form-destination-field-button")
    ).toBeInTheDocument();
    expect(
      screen.getByTestId("flights-form-departure-date-label")
    ).toBeInTheDocument();
    expect(
      screen.getByTestId("flights-form-departure-date-field-button")
    ).toBeInTheDocument();
    expect(
      screen.getByTestId("flights-form-submit-button")
    ).toBeInTheDocument();
  });
});
