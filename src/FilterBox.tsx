import React, { ChangeEvent, useState } from "react";
import TextField from "@material-ui/core/TextField";
import Autocomplete from "@material-ui/lab/Autocomplete";

type FilterBoxProps = {
  truckNames: string[];
  onInputChange: (event: ChangeEvent<{}>, selected: string[]) => void;
  selectedGroups: string[];
};

export default function FilterBox(props: FilterBoxProps) {
  return (
    <Autocomplete
      multiple={true}
      value={props.selectedGroups}
      id="combo-box-demo"
      options={props.truckNames}
      getOptionLabel={option => option}
      filterSelectedOptions
      style={{ width: 300 }}
      onChange={props.onInputChange}
      renderInput={params => (
        <TextField
          {...params}
          label="Combo box"
          variant="outlined"
          placeholder="Filter"
        />
      )}
    />
  );
}
