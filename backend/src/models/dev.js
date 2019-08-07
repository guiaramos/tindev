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
    },
    likes: [
      {
        type: Schema.Types.ObjectId,
        ref: "Dev"
      }
    ],
    dislikes: [
      {
        type: Schema.Types.ObjectId,
        ref: "Dev"
      }
    ]
  },
  {
    timestamps: true // createdAt, updatedAt
  }
);

module.exports = model("Dev", DevSchema);
