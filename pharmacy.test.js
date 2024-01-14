import { Drug, Pharmacy } from "./pharmacy";

describe("Pharmacy", () => {
  it("should decrease the benefit and expiresIn by default", () => {
    expect(new Pharmacy([new Drug("Test", 2, 3)]).updateBenefitValue()).toEqual(
      [new Drug("Test", 1, 2)]
    );
  });

  it("should not decrease the benefit more than 0", () => {
    expect(new Pharmacy([new Drug("Test", 4, 0)]).updateBenefitValue()).toEqual(
      [new Drug("Test", 3, 0)]
    );
  });

  it("should decrease benefit twice as fast once the expiration date has passed", () => {
    expect(
      new Pharmacy([new Drug("Test", -2, 6)]).updateBenefitValue()
    ).toEqual([new Drug("Test", -3, 4)]);
  });

  it("Herbal Tea's benefit should increase the older it gets", () => {
    expect(
      new Pharmacy([new Drug("Herbal Tea", 4, 6)]).updateBenefitValue()
    ).toEqual([new Drug("Herbal Tea", 3, 7)]);
  });

  it("Herbal Tea's benefit should increase twice as fast after th expiration date", () => {
    expect(
      new Pharmacy([new Drug("Herbal Tea", 0, 10)]).updateBenefitValue()
    ).toEqual([new Drug("Herbal Tea", -1, 12)]);
  });

  it("should not increase the benefit more than 50", () => {
    expect(
      new Pharmacy([new Drug("Herbal Tea", -6, 50)]).updateBenefitValue()
    ).toEqual([new Drug("Herbal Tea", -7, 50)]);
  });

  it("Magic Pill should never expires nor decreases in benefit", () => {
    expect(
      new Pharmacy([new Drug("Magic Pill", 15, 40)]).updateBenefitValue()
    ).toEqual([new Drug("Magic Pill", 15, 40)]);
  });

  it("Fervex should increases benefit by two when there are 10 days or less", () => {
    expect(
      new Pharmacy([new Drug("Fervex", 10, 11)]).updateBenefitValue()
    ).toEqual([new Drug("Fervex", 9, 13)]);
  });

  it("Fervex should increases benefit by two when there are 5 days or less", () => {
    expect(
      new Pharmacy([new Drug("Fervex", 5, 15)]).updateBenefitValue()
    ).toEqual([new Drug("Fervex", 4, 18)]);
  });

  it("Fervex should increases benefit by two when there are 5 days or less", () => {
    expect(
      new Pharmacy([new Drug("Fervex", 0, 20)]).updateBenefitValue()
    ).toEqual([new Drug("Fervex", -1, 0)]);
  });

  it("Dafalgan should degrades benefit twice as fast as normal drugs", () => {
    expect(
      new Pharmacy([new Drug("Dafalgan", 74, 50)]).updateBenefitValue()
    ).toEqual([new Drug("Dafalgan", 73, 48)]);
  });
});
