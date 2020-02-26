import { Truck, Order } from "./Types";
import { TimelineGroup, TimelineItem } from "react-calendar-timeline";
import moment from "moment";

export default class DataConvertHelper {
  static convertTrucksToTimelineGroups(trucks: Truck[]): TimelineGroup[] {
    return trucks.map((truck, index) => ({
      id: index + 1,
      title: truck.name
    }));
  }

  static convertOrdersToTimelineItems(
    orders: Order[],
    trucks: Truck[]
  ): TimelineItem[] {
    const hash = this._mapTruckIdsToOrderIds(trucks);

    return orders.map(order => ({
      id: this._createOrderIdNumberFromIdString(order.id),
      group: hash[order.id],
      title: order.id,
      start_time: moment(order.from),
      end_time: moment(order.to)
    }));
  }

  private static _mapTruckIdsToOrderIds(trucks: Truck[]) {
    const hash = {};
    trucks.forEach((truck, index) => {
      truck.assignedOrderId.forEach(id => {
        hash[id] = index + 1; // to get the id of the truck
      });
    });
    return hash;
  }

  private static _createOrderIdNumberFromIdString = (orderId: string) => {
    return parseInt(orderId.match(/\d+/)[0], 10);
  };
}
