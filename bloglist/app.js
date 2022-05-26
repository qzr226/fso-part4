const config = require("./utils/config");
const express = require("express");
const app = express();
const cors = require("cors");

const usersRouter = require("./controllers/users");
const blogRouter = require("./controllers/blog");
const mongoose = require("mongoose");

mongoose.connect(config.MONGODB_URI);

app.use(cors());
app.use(express.json());

app.use("/api/users", usersRouter);
app.use("/api/blogs", blogRouter);

module.exports = app;
