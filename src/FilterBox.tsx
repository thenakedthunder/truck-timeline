import DropDownInput from "react-dropdown-input";

export default function FilterBox() {
  type FilterBoxProps = {
    truckNames: string[];
  };

  return <DropDownInput options={this.props.truckNames} />;
}
