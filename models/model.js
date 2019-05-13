const mongoose = require('mongoose');
const keys = require('../herokuKey');

console.log("mongokey: ", 'mongodb+srv://fbAuth:Mohit@321@fbauth-oympy.mongodb.net/test?retryWrites=true')

mongoose.connect('mongodb+srv://fbAuth:Mohit@321@fbauth-oympy.mongodb.net/test?retryWrites=true', {useNewUrlParser:true});

const userSchema = new mongoose.Schema({
    facebookID : String,
    username : String,
    email : String,
    profilePic : String,
    dateOfBirth : String,
    gender : String,
    homeTown : String,
});

const User = mongoose.model('User', userSchema);

module.exports = User;
