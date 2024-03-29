const axios = require("axios");
const Dev = require("../models/dev");

module.exports = {
  async index(req, res) {
    const { user } = req.headers;

    const loggedDev = await Dev.findById(user);

    const users = await Dev.find({
      $and: [
        { _id: { $ne: user } },
        { _id: { $nin: loggedDev.likes } },
        { _id: { $nin: loggedDev.dislikes } }
      ]
    });

    return res.json(users);
  },

  async store(req, res) {
    // get username from app
    const { username } = req.body;

    // Check if user already exists
    const userExists = await Dev.findOne({ user: username });

    if (userExists) {
      return res.json(userExists);
    }

    // pass the user name on the github API
    const response = await axios.get(
      `https://api.github.com/users/${username}`
    );

    // ge specific fields from the github response
    const { name, bio, avatar_url: avatar } = response.data;

    // create the user on our database
    const dev = await Dev.create({
      name,
      user: username,
      bio,
      avatar
    });

    // Return the register on DB
    return res.json(dev);
  }
};
