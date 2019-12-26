interface HasDistance {
  distance: number;
}

const isLessThanDistance = (distance: number) => (el: HasDistance): boolean =>
  el.distance <= distance;

export default isLessThanDistance;
