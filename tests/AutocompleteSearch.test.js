import "@testing-library/jest-dom";
import { fireEvent, render, screen } from "@testing-library/react";
import AutoCompleteSearch from "../shared/AutoCompleteSearch";

describe("autocomplete search component", () => {
  it("renders autocomplete", async () => {
    render(
      <AutoCompleteSearch
        onOptionSelect={jest.fn()}
        options={[
          { value: "name1", id: "id1" },
          { value: "name2", id: "id2" },
        ]}
        sx={{}}
        textFieldId="textFieldId"
        textfieldName="textfieldName"
        textfieldLabel="textfieldLabel"
      />
    );
    const autocomplete = screen.getByTestId("autocomplete");

    const input = screen
      .getByTestId("autocomplete-input")
      // eslint-disable-next-line testing-library/no-node-access
      .querySelector("input");

    autocomplete.focus();
    // assign value to input field
    fireEvent.change(input, { target: { value: "value" } });
    // navigate to the first item in the autocomplete box
    fireEvent.keyDown(autocomplete, { key: "ArrowDown" });
    // select the first item
    fireEvent.keyDown(autocomplete, { key: "Enter" });
    // check the new value of the input field
    expect(input).toHaveValue("id1");
    expect(screen.getByTestId("autocomplete-container")).toBeInTheDocument();
  });
});
