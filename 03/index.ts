import { getStrings } from "../utils";

const binaryInput = getStrings();

function convertToDecimal(binary: string): number {
  let decimal = 0;
  for (let i = 0; i < binary.length; i++) {
    decimal += parseInt(binary[i]) * Math.pow(2, binary.length - i - 1);
  }
  return decimal;
}

function getDiagnosticReport(): { gammaRate: string; epsilonRate: string } {
  let gammaRate = "";
  let epsilonRate = "";

  for (let i = 0; i < binaryInput[0].length; i++) {
    let gammaCount = 0;
    binaryInput.forEach((value) => {
      if (value[i] === "1") {
        gammaCount++;
      } else {
        gammaCount--;
      }
    });

    if (gammaCount > 0) {
      gammaRate += "1";
      epsilonRate += "0";
    } else {
      gammaRate += "0";
      epsilonRate += "1";
    }
  }

  return { gammaRate, epsilonRate };
}

const { gammaRate, epsilonRate } = getDiagnosticReport();

console.log(
  "Power Consumption: ",
  convertToDecimal(gammaRate) * convertToDecimal(epsilonRate)
);
