import {isLessThanDistance} from "../../src/filters";
import shot2544 from "../fixtures/shots/2544.json";

const DEFAULT_MAX_DISTANCE = 35;

describe("isLessThanDistance", () => {
  it("Should correctly filter with max distance", () => {
    const result = shot2544.filter(isLessThanDistance(DEFAULT_MAX_DISTANCE));
    expect(result).toMatchSnapshot("default");
  });

  it("Should correctly filter with max distance of Number.MAX_SAFE_INTEGER", () => {
    const result = shot2544.filter(isLessThanDistance(Number.MAX_SAFE_INTEGER));
    expect(result).toMatchSnapshot("max");
  });

  it("Should correctly filter with max distance of 5", () => {
    const result = shot2544.filter(isLessThanDistance(5));
    expect(result).toMatchSnapshot("5");
  });

  const oneShot = [
    {
      id: 100442,
      game_id: 21600001,
      game_event_id: "8",
      player_id: 2544,
      distance: 11,
      x: -79,
      y: 80,
      made_flag: true,
    },
  ];

  it("Should correctly filter given one shot within max distance", () => {
    const result = oneShot.filter(isLessThanDistance(DEFAULT_MAX_DISTANCE));
    expect(result).toStrictEqual(oneShot);
  });

  it("Should correctly filter given one shot beyond max distance", () => {
    const result = oneShot.filter(isLessThanDistance(5));
    expect(result).toStrictEqual([]);
  });
});
