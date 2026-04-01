const mongoose = require("mongoose");

const recordSchema = new mongoose.Schema({
  userId: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "User"
  },
  amount: Number,
  type: {
    type: String,
    enum: ["INCOME", "EXPENSE"]
  },
  category: String,
  date: Date,
  notes: String
}, { timestamps: true });

module.exports = mongoose.model("Record", recordSchema);