import Recipient from "../recipient";
import Covid19Vaccine from "../covid19Vaccine";

const mockVaccine = jest.fn();

jest.mock("../covid19Vaccine", () => {
  return jest.fn().mockImplementation(() => {
    return {
      constructor: mockVaccine,
    };
  });
});

describe("acceptInjection", () => {
  test("should hasAntibodies be false if vaccine not contain Virus Proteins", () => {
    // TODO 17: add test here
    const vaccine = new Covid19Vaccine();
    const recipient = new Recipient();
    vaccine.composition = ["sugar"];
    recipient.acceptInjection(vaccine);
    const result = recipient.hasAntibodies;

    expect(result).toBe(false);
  });

  test("should hasAntibodies be true if vaccine contain Virus Proteins", () => {
    // TODO 18: add test here
    const vaccine = new Covid19Vaccine();
    const recipient = new Recipient();
    vaccine.composition = ["Virus Proteins", "sugar"];
    recipient.acceptInjection(vaccine);
    const result = recipient.hasAntibodies;

    expect(result).toBe(true);
  });
});
