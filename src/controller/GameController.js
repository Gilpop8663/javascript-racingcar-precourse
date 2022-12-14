const { GAME_STRING } = require('../Constant');
const Car = require('../model/Car');
const CreateRandomNumber = require('../model/CreateRandomNumber');
const Validation = require('../Validation');
const InputView = require('../view/InputView');

class GameController {
  #car;

  startGame() {
    CreateRandomNumber();
    InputView.readCarName(this.checkName.bind(this));
  }

  checkName(names) {
    const nameArray = names
      .split(GAME_STRING.dividingLine)
      .map((name) => name.trim());
    Validation.name(nameArray);
    this.#car = new Car(nameArray);
    console.log(nameArray);
    InputView.readCount(this.checkCount.bind(this));
  }

  checkCount(number) {
    Validation.count(Number(number));
    Array.from({ length: number }).forEach(() => {
      this.#car.racing();
      const result = this.#car.getResult();
      console.log(result);
    });
  }
}

module.exports = GameController;
