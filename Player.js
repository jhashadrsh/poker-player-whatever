const GameState = require('./src/GameState');

class Player {
  static get VERSION() {
    return '0.1';
  }

  static betRequest(gameState, bet) {
    // if we have three of the same card, raise, otherwise meet
    var game = new GameState(gameState);
    // const playerState = new PlayerState(Object.assign(gameState.me, {}));
    // const x = {};
    // console.dir(playerState);

    bet(1);
  }

  static showdown(gameState) {
  }
}

module.exports = Player;

