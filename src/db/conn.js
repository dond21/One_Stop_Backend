const mongoose = require("mongoose");

mongoose
  .connect("mongodb://localhost:27017/newsevents-api", {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  })
  .then(() => {
    console.log("connection successful");
  })
  .catch((e) => {
    console.log("not connected");
  });
