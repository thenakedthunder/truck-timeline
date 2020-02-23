import { Truck, Order } from "./Types";
import { TimelineGroup, TimelineItem } from "react-calendar-timeline";

export default class DataConvertHelper {
  convertTrucksToTimelineGroups(trucks: Truck[]): TimelineGroup[] {
    return trucks.map((truck, index) => ({
      id: index + 1,
      title: truck.name
    }));
  }

  convertOrdersToTimelineItems(
    orders: Order[],
    trucks: Truck[]
  ): TimelineItem[] {
    const hash = this._mapTruckIdsToOrderIds(trucks);

    return orders.map(order => ({
      id: this._createOrderIdNumberFromIdString(order.id),
      group: hash[order.id],
      title: order.id,
      start_time: order.start_time,
      end_time: order.end_time
    }));
  }

  private _createOrderIdNumberFromIdString = (orderId: string) => {
    return parseInt(orderId.match(/\d+/)[0], 10);
  };

  private _mapTruckIdsToOrderIds(trucks: Truck[]) {
    const hash = {};
    trucks.forEach(truck => {
      truck.assignedOrderId.forEach(id => {
        hash[id] = trucks.indexOf(truck) + 1; // this will be the id
      });
    });
    return hash;
  }
}
