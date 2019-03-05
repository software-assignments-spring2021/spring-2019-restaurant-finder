const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const DataSchema = new Schema (
  {
    name: String,
    id: Number,
  },
  {timestamps: true}
);

//export new Schema so we could modify it using Node.js
module.exports = mongoose.model("Data", DataSchema);
