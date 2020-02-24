import { DataComponentInterface, Truck, Order } from "./Types";
import DataConvertHelper from "./DataConvertHelper";

export default class JsonDataProviderComponent
  implements DataComponentInterface {
  private trucksArray: Truck[];
  private ordersArray: Order[];
  isDataLoaded: boolean = false;

  constructor() {
    this.createArraysFromJson();
  }

  createArraysFromJson = async () => {
    const response = await fetch(
      "https://nexogenshares.blob.core.windows.net/recruitment/trucktimeline.json"
    );

    await response.json().then(json => {
      const result = JSON.parse(json);
      this.trucksArray = result.trucks;
      this.ordersArray = result.orders;
      this.isDataLoaded = true;
    });
  };

  getGroups = () =>
    DataConvertHelper.convertTrucksToTimelineGroups(this.trucksArray);

  getItems = () =>
    DataConvertHelper.convertOrdersToTimelineItems(
      this.ordersArray,
      this.trucksArray
    );
}
