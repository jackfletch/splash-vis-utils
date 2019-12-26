import {isLessThanDistance} from "./filters";
import {Shot} from "./types";

export interface Bin {
  made: number;
  total: number;
}

function bin(shots: Shot[], maxDistance: number): Bin[] {
  const bins: Bin[] = Array(maxDistance + 1)
    .fill(undefined)
    .map(() => ({made: 0, total: 0}));

  shots.filter(isLessThanDistance(maxDistance)).forEach(shot => {
    const {distance, made_flag} = shot;
    bins[distance].total += 1;
    bins[distance].made += +made_flag;
  });

  return bins;
}

export default bin;
