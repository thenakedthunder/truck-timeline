import { Truck, Order, DataComponentInterface } from "./Types";
import moment from "moment";
import DataConvertHelper from "./DataConvertHelper";

export default class TestDataComponent implements DataComponentInterface {
  isDataLoaded: boolean = true;

  private trucksExampleArray: Truck[] = [
    {
      name: "truck1",
      assignedOrderId: ["order1", "order2"]
    }
  ];

  private ordersExampleArray: Order[] = [
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

  getGroups = () =>
    DataConvertHelper.convertTrucksToTimelineGroups(this.trucksExampleArray);

  getItems = () =>
    DataConvertHelper.convertOrdersToTimelineItems(
      this.ordersExampleArray,
      this.trucksExampleArray
    );
}
