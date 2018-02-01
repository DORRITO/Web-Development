let diceSocket = (name, dice) => {
    return {
      name,
      dice
    };
};

let modifierSocket = (name, dice) => {
  return {
    name,
    dice
  };
};

module.exports = {diceSocket, modifierSocket};