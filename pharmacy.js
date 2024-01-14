export class Drug {
  constructor(name, expiresIn, benefit) {
    this.name = name;
    this.expiresIn = expiresIn;
    this.benefit = benefit;
  }
}

export class Pharmacy {
  constructor(drugs = []) {
    this.drugs = drugs;
  }

  checkDrugBenefit(currentDrug) {
    const {
      name: currentDrugName,
      benefit: currentDrugBenefit,
      expiresIn: currentDrugExpiresIn
    } = currentDrug;
    switch (currentDrugName) {
      case "Magic Pill":
        // Do nothing
        break;
      case "Herbal Tea":
        if (currentDrugExpiresIn <= 0)
          currentDrug.benefit = currentDrugBenefit + 2;
        else currentDrug.benefit++;
        break;
      case "Fervex":
        if (currentDrugExpiresIn <= 0) currentDrug.benefit = 0;
        else if (currentDrugExpiresIn <= 5)
          currentDrug.benefit = currentDrugBenefit + 3;
        else if (currentDrugExpiresIn <= 10)
          currentDrug.benefit = currentDrugBenefit + 2;
        else currentDrug.benefit++;
        break;
      case "Dafalgan":
        currentDrug.benefit = currentDrugBenefit - 2;
        break;
      default:
        currentDrug.benefit =
          currentDrugBenefit - (currentDrugExpiresIn > 0 ? 1 : 2);
    }
    if (currentDrug.benefit > 50) currentDrug.benefit = 50;
    if (currentDrug.benefit < 0) currentDrug.benefit = 0;
    if (currentDrugName !== "Magic Pill") currentDrug.expiresIn--;
    return currentDrug;
  }

  updateBenefitValue() {
    for (let i = 0; i < this.drugs.length; i++) {
      const currentDrug = this.drugs[i];
      this.drugs[i] = this.checkDrugBenefit(currentDrug);
    }
    return this.drugs;
  }
}
