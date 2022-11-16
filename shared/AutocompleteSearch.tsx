import { FC } from "react";

import Autocomplete from "@mui/material/Autocomplete";

import TextField from "@mui/material/TextField";

// define types instead of any
type TAutoCompleteSearchProps = {
  options: { name: string; id: string }[];
  sx: any;
  textfieldId: string;
  textfieldName: string;
  textfieldLabel: string;
};

const AutoCompleteSearch: FC<TAutoCompleteSearchProps> = (props) => {
  const { options, sx, textfieldId, textfieldName, textfieldLabel } = props;

  return (
    <div data-testid="autocomplete-container">
      <Autocomplete
        data-testid="autocomplete"
        isOptionEqualToValue={(option: any, value) =>
          option.value === value.value
        }
        renderOption={(props: any, option) => (
          <div key={option.name} {...props}>
            {option.name}
          </div>
        )}
        getOptionLabel={(option) => option.id}
        disablePortal
        id="combo-box-demo"
        options={options}
        sx={sx}
        renderInput={(params) => (
          <TextField
            data-testid="autocomplete-input"
            {...params}
            id={textfieldId}
            name={textfieldName}
            label={textfieldLabel}
            required
          />
        )}
      />
    </div>
  );
};
export default AutoCompleteSearch;
