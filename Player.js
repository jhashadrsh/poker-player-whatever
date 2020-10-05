const GameState = require('./src/GameState');
const PlayerState = require('./src/PlayerState');

class Player {
  static get VERSION() {
    return '0.3';
  }

  static betRequest(gameState, bet) {
    // if we have three of the same card, raise, otherwise meet
    var game = new GameState(gameState);
    const player = game.me();
    var score = player.score();
    if ( score == 20) {
      bet(player.stack());
    } else if ( score >= 10) {
      bet(100 + 90 * (score-10));
    } else {
      bet(0);
    }
  }

  static showdown(gameState) {
  }
}

module.exports = Player;

