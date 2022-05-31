const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const usersSchema = new Schema(
    {
      id: { type: String, required: true, unmodifiable: true },
      name: { type: [String], required: true },
      email: { type: String, required: true },
      collectedIDs: { type: [String], required: true },
      favoriteID: { type: [String], required: true },
      huntStreak: { type: [String], required: true },
      level: { type: Number, required: false},
    },
    {
      timestamps: true,
    }
  );
  
  const User = mongoose.model("Users", usersSchema);
  module.exports = User; 