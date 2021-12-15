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

function getMostCommonValue({
  values,
  tiebreakerValue,
}: {
  values: string[];
  tiebreakerValue: string;
}): string {
  let ones = 0;
  let zeros = 0;

  values.forEach((value) => {
    if (value === "1") {
      ones++;
    } else {
      zeros++;
    }
  });

  if (ones === zeros) {
    return tiebreakerValue;
  }

  if (ones > zeros) {
    return "1";
  }

  return "0";
}

function getLeastCommonValue({
  values,
  tiebreakerValue,
}: {
  values: string[];
  tiebreakerValue: string;
}): string {
  let ones = 0;
  let zeros = 0;

  values.forEach((value) => {
    if (value === "1") {
      ones++;
    } else {
      zeros++;
    }
  });

  if (ones === zeros) {
    return tiebreakerValue;
  }

  if (ones > zeros) {
    return "0";
  }

  return "1";
}

function getOxygenScrubberRating() {
  let oxygenScrubberRatingValues = binaryInput;

  for (let i = 0; i < binaryInput[0].length; i++) {
    const positionValues = oxygenScrubberRatingValues.map((value) => value[i]);
    oxygenScrubberRatingValues = oxygenScrubberRatingValues.filter(
      (value) =>
        value[i] ===
        getMostCommonValue({ values: positionValues, tiebreakerValue: "1" })
    );

    if (oxygenScrubberRatingValues.length === 1) {
      return oxygenScrubberRatingValues[0];
    }
  }
}

function getCO2ScrubberRating() {
  let co2RatingValues = binaryInput;

  for (let i = 0; i < binaryInput[0].length; i++) {
    const positionValues = co2RatingValues.map((value) => value[i]);
    co2RatingValues = co2RatingValues.filter(
      (value) =>
        value[i] ===
        getLeastCommonValue({ values: positionValues, tiebreakerValue: "0" })
    );

    if (co2RatingValues.length === 1) {
      return co2RatingValues[0];
    }
  }
}

function deriveLifeSupportRating() {
  const oxygenScrubbberRating = convertToDecimal(getOxygenScrubberRating());
  const co2ScrubberRating = convertToDecimal(getCO2ScrubberRating());

  return oxygenScrubbberRating * co2ScrubberRating;
}

console.log("Life Support Rating: ", deriveLifeSupportRating());
