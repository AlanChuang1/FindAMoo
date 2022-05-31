const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const locationsSchema = new Schema(
    {
      location: { type: String, required: true },
      longitude: { type: String, required: true },
      latitude: { type: String, required: true },
    },
    {
      timestamps: true,
    }
  );
  
  const Location = mongoose.model("Locations", locationsSchema);
  module.exports = Location; 