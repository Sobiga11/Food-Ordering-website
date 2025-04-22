const User = require('../models/userModel');
const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');

exports.login = async (req, res) => {
    const { email, password } = req.body;
    try {
        const user = await User.findOne({ email });
        if (!user) {
            return res.status(400).json("Invalid email");
        }
        const isMatch = await bcrypt.compare(password, user.password);
        // console.log(password)
        // console.log(user.password)
        if (!isMatch) {
            return res.status(400).json("Invalid password");
        }
        const token = jwt.sign({ user_id: user._id,email:user.email }, "secret_token", {
            expiresIn: "24h",
        });
        res.status(200).json({ token });
    } catch (err) {
        console.error(err);
        res.status(500).json({ error: "Internal Server Error" });
    }
};

exports.createUser = async (req, res) => {
    const { name, email, password } = req.body;
    try {
        const hashedPassword = await bcrypt.hash(password, 10);
        const newUser = new User({
            name,
            email,
            password,
        });
        await newUser.save();
        res.status(200).json("User created successfully");
    } catch (err) {
        console.error(err);
        res.status(500).send({ error: "Failed to create user" });
    }
};

exports.getUsers = async (req, res) => {
    try {
        const users = await User.find();
        res.send(users);
    } catch (err) {
        console.error(err);
        res.status(500).send({ error: "Internal Server Error" });
    }
};