class GuessingGame {

  constructor() {
    this._minimum = 0;
    this._maximum = 0;
    this._guess = null;
  }

  setRange(min, max) {
    this._minimum = min;
    this._max = max;
    if (min == max) {
      console.log("Min and Max values are equial!")
    }
    if(min > max){
      var tmp=min;
      min=max;
      max=tmp;
    }
  }

  guess() {
    this._guess = this._minimum + Math.round((this._max - this._minimum)/2);
    return this._guess;
  }

  lower() {
    if (this._guess==this._minimum) {
      throw new Error("Cheating! The Number is lower than the range!");
    }
    this._max = this._guess;
  }

  greater() {
    if (this._guess==this._minimum) {
      throw new Error("Cheating! The Number is greater than the range!");
    }
    this._minimum = this._guess;
  }
}

module.exports = GuessingGame;
