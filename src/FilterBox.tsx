import React from "react";
import { Dropdown } from "semantic-ui-react";

export default function FilterBox(this: any) {
  type FilterBoxProps = {
    truckNames: string[];
  };

  return (
    <Dropdown
      placeholder="Select Country"
      fluid
      search
      selection
      options={this.props.truckNames}
    />
  );
}
