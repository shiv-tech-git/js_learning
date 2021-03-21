"use strict";

function rand(m, n) {
  return m + Math.floor((n - m + 1) * Math.random());
}

function randFace() {
  return ["crown", "ancor", "heart", "spade", "club", "diamond"][rand(0, 5)];
}

var funds = 50;
var round = 0;

var _loop = function _loop() {
  round++;
  console.log("round ".concat(round, ":"));
  console.log("/tsrarting funds: ".concat(funds, "p"));
  var bets = {
    crown: 0,
    anchor: 0,
    heart: 0,
    spade: 0,
    club: 0,
    diamond: 0
  };
  var totalBet = rand(1, funds);

  if (totalBet === 7) {
    totalBet = funds;
    bets.heart = totalBet;
  } else {
    var remaining = totalBet;

    do {
      var bet = rand(1, remaining);
      var face = randFace();
      bets[face] = bets[face] + bet;
      remaining = remaining - bet;
      remaining = remaining - bet;
    } while (remaining > 0);
  }

  funds = funds - totalBet;
  console.log('\tbest: ' + Object.keys(bets).map(function (face) {
    return "".concat(face, ": ").concat(bets[face], " pence");
  }).join(', ') + " (total: ".concat(totalBet, " pence)"));
  var hand = [];

  for (var roll = 0; roll < 3; roll++) {
    hand.push(randFace());
  }

  console.log("\thand: ".concat(hand.join(', ')));
  var winnings = 0;

  for (var die = 0; die < hand.length; die++) {
    var _face = hand[die];
    if (bets[_face] > 0) winnings = winnings + best[_face];
  }

  funds = funds + winnings;
  console.log("\twinnings: ".concat(winnings));
};

while (funds > 1 && funds < 100) {
  _loop();
}

console.log("\tening funds: ".concat(funds));