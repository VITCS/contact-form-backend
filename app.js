const express = require("express");
const bodyParser = require("body-parser");
const mongoose = require("mongoose");
const router = require("./routes");

const app = express();
const PORT = 5000;

app.use(bodyParser.json());
app.use("/api", router);

mongoose
  .connect("mongodb://localhost/contactsdb", {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  })
  .then(() => console.log("Connected to MongoDB"))
  .catch((err) => console.error("Error connecting to mongoDB: ", err));

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
