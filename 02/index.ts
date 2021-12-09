import { getStrings } from "../utils";

function parseInstruction(instruction: string): [string, number] {
  const split = instruction.split(" ");

  return [split[0], parseInt(split[1], 10)];
}

function derivePosition(): [number, number] {
  const instructions = getStrings().map(parseInstruction);

  const position: [horizontalPosition: number, depth: number] = [0, 0];

  for (const [instruction, value] of instructions) {
    switch (instruction) {
      case "forward":
        position[0] += value;
        break;
      case "down":
        position[1] += value;
        break;
      case "up":
        position[1] -= value;
        break;
    }
  }

  return position;
}

const position = derivePosition();

console.log("Final multiplied position value: ", position[0] * position[1]);
