class Player1 {
  constructor(game) {
    this.game = game;
  }

  gamePlaying() {
    return this.game;
  }
}

const pl1 = new Player1("GTA-5");

console.log(pl1);

class MultiPlayer extends Player1 {
  constructor(game) {
    super(game);
  }
  gamePlaying() {
    return this.game;
  }
}

const ml1 = new MultiPlayer("COD");

console.log(ml1);
