export class RomanNumerals {
  constructor(number, roman) {
    this.number = number;
    this.roman = roman;
  }

  romanArr = [
    "M",
    "CM",
    "D",
    "CD",
    "C",
    "XC",
    "L",
    "XL",
    "X",
    "IX",
    "V",
    "IV",
    "I"
  ];
  numberArr = [1000, 900, 500, 400, 100, 90, 50, 40, 10, 9, 5, 4, 1];

  toRoman() {
    let res = "";

    for (let i = 0; i <= this.numberArr.length; i++) {
      while (this.number % this.numberArr[i] < this.number) {
        res += this.romanArr[i];
        this.number = this.number - this.numberArr[i];
      }
    }
    return res;
  }

  fromRoman() {
    let res = 0;
    for (let i = 0; i <= this.numberArr.length; i++) {
      while (this.roman.indexOf(this.romanArr[i]) === 0) {
        res += this.numberArr[i];
        this.roman = this.roman.replace(this.romanArr[i], "");
      }
    }
    return res;
  }
}
