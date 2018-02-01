let diceSocket = (name, dice) => {
    return {
      name,
      dice
    };
};

let modifierSocket = (modifier) => {
  return modifier
};

module.exports = {diceSocket, modifierSocket};