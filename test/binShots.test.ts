import {binShots} from "../src";
import shot2544 from "./fixtures/shots/2544.json";

const DEFAULT_MAX_DISTANCE = 35;

describe("binShots", () => {
  it("Should correctly bin shots", () => {
    const result = binShots(shot2544, DEFAULT_MAX_DISTANCE);
    expect(result).toMatchSnapshot("default");
  });

  it("Should correctly bin shots with max distance of Number.MAX_SAFE_INTEGER", () => {
    const result = binShots(shot2544, Number.MAX_SAFE_INTEGER);
    expect(result).toMatchSnapshot("max");
  });

  it("Should correctly bin shots with max distance of 5", () => {
    const result = binShots(shot2544, 5);
    expect(result).toMatchSnapshot("5");
  });

  it("Should correctly bin shots given only one shot", () => {
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
    const result = binShots(shots, DEFAULT_MAX_DISTANCE);
    expect(result).toMatchSnapshot("default");
  });
});
