import { DataComponentInterface, Truck, Order } from "./Types";
import DataConvertHelper from "./DataConvertHelper";

export default class JsonDataProviderComponent
  implements DataComponentInterface {
  private trucksArray: Truck[];
  private ordersArray: Order[];
  isDataLoaded: boolean = false;

  getData = () => {
    return fetch(
      "https://nexogenshares.blob.core.windows.net/recruitment/trucktimeline.json",
      {
        mode: "no-cors"
      }
    );
  };
}
