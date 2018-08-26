const express = require('express');
const router = express.Router();
const passport = require('passport');




router.get('/google', passport.authenticate('google',{scope:['profile','email']}));


//router.get('/google/callback', 
  //passport.authenticate('google', { failureRedirect: '/' }),(req, res)=> { 
    //res.redirect('/dashboard');
  //});

  router.get('/google/callback',
  passport.authenticate('google', { failureRedirect: 'http://localhost:4500/' }),
  function(req, res) {
// absolute path
      res.redirect('/dashboard');
  });

module.exports = router;