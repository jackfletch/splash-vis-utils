import {ribbonShots} from "../src";
import {DEFAULT_DISTANCE, MAX_DISTANCE, SMALL_DISTANCE} from "./constants";
import shot2544 from "./fixtures/shots/2544.json";

describe("ribbonShots", () => {
  it(`Should correctly ribbon shots with max distance of ${DEFAULT_DISTANCE}`, () => {
    const result = ribbonShots(shot2544, DEFAULT_DISTANCE);
    expect(result).toMatchSnapshot();
  });

  it(`Should correctly ribbon shots with max distance of ${MAX_DISTANCE}`, () => {
    const result = ribbonShots(shot2544, MAX_DISTANCE);
    expect(result).toMatchSnapshot();
  });

  it(`Should correctly ribbon shots with max distance of ${SMALL_DISTANCE}`, () => {
    const result = ribbonShots(shot2544, SMALL_DISTANCE);
    expect(result).toMatchSnapshot();
  });

  it("Should correctly ribbon shots given only one shot", () => {
    const shots = [
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
    const result = ribbonShots(shots, DEFAULT_DISTANCE);
    expect(result).toMatchSnapshot();
  });
});
