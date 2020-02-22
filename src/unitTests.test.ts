import { createOrderIdNumberFromIdString } from "./App";

describe("createOrderIdNumberFromIdString", () => {
  it("should get and convert the number part from the end of the 'id' string", () => {
    const result = createOrderIdNumberFromIdString("order13");

    // could have used 'toStrictEqual' for these assertions in one line, but
    // it does not work here (even though code completion offers its use.)
    expect(result).toEqual(13);
    expect(typeof result).toEqual("number");
    expect(result).not.toEqual("13");
  });

  // it("should get and convert the number part from the end of the 'id' string", () => {
  //   const result = createOrderIdNumberFromIdString("order13");

  //   expect(result).toStrictEqual(13);
  // });
});
