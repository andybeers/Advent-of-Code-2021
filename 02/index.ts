import { getStrings } from "../utils";

function parseInstruction(instruction: string): [string, number] {
  const split = instruction.split(" ");

  return [split[0], parseInt(split[1], 10)];
}

type Position = {
  forward: number;
  depth: number;
};

function derivePosition(): Position {
  const instructions = getStrings().map(parseInstruction);

  const position: Position = {
    forward: 0,
    depth: 0,
  };

  for (const [instruction, value] of instructions) {
    switch (instruction) {
      case "forward":
        position.forward += value;
        break;
      case "down":
        position.depth += value;
        break;
      case "up":
        position.depth -= value;
        break;
    }
  }

  return position;
}

const position = derivePosition();

console.log(
  "Final multiplied position value: ",
  position.depth * position.forward
);

type AimedPosition = Position & { aim: number };

function deriveAimedPosition(): AimedPosition {
  const instructions = getStrings().map(parseInstruction);

  const position: AimedPosition = {
    forward: 0,
    depth: 0,
    aim: 0,
  };

  for (const [instruction, value] of instructions) {
    switch (instruction) {
      case "forward":
        position.forward += value;
        position.depth += value * position.aim;
        break;
      case "down":
        position.aim += value;
        break;
      case "up":
        position.aim -= value;
        break;
    }
  }

  return position;
}

const aimedPosition = deriveAimedPosition();

console.log(
  "Final multiplied aimed position value: ",
  aimedPosition.depth * aimedPosition.forward
);
