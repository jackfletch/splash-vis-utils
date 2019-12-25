import {Point, Shot} from "./types";

interface ShotDistanceMap {
  [index: number]: Shot[];
}

interface BinnedShots {
  binData: Point[];
  totalShots: number;
  totalMakes: number;
}

function binShots(data: Shot[], maxDistance: number): BinnedShots {
  const binnedShots: ShotDistanceMap = {};
  let totalMakes = 0;
  let totalShots = data.length;

  data.forEach(shot => {
    if (shot.distance <= maxDistance) {
      if (shot.distance in binnedShots) {
        binnedShots[shot.distance].push(shot);
      } else {
        binnedShots[shot.distance] = [shot];
      }
      if (shot.made_flag) {
        totalMakes += 1;
      }
    } else {
      totalShots -= 1;
    }
  });

  const binData: Point[] = [];
  let x = 0;

  Object.keys(binnedShots)
    .map(Number)
    .forEach(bin => {
      while (x !== bin) {
        binData.push({x, y: 0});
        x += 1;
      }
      const shots = binnedShots[bin];
      binData.push({x: bin, y: shots.length});
      x += 1;
    });

  const binnedData = {
    binData,
    totalShots,
    totalMakes,
  };
  return binnedData;
}

export default binShots;
