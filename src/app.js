const express = require("express");
require("./db/conn");
const Schema = require("./models/newsevent");

const app = express();
const port = process.env.PORT || 8000;

app.use(express.json());

app.post("/newsevent", async (req, res) => {
  try {
    const newevent = new Schema(req.body);
    console.log(req.body);
    const insertdata = await newevent.save();
    res.status(201).send(insertdata);
  } catch (e) {
    res.status(400).send(e);
  }
});

app.get("/newsevent", async (req, res) => {
  try {
    const getevents = await Schema.find({}).sort({ createdAt: 1 });
    res.send(getevents);
  } catch (e) {
    res.status(400).send(e);
  }
});

app.patch("/newsevent/:id", async (req, res) => {
  try {
    const _id = req.params.id;
    const getevent = await Schema.findByIdAndUpdate(_id, req.body, {
      new: true,
    });
    res.send(getevent);
  } catch (e) {
    res.status(500).send(e);
  }
});

app.delete("/newsevent/:id", async (req, res) => {
  try {
    const getevent = await Schema.findByIdAndDelete(req.params.id);
    res.send(getevent);
  } catch (e) {
    res.status(500).send(e);
  }
});

app.listen(port, () => {
  console.log(`listening on ${port}`);
});
