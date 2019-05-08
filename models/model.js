const mongoose = require('mongoose');
const keys = require('../herokuKey');

console.log(keys.mongoURL.connect)

mongoose.connect(process.env.mongoURL, {useNewUrlParser:true});

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
