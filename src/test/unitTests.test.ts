import DataConvertHelper from "../DataConvertHelper";
import { Truck, Order } from "../Types";
import moment from "moment";

// test data
const trucksExampleArray: Truck[] = [
  {
    name: "truck1",
    assignedOrderId: ["order1", "order2"]
  }
];

const ordersExampleArray: Order[] = [
  {
    id: "order1",
    from: "2020.02.01 14:00:00",
    to: "2020.02.01 18:00:00"
  },

  {
    id: "order2",
    from: "2020.02.02 06:00:00",
    to: "2020.02.02 12:00:00"
  }
];

describe("_createOrderIdNumberFromIdString", () => {
  it("should get and convert the number part from the end of the 'id' string", () => {
    // while this shows an error in CSb, this actually works
    const result = DataConvertHelper["_createOrderIdNumberFromIdString"](
      "order13"
    );

    // could have used 'toStrictEqual' for these assertions in one line, but
    // it does not work here (even though code completion offers its use.)
    expect(result).toEqual(13);
    expect(typeof result).toEqual("number");
    expect(result).not.toEqual("13");
  });
});

describe("convertTrucksToTimelineGroups", () => {
  it("should return the TimelineGroup array correctly", () => {
    const result = DataConvertHelper.convertTrucksToTimelineGroups(
      trucksExampleArray
    );
    const expectedResult = [
      {
        id: 1,
        title: "truck1"
      }
    ];

    expect(result).toEqual(expectedResult);
  });
});

describe("_mapTruckIdsToOrderIds", () => {
  it("should map the right truck ids to the order ids", () => {
    const result = DataConvertHelper["_mapTruckIdsToOrderIds"](
      trucksExampleArray
    );

    const expectedResult = {
      order1: 1,
      order2: 1
    };

    expect(result).toEqual(expectedResult);
  });
});

describe("convertOrdersToTimelineItems", () => {
  it("should return the TimelineItem array correctly", () => {
    const result = DataConvertHelper.convertOrdersToTimelineItems(
      ordersExampleArray,
      trucksExampleArray
    );
    const expectedResult = [
      {
        id: 1,
        group: 1,
        title: "order1",
        start_time: moment("2020.02.01 14:00:00"),
        end_time: moment("2020.02.01 18:00:00")
      },
      {
        id: 2,
        group: 1,
        title: "order2",
        start_time: moment("2020.02.02 06:00:00"),
        end_time: moment("2020.02.02 12:00:00")
      }
    ];

    expect(result).toEqual(expectedResult);
  });
});
