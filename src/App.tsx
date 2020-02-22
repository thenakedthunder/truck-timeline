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
  return parseInt(orderId.match(/\d+/)[0], 10);
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
    const orderHash: {} = orders.reduce(
      (hash, { id, start_time, end_time }) => {
        hash[id] = { start_time, end_time, group: null };
        return hash;
      },
      {}
    );

    assignGroupsToTimelineItems(trucks, orderHash);

    return orders.map(order => ({
      id: createOrderIdNumberFromIdString(order.id),
      group: orderHash[order.id].group,
      title: order.id,
      start_time: order.start_time,
      end_time: order.end_time
    }));
  };

  const assignGroupsToTimelineItems = (
    trucks: Truck[],
    orderHash: {}
  ): void => {
    trucks.forEach(truck => {
      truck.assignedOrderId.forEach(id => {
        orderHash[id].group = truck;
      });
    });
  };

  return (
    <div>
      <Timeline
        groups={convertTrucksToTimelineGroups(trucks)}
        items={convertOrdersToTimelineItems(orders)}
        defaultTimeStart={moment("2020.02.01 0:00:00")}
        defaultTimeEnd={moment("2020.02.03 0:00:00")}
      />
    </div>
  );
}
