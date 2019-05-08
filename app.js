const express = require('express');
const app = express();
const routesSetup = require('./routes/routes-setup');
const passportSetup = require('./config/passport-setup');
const profileSetup = require('./routes/profile-setup');
const keys = require('./herokuKey');

// mongoose.connect(keys.mongoURL.connect, {useNewUrlParser:true});

const cookieSession = require('cookie-session');
const passport = require('passport'); 
const port = process.env.PORT || 3000;  



app.use(cookieSession({
    maxAge : 24 * 60 * 60 * 1000,
    keys : [keys.cookieKeys.keys]
}))

app.use(passport.initialize());
app.use(passport.session());

app.set('view engine', 'ejs');
app.use('/auth', routesSetup);
app.use('/profile', profileSetup);

app.get('/', (req, res) => {
    res.render('index', {userProfile : req.user});
});

app.get('/login', (req, res) => {
    res.render('login', {userProfile : req.user});
});


app.listen(port, () => {
    console.log(`App Has Started on PORT ${port}!!`);
    
});