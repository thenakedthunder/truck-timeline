export type Truck = {
  name: string;
  assignedOrderId: string[];
};

export type Order = {
  id: string;
  from: string;
  to: string;
};

export type ApiData = {
  trucks: Truck[];
  orders: Order[];
};

export interface DataComponentInterface {
  getData: () => Promise<ApiData>;
}
