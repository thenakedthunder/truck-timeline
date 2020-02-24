import { DataComponentInterface, ApiData, Truck } from "./Types";
import React, { useState, useEffect } from "react";
import moment from "moment";
import Timeline from "react-calendar-timeline";
// make sure you include the timeline stylesheet or the timeline will not be styled
import "react-calendar-timeline/lib/Timeline.css";

type TimelineRendererProps = {
  dataComponent: DataComponentInterface;
};

export default function TimelineRenderer(props: TimelineRendererProps) {
  const [trucks, setTrucks] = useState([]);
  const [orders, setOrders] = useState([]);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    props.dataComponent
      .getData()
      .then(response => {
        setTrucks(response.trucks);
        setOrders(response.orders);
        setIsLoading(false);
      })
      .catch(error => console.log(error));
  }, []);

  return isLoading ? (
    "Loading Data..."
  ) : (
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
