const { stateList, findState } = require("../model/states.model");

const getState = (req, res) => {
  var state = req.params.state;
  if (state == undefined) {
    return res.status(404).send({ Error: "State is not defined" });
  }
  const stateReturning = findState(state);
  if (stateReturning == undefined || stateReturning.length <= 0) {
    return res.status(404).send({ Message: `${state} is not found` });
  }

  const list = stateReturning.map((value, index) => {
    return value.id;
  });

  return res.status(201).send({ stateReturning: list });
};

const getAllState = (req, res) => {
  return res.send({ stateList });
};

const getLGA = (req, res) => {
  res.statusCode = 200;
  res.send(JSON.stringify({ message: "LGA request" }));
};

module.exports = { getLGA, getState, getAllState };
