const { Schema, model } = require("mongoose");

// Getting user interface from GitHub account
const DevSchema = new Schema(
  {
    name: {
      type: String,
      require: true
    },
    user: {
      type: String,
      required: true
    },
    bio: String,
    avatar: {
      type: String,
      required: true
    }
  },
  {
    timestamps: true // createdAt, updatedAt
  }
);

module.exports = model("Dev", DevSchema);
