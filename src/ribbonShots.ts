import binByDistance from "./bin";
import {Shot} from "./types";

interface RibbonBin {
  shootingPct: number;
  width: number;
}

function ribbonShots(data: Shot[], maxDistance: number): RibbonBin[] {
  const bins = binByDistance(data, maxDistance);
  const totalShots = bins.reduce((a, b) => a + b.total, 0);

  const ribbonBins = bins.map((bin) => {
    const shootingPct = bin.total > 0 ? bin.made / bin.total : 0;
    const width = bin.total / totalShots;
    return {
      shootingPct,
      width,
    };
  });

  // TODO: implement smoothing function

  return ribbonBins;
}

export default ribbonShots;
