import DataComponentInterface from "./DataComponentInterface";
import { Truck, Order } from "./Types";
import moment from "moment";
import DataConvertHelper from "./DataConvertHelper";

export default class TestDataComponent implements DataComponentInterface {
  dataConvertHelper: DataConvertHelper;
  constructor(convertHelper: DataConvertHelper) {
    this.dataConvertHelper = convertHelper;
  }

  trucksExampleArray: Truck[] = [
    {
      name: "truck1",
      assignedOrderId: ["order1", "order2"]
    }
  ];

  ordersExampleArray: Order[] = [
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
    this.dataConvertHelper.convertTrucksToTimelineGroups(
      this.trucksExampleArray
    );

  getItems = () =>
    this.dataConvertHelper.convertOrdersToTimelineItems(
      this.ordersExampleArray,
      this.trucksExampleArray
    );
}
