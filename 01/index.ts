import { getNumbers } from "../utils";

const depths = getNumbers();

function getDepthIncreaseCount(depths: number[]): number {
  let depthIncreaseCount = 0;

  for (let i = 1; i < depths.length; i++) {
    if (depths[i] > depths[i - 1]) {
      depthIncreaseCount++;
    }
  }

  return depthIncreaseCount;
}

console.log(getDepthIncreaseCount(depths));
