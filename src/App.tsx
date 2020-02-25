import React from "react";
import "./styles.css";

// make sure you include the timeline stylesheet or the timeline will not be styled
import "react-calendar-timeline/lib/Timeline.css";
import TimelineRenderer from "./TimelineRenderer";
import TestDataComponent from "./TestDataComponent";
import JsonDataProviderComponent from "./JsonDataProviderComponent";

const createOrderIdNumberFromIdString = (orderId: string) => {
  return parseInt(orderId.match(/\d+/)[0], 10);
};

export { createOrderIdNumberFromIdString };

export default function App() {
  // inject the data component here that will serve data
  // const dataComponent = new TestDataComponent();
  const dataComponent = new JsonDataProviderComponent();

  return (
    <div>
      <TimelineRenderer dataComponent={dataComponent} />
    </div>
  );
}
