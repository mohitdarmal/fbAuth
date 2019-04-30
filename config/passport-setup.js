const passport = require('passport');
const FacebookStrategy = require('passport-facebook');
const keys = require('../keys');
const User = require('../models/model');

passport.serializeUser((user, done) => {
    //user.id  , this id is monogo database id not facebookID;
    done(null, user.id);
})

passport.deserializeUser((id, done) => {
    User.findById(id).then((user) => {
        done(null, user);
    })
})

passport.use(new FacebookStrategy({
    clientID: keys.fbKeys.clientID,
    clientSecret: keys.fbKeys.clientSecret,
    callbackURL: '/auth/facebook/redirect',
    profileFields: ['id', 'displayName', 'link', 'photos', 'email', 'gender', 'name', 'birthday', 'location', 'age_range', 'friends', 'hometown', 'likes', 'videos', ],
    passReqToCallback: false,

}, (accessToken, refreshToken, profile, done) => {

    User.findOne({facebookID : profile.id}).then((current) => {
        if(current){
            console.log('User is ALready exits');
            done(null, current);
        }else{
            new User({
                facebookID: profile._json.id,
                username: profile._json.name,
                email: profile._json.email,
                profilePic: profile.photos[0].value,
                dateOfBirth: profile._json.birthday,
                gender: profile._json.gender,
                homeTown: profile._json.hometown.name,
            }).save().then((newUser) => {
                console.log(newUser)
                done(null, newUser);
            })
        }
    })


   
}))