import {isLessThanDistance} from "./filters";
import {LeftRight, Shot} from "./types";

export interface Bin {
  made: number;
  total: number;
}

function bin(shots: Shot[], maxDistance: number): Bin[] {
  const bins: Bin[] = Array(maxDistance + 1)
    .fill(undefined)
    .map(() => ({made: 0, total: 0}));

  shots.filter(isLessThanDistance(maxDistance)).forEach(shot => {
    const {distance, made} = shot;
    bins[distance].total += 1;
    bins[distance].made += +made;
  });

  return bins;
}

export function binLeftRight(
  shots: Shot[],
  maxDistance: number
): LeftRight<Bin[]> {
  const binsLeft: Bin[] = Array(maxDistance + 1)
    .fill(undefined)
    .map(() => ({made: 0, total: 0}));
  const binsRight: Bin[] = Array(maxDistance + 1)
    .fill(undefined)
    .map(() => ({made: 0, total: 0}));

  shots.filter(isLessThanDistance(maxDistance)).forEach(shot => {
    const {distance, made, x} = shot;
    if (x < 0) {
      binsLeft[distance].total += 1;
      binsLeft[distance].made += +made;
    } else if (x > 0) {
      binsRight[distance].total += 1;
      binsRight[distance].made += +made;
    }
  });

  return {left: binsLeft, right: binsRight};
}

export default bin;
