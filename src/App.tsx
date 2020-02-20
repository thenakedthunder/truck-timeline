import React from "react";
import "./styles.css";

import Timeline from "react-calendar-timeline";
// make sure you include the timeline stylesheet or the timeline will not be styled
import "react-calendar-timeline/lib/Timeline.css";
import moment from "moment";

export default function App() {
  const trucks = [{ name: "truck1", assignedOrderId: ["order1", "order2"] }];

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

  return (
    <div>
      <Timeline
        groups={trucks}
        items={orders}
        defaultTimeStart={moment().add(-12, "hour")}
        defaultTimeEnd={moment().add(12, "hour")}
      />
    </div>
  );
}
