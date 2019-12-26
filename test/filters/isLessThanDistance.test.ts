import {isLessThanDistance} from "../../src/filters";
import {DEFAULT_DISTANCE, MAX_DISTANCE, SMALL_DISTANCE} from "../constants";
import shot2544 from "../fixtures/shots/2544.json";

describe("isLessThanDistance", () => {
  it(`Should correctly filter with max distance of ${DEFAULT_DISTANCE}`, () => {
    const result = shot2544.filter(isLessThanDistance(DEFAULT_DISTANCE));
    expect(result).toMatchSnapshot();
  });

  it(`Should correctly filter with max distance of ${MAX_DISTANCE}`, () => {
    const result = shot2544.filter(isLessThanDistance(MAX_DISTANCE));
    expect(result).toMatchSnapshot();
  });

  it(`Should correctly filter with max distance of ${SMALL_DISTANCE}`, () => {
    const result = shot2544.filter(isLessThanDistance(SMALL_DISTANCE));
    expect(result).toMatchSnapshot();
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
    const result = oneShot.filter(isLessThanDistance(DEFAULT_DISTANCE));
    expect(result).toStrictEqual(oneShot);
  });

  it("Should correctly filter given one shot beyond max distance", () => {
    const result = oneShot.filter(isLessThanDistance(SMALL_DISTANCE));
    expect(result).toStrictEqual([]);
  });
});
