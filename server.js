const express = require("express");
const stateRouter = require("./routes/states.routes");
const app = express();

const PORT = 3000;

app.use("/api/state", stateRouter);

app.listen(PORT, () => {
  console.log("Server Started at Port: " + PORT);
});
