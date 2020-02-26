import React from "react";
import "../styles.css";

import "react-calendar-timeline/lib/Timeline.css";
import TimelineRenderer from "./TimelineRenderer";
// teszteléshez:
// import TestDataComponent from "./test/TestDataComponent";
import MockAPI from "../API/MockAPI";

export default function App() {
  // igazából ezt csak a tesztelés miatt csináltam így, hogy be lehessen injektálni
  // a tesztadatokat adó komponenst /vagy a mockAPIt az "igazi" adatokkal/
  // const mockAPI = new TestDataComponent();

  const mockAPI = new MockAPI();

  return <TimelineRenderer dataComponent={mockAPI} />;
}
