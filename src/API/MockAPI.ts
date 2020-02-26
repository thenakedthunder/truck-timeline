import { MockAPIComponent, APIData } from "../Types";
import JsonDataProvider from "./JsonDataProvider.js";

// ezt itthagytam, hogy látszódjon, ezzel is próbálkoztam. A codesandbox
// erre hibát dobott, és javasolta, hogy állítsam a resolveJsonModule-t
// true-ra a tsconfigban. Megtettem. A hiba megmaradt. ->
// import trucktimeline from "./trucktimeline.json";

export default class MockAPI implements MockAPIComponent {
  // nagyon sokat próbálkoztam, hogy vmi ennél értelmesebb  dolgot
  // összehozzak (pl. fetch() a fájlból), sajnos nem jártam sikerrel.
  getData = () => {
    return new Promise<APIData>(resolve => {
      resolve(JsonDataProvider.callMockApiCall());
    });
  };
}
