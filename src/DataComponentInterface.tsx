import { TimelineGroup, TimelineItem } from "react-calendar-timeline";
import DataConvertHelper from "./DataConvertHelper";

export default interface DataComponentInterface {
  getGroups: () => TimelineGroup[];
  getItems: () => TimelineItem[];
  dataConvertHelper: DataConvertHelper;
}
