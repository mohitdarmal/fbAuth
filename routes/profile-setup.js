const router = require('express').Router();

const authCheck = (req, res, next) => {
    if(req.user){
        next();
    }else{
        res.redirect('/login')
    }
}

router.get('/', authCheck, (req, res) => {
    res.render('profile', {userProfile : req.user});
});

module.exports = router;