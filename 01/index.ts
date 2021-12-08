import { getNumbers, sum } from "../utils";

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

// Sliding window of 3 values
function getDepthSumIncreaseCount(depths: number[]): number {
  let depthIncreaseCount = 0;
  let previousDepthSum = 0;
  let currentDepthSum = 0;

  for (let i = 0; i < depths.length - 2; i++) {
    currentDepthSum = depths[i] + depths[i + 1] + depths[i + 2];
    if (previousDepthSum && currentDepthSum > previousDepthSum) {
      depthIncreaseCount++;
    }
    previousDepthSum = currentDepthSum;
  }

  return depthIncreaseCount;
}

console.log("Times depth increases: ", getDepthIncreaseCount(depths));
console.log("Times depth sum increases: ", getDepthSumIncreaseCount(depths));
