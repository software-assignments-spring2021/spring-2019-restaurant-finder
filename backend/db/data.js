const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const DataSchema = new Schema (
  {
    name: {type: String, required: true},
    id: {type: Number},
  }
);

//export new Schema so we could modify it using Node.js
module.exports = mongoose.model("Data", DataSchema);
