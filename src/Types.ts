export type Truck = {
  name: string;
  assignedOrderId: string[];
};

export type Order = {
  id: string;
  from: string;
  to: string;
};

export type APIData = {
  trucks: Truck[];
  orders: Order[];
};

export interface MockAPIComponent {
  getData: () => Promise<any>;
}
