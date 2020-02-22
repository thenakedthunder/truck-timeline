import React from "react";
import "./styles.css";

import Timeline, { TimelineItem } from "react-calendar-timeline";
// make sure you include the timeline stylesheet or the timeline will not be styled
import "react-calendar-timeline/lib/Timeline.css";
import moment, { Moment } from "moment";

type Truck = {
  name: string;
  assignedOrderId: string[];
};

type Order = {
  id: string;
  start_time: Moment;
  end_time: Moment;
};

const createOrderIdNumberFromIdString = (orderId: string) => {
  return parseInt(orderId.match(/\d+/)[0]);
};

export { createOrderIdNumberFromIdString };

export default function App() {
  const trucks: Truck[] = [
    {
      name: "truck1",
      assignedOrderId: ["order1", "order2"]
    }
  ];

  const orders = [
    {
      id: "order1",
      start_time: moment("2020.02.01 14:00:00"),
      end_time: moment("2020.02.01 18:00:00")
    },

    {
      id: "order2",
      start_time: moment("2020.02.02 06:00:00"),
      end_time: moment("2020.02.02 12:00:00")
    }
  ];

  const convertTrucksToTimelineGroups = (trucks: Truck[]) => {
    return trucks.map((truck, index = 1) => ({
      id: index,
      title: truck.name
    }));
  };

  const convertOrdersToTimelineItems = (orders: Order[]): TimelineItem[] => {
    return orders.map(order => ({
      id: createOrderIdNumberFromIdString(order.id),
      group: null,
      title: order.id,
      start_time: order.start_time,
      end_time: order.end_time
    }));
  };

  const assignGroupsToTimelineItems = (trucks: Truck[]): void => {};

  return (
    <div>
      <Timeline
        groups={convertTrucksToTimelineGroups(trucks)}
        items={orders}
        defaultTimeStart={moment().add(-12, "hour")}
        defaultTimeEnd={moment().add(12, "hour")}
      />
    </div>
  );
}
