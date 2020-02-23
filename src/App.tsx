import React from "react";
import "./styles.css";

// make sure you include the timeline stylesheet or the timeline will not be styled
import "react-calendar-timeline/lib/Timeline.css";
import TimelineRenderer from "./TimelineRenderer";
import TestDataComponent from "./TestDataComponent";
import DataConvertHelper from "./DataConvertHelper";

const createOrderIdNumberFromIdString = (orderId: string) => {
  return parseInt(orderId.match(/\d+/)[0], 10);
};

export { createOrderIdNumberFromIdString };

export default function App() {
  const dataConvertHelper = new DataConvertHelper();
  const testDataComponent = new TestDataComponent(dataConvertHelper);

  return (
    <TimelineRenderer
      dataComponent={testDataComponent}
      dataConvertHelper={dataConvertHelper}
    />
  );
}
