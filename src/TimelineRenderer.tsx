import DataComponentInterface from "./Types";
import React from "react";
import moment from "moment";
import Timeline from "react-calendar-timeline";
// make sure you include the timeline stylesheet or the timeline will not be styled
import "react-calendar-timeline/lib/Timeline.css";

type TimelineRendererProps = {
  dataComponent: DataComponentInterface;
};

export default function TimelineRenderer(props: TimelineRendererProps) {
  const [trucks, updateTrucks] = React.useState(
    props.dataComponent.getGroups()
  );
  const [orders, updateOrders] = React.useState(props.dataComponent.getItems());

  return (
    <div>
      <Timeline
        groups={trucks}
        items={orders}
        defaultTimeStart={moment("2020.02.01 0:00:00")}
        defaultTimeEnd={moment("2020.02.03 0:00:00")}
      />
    </div>
  );
}
