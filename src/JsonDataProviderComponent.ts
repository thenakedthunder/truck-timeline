import { DataComponentInterface, Truck, Order, ApiData } from "./Types";
import DataConvertHelper from "./DataConvertHelper";
import trucktimeline from "./trucktimeline";

// ezt itthagytam, hogy látszódjon, ezzel is próbálkoztam. A codesandbox
// erre hibát dobott, és javasolta, hogy állítsam a resolveJsonModule-t
// true-ra a tsconfigban. Megtettem. A hiba megmaradt. ->
// import trucktimeline from "./trucktimeline.json";

export default class JsonDataProviderComponent
  implements DataComponentInterface {
  isDataLoaded: boolean = false;

  // nagyon sokat próbálkoztam, hogy vmi ennél értelmesebb  dolgot
  // összehozzak, (pl. fetch() a fájlból) sajnos nem jártam sikerrel.
  getData = () => {
    return new Promise<ApiData>((resolve, reject) => {
      resolve(trucktimeline.callMockApiCall());
    });
  };
}
