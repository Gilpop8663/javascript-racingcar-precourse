const { GAME_STRING } = require('../Constant');
const Car = require('../model/Car');
const Validation = require('../Validation');
const InputView = require('../view/InputView');

class GameController {
  #car;

  startGame() {
    InputView.readCarName(this.checkName.bind(this));
  }

  checkName(names) {
    const nameArray = names
      .split(GAME_STRING.dividingLine)
      .map((name) => name.trim());
    Validation.name(nameArray);
    this.#car = new Car(nameArray);
    console.log(names);
    InputView.readCount(this.checkCount.bind(this));
  }

  checkCount(number) {
    Validation.count(Number(number));
  }
}

module.exports = GameController;
