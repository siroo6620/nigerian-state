const { stateList } = require("../model/states.model");

const getState = (req, res) => {
  res.statusCode = 200;
  res.send(JSON.stringify({ message: "State request" }));
};

const getLGA = (req, res) => {
  res.statusCode = 200;
  res.send(JSON.stringify({ message: "LGA request" }));
};

module.exports = { getLGA, getState };
