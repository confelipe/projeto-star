const mongoose = require("mongoose");

const StarSchema = new mongoose.Schema(
  {
    name: {
      type: String,
      required: true
    },
    idPlanet : {
      type: String,
      required: true
    },
    aparicao : {
      type: String,
      required: true
    },
    clima: {
      type: String,
      required: true
    },
    terreno: {
      type: String,
      required: true
    }
  },
  {
    timestamps: true
  }
);

module.exports = mongoose.model("Star", StarSchema);