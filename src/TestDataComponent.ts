import { DataComponentInterface, ApiData } from "./Types";

export default class TestDataComponent implements DataComponentInterface {
  isDataLoaded: boolean = true;

  private testData: ApiData = {
    trucks: [{ name: "truck1", assignedOrderId: ["order1", "order2"] }],
    orders: [
      { id: "order1", from: "2020.02.01 14:00:00", to: "2020.02.01 18:00:00" },
      { id: "order2", from: "2020.02.02 06:00:00", to: "2020.02.02 12:00:00" }
    ]
  };

  getData = () => {
    return new Promise<ApiData>((resolve, reject) => {
      resolve(this.testData);
    });
  };
}
