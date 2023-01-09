const mongoose = require("mongoose");
const User = require("../models/User");

const getUsers = async (req, res) => {
    const users = await User.find({});
    if(users == null)
        res.send("Hello");
    res.send(users);
}

const getSingleUser = async (req, res) => {
    const user = await User.findById(req.params.id);

    res.send(user);
}

const addUser = async (req, res) => {
    const user = new User({
        name: req.body.name,
        email: req.body.email
    })

    try {
        await user.save();   
        res.redirect("/")
    } catch (err) {
        console.log(err);
    }
}

const deleteUser = async (req, res) => {
    await Article.findByIdAndDelete(req.params.id)
    res.redirect('/')
}

const updateUser = async (req, res) => {
    try{
        const {id: userID} = req.params;
        const user = await User.findByIdAndUpdate({_id: userID}, req.body, {
            new: true
        })
        res.redirect(`/${userID}`);
    }catch(err){
        console.log(err);
    }
}

module.exports = { getUsers, getSingleUser, addUser, deleteUser, updateUser};