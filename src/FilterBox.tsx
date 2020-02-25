import { Dropdown } from "semantic-ui-react";

export default function FilterBox(this: any) {
  type FilterBoxProps = {
    truckNames: string[];
  };

  return (
    <DropDown
      placeholder="Select Country"
      fluid
      search
      selection
      options={countryOptions}
    />
  );
}
