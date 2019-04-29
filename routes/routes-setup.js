const router = require('express').Router();
const passport = require('passport');

router.get('/login', (req, res) => {
    res.send('Login Page');
});

router.get('/logout', (req, res) => {
    req.logout();
    res.redirect('/');
});

router.get('/facebook', passport.authenticate('facebook', {
    scope : ['email']
}));

router.get('/facebook/redirect', passport.authenticate('facebook'), (req, res) => {
    res.redirect('/profile');
    console.log(req.user)
});

module.exports = router;