const mongoose = require("mongoose");

const connectDB = () => {
  let URI =
    "mongodb+srv://rcsmongodatabase:rcsmongodbdatabase@rcscluster.jqzczzp.mongodb.net/?retryWrites=true&w=majority";

  mongoose.connect(URI);
};

module.exports = connectDB;
