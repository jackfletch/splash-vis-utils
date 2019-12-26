import bin, {Bin} from "./bin";
import {Shot} from "./types";

interface BinnedShots {
  bins: Bin[];
  totalShots: number;
  totalShotsWithinMaxDistance: number;
  totalMakes: number;
}

function binShots(shots: Shot[], maxDistance: number): BinnedShots {
  const bins = bin(shots, maxDistance);

  return {
    bins,
    totalShots: shots.length,
    totalShotsWithinMaxDistance: bins.reduce((a, b) => a + b.total, 0),
    totalMakes: bins.reduce((a, b) => a + b.made, 0),
  };
}

export default binShots;
