import { DataComponentInterface, Truck, Order } from "./Types";

export default class JsonDataProviderComponent
  implements DataComponentInterface {
  private trucksArray: Truck[];
  private ordersArray: Order[];

  constructor() {
    this.createArraysFromJson();
  }

  private createArraysFromJson = async () => {
    const response = await fetch(
      "https://nexogenshares.blob.core.windows.net/recruitment/trucktimeline.json"
    );

    await response.json().then(json => {
      const result = JSON.parse(json);
      this.trucksArray = result.trucks;
      this.ordersArray = result.orders;
    });
  };
}
