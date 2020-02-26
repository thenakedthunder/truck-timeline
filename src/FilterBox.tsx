import React, { ChangeEvent, useState } from "react";
import TextField from "@material-ui/core/TextField";
import Autocomplete from "@material-ui/lab/Autocomplete";

type FilterBoxProps = {
  truckNames: string[];
  onInputChange: (
    event: ChangeEvent<{}>,
    selected: string,
    reason: "input" | "reset" | "clear"
  ) => void;
};

const [selected, updateSelected] = useState([]);

const handleInputChange: (
  event: ChangeEvent<{}>,
  selected: string,
  reason: "input" | "reset" | "clear"
) => {
  updateSelected(selected);
};

export default function FilterBox(props: FilterBoxProps) {
  return (
    <Autocomplete
      multiple={true}
      value={selected}
      id="combo-box-demo"
      options={props.truckNames}
      getOptionLabel={option => option}
      filterSelectedOptions
      style={{ width: 300 }}
      onInputChange={handleInputChange}
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
