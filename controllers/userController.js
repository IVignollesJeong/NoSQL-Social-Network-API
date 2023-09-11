const { User, Thought } = require('../models');

module.exports = {

    //get all users
    async getUsers(req, res) {
        try {
            const users = await User.find();
            res.json(users);
        } catch (err) {
            console.log(err);
            res.status(500).json(err);
        }
    },

    //get a single user
    async getSingleUser(req, res) {
        try {
            const user = await User.findOne({ _id: req.params.userId })
                .select('-__v');

            if (!user) {
                return res.status(404).json({ message: 'No user exists with this ID' });
            }
            res.json(user);
        } catch (err) {
            console.log(err);
            res.status(500).json(err);
        }
    },


    async createUser(req, res) {
        try {
            const user = await User.create(req.body);
            res.join(user);
        } catch (err) {
            console.log(err);
            res.status(500).json(err);
        }
    },

    async updateUser(req, res) {
        try {
            const user = await User.findOneAndUpdate(
                { _id: req.params.userId },
                { $set: req.body },
                { runValidators: true, new: true }
            );

            if (!user) {
                return res.status(404).json({ message: 'No user exists with this ID' });
            }
            res.json(user);
        } catch (err) {
            console.log(err);
            res.status(500).json(err);
        }
    }
};

// GIT COMMIT -m "CREATED THOUGHTCONTROLLER.js AND USERCONTROLLER.js IN /CONTROLLERS"