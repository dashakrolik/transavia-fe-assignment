import IndexPage from "../pages/index";
import "@testing-library/jest-dom";
import { render, screen } from "@testing-library/react";

describe("index page", () => {
  it("renders an index page", () => {
    render(<IndexPage />);
    // check if all components are rendered
    expect(screen.getByTestId("h1")).toBeInTheDocument();
    expect(screen.getByTestId("link-to-transavia-website")).toBeInTheDocument();
    expect(screen.getByTestId("link-to-form")).toBeInTheDocument();
    expect(screen.getByTestId("h2-proceed")).toBeInTheDocument();
    expect(screen.getByTestId("image-transavia-logo")).toBeInTheDocument();
  });
});
