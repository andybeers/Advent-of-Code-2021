import fs from "fs";

export function readInputFile() {
  return fs.readFileSync("./input.txt", "utf-8");
}

export function getStrings() {
  return readInputFile().split("\n");
}

export function getNumbers() {
  return getStrings().map((s) => parseInt(s, 10));
}
