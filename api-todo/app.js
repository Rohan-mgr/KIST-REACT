const express = require("express");
require("dotenv").config();
const appConfig = require("./config/config");
const appRouter = require("./routes/app.routes");
const userRouter = require("./routes/user.routes");

// initialize app
const app = express();

// routes
app.use("/", appRouter);
app.use("/user", userRouter);

// server activation
app.listen(appConfig.PORT, () => {
  console.log(`server is listening at port ${appConfig.PORT}`);
});
