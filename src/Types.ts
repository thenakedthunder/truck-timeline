import { Moment } from "moment";
import { TimelineItem, TimelineGroup } from "react-calendar-timeline";

export type Truck = {
  name: string;
  assignedOrderId: string[];
};

export type Order = {
  id: string;
  start_time: Moment;
  end_time: Moment;
};

export interface DataComponentInterface {
  getGroups: () => TimelineGroup[];
  getItems: () => TimelineItem[];
}

// export interface TimelineGroup {
//   id: number;
//   title: React.ReactNode;
//   rightTitle?: React.ReactNode;
// }

// export interface TimelineItem {
//   id: number;
//   group: number;
//   title?: React.ReactNode;
//   start_time: any;
//   end_time: any;
//   canMove?: boolean;
//   canResize?: boolean | "left" | "right" | "both";
//   canChangeGroup?: boolean;
//   className?: string;
//   itemProps?: {};
// }
