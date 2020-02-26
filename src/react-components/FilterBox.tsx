import React, { ChangeEvent } from "react";
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
      id="combo-box"
      options={props.truckNames}
      getOptionLabel={option => option}
      filterSelectedOptions
      style={{ width: 400 }}
      onChange={props.onInputChange}
      renderInput={params => (
        <TextField
          {...params}
          label="Truck filter"
          variant="outlined"
          placeholder="Filter for as many trucks as you want"
        />
      )}
    />
  );
}
