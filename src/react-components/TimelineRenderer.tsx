import { MockAPIComponent } from "../Types";
import React, { useState, useEffect, ChangeEvent } from "react";
import Timeline, { TimelineGroup } from "react-calendar-timeline";
import "react-calendar-timeline/lib/Timeline.css";
import DataConvertHelper from "../DataConvertHelper";
import FilterBox from "./FilterBox";
import moment from "moment";

type TimelineRendererProps = {
  dataComponent: MockAPIComponent;
};

export default function TimelineRenderer(props: TimelineRendererProps) {
  const [groups, setGroups] = useState([]);
  const [items, setItems] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [selectedGroups, updateSelectedGroups] = useState([]);

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

  const handleInputChange = (_event: ChangeEvent<{}>, newInput: string[]) => {
    updateSelectedGroups(newInput);
  };

  const mapTruckNames = (): string[] => {
    return groups.map((group: TimelineGroup) => group.title);
  };

  const getGroupsToShow = (): TimelineGroup[] => {
    return selectedGroups.length
      ? groups.filter((group: TimelineGroup) =>
          selectedGroups.includes(group.title)
        )
      : groups;
  };

  return isLoading ? (
    <div>"Loading Data..."</div>
  ) : (
    <div>
      <div id="combo-box-container">
        <FilterBox
          truckNames={mapTruckNames()}
          onInputChange={handleInputChange}
          selectedGroups={selectedGroups}
        />
      </div>
      <div id="helper-text">
        <p>To zoom in and out, use CTRL + scroll</p>
      </div>
      <Timeline
        groups={getGroupsToShow()}
        items={items}
        defaultTimeStart={moment("2020.02.01 0:00:00")}
        defaultTimeEnd={moment("2020.02.03 0:00:00")}
        lineHeight={100}
        // traditionalZoom={true} -> this does not work :()
        timeSteps={{
          minute: 5,
          hour: 1,
          day: 1,
          month: 1,
          year: 1
        }}
        maxZoom={30 * 86400 * 1000}
      />
    </div>
  );
}
