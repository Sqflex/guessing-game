class GuessingGame {
    constructor() {
        this.min = 0;
        this.max = 0;
        this.quess=0;
    }

    setRange(min, max) {
        this.min=min;
        this.max=max;
        if(min==max){
            console.log("Equal numbers!")
        }
    }

    guess() {
        this.quess = this.min + Math.round((this.max - this.min)/2);
        return this.quess;
    }

    lower() {
        if (this.guess==this.min) {
          throw new Error("Cheating! The Number is lower than the range!");
        }
        this.max = this.guess;
      }
  
      greater() {
        if (this._uess==this.min) {
          throw new Error("Cheating! The Number is greater than the range!");
        }
        this.min = this.guess;
      }
}

module.exports = GuessingGame;
