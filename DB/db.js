const mongoose = require("mongoose");

mongoose
  .connect("mongodb://localhost/contactsdb", {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  })
  .then(() => console.log("Connected to MongoDB"))
  .catch((err) => console.error("Error connecting to mongoDB: ", err));
