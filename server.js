const express = require("express");
const app = express();
const mongoose = require("mongoose");
const d = require("./Models/Department");
const admin = require("./Routers/Admin");
const user = require("./Routers/User");
const auth = require("./Routers/Auth");
app.use(express.json());
const cors = require("cors");

app.use(cors());
var mongoDB =
  "mongodb+srv://yashaghane21:12345@cluster0.ssqd7lb.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0";

mongoose
  .connect(mongoDB, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  })
  .then(() => {
    console.log("coonection succsess");
  })
  .catch((e) => {
    console.log(e);
  });

app.use("/api/v1", admin);
app.use("/api/v2", user);
app.use("/api/v3", auth);

app.listen(5000, () => {
  console.log("running");
});
