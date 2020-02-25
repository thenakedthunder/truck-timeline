import { DataComponentInterface } from "./Types";
import React, { useState, useEffect } from "react";
import moment from "moment";
import { Timeline, TimelineGroup, TimelineItem } from "react-calendar-timeline";
// make sure you include the timeline stylesheet or the timeline will not be styled
import "react-calendar-timeline/lib/Timeline.css";
import DataConvertHelper from "./DataConvertHelper";
import FilterBox from "./FilterBox";

type TimelineRendererProps = {
  dataComponent: DataComponentInterface;
};

export default function TimelineRenderer(props: TimelineRendererProps) {
  const [groups, setGroups]: TimelineGroup[] = useState([]);
  const [items, setItems]: TimelineItem[] = useState([]);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    props.dataComponent
      .getData()
      .then(response => {
        setGroups(
          DataConvertHelper.convertTrucksToTimelineGroups(response.trucks)
        );
        setItems(
          DataConvertHelper.convertOrdersToTimelineItems(
            response.orders,
            response.trucks
          )
        );
        setIsLoading(false);
      })
      .catch(error => console.log(error));
  }, [props.dataComponent]);

  return isLoading ? (
    "Loading Data..."
  ) : (
    <div>
      <FilterBox
        truckNames={groups.map((group: TimelineGroup) => group.title)}
      />
      <Timeline
        groups={groups}
        items={items}
        defaultTimeStart={moment("2020.02.01 0:00:00")}
        defaultTimeEnd={moment("2020.02.03 0:00:00")}
      />
    </div>
  );
}
