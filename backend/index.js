const express = require("express");
const rootRouter = require("./routes/index");
const app = express();
app.use(cors());
app.use("/api/v1", rootRouter);