import React, { FC } from "react";

import Autocomplete from "@mui/material/Autocomplete";

import TextField from "@mui/material/TextField";
import styles from '../styles/Home.module.css'
// define types instead of any
type TAutoCompleteSearchProps = {
  onOptionSelect(event: any): void;
  options: any;
  sx: any;
  textfieldId: string;
  textfieldName: string;
  textfieldLabel: string;
};

const AutoCompleteSearch: FC<TAutoCompleteSearchProps> = (props) => {
  const { onOptionSelect, options, sx, textfieldId, textfieldName, textfieldLabel } = props;

  return (
    <div>
      <Autocomplete
        isOptionEqualToValue={(option: any, value) => option.value === value.value}
        renderOption={(props: any, option) => (<div key={option.name} {...props} >{option.name}</div>)}
        getOptionLabel={(option) => option.id}
        onSelect={onOptionSelect}
        disablePortal
        id="combo-box-demo"
        options={options}
        sx={sx}
        renderInput={(params) =>  <TextField
          {...params}
          id={textfieldId}
          name={textfieldName}
          label={textfieldLabel}
          required
        />}
      />
    </div>
  );
};
export default AutoCompleteSearch;
