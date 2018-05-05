const passport = require("passport");
const localStrategy = require("passport-local").Strategy;
const mongoose = require("mongoose");
const User = mongoose.model("user");

passport.serializeUser((user, done) => {
  done(null, user.id);
});

passport.deserializeUser(async (id, done) => {
  const currUser = await User.findById(id);
  done(null, currUser);
});

passport.use(
  "local.signup",
  new localStrategy(
    {
      usernameField: "email",
      passwordField: "password",
      passReqToCallback: true,
      proxy: true
    },
    async (req, email, password, done) => {
      try{
        const existingUser = await User.findOne({email});
        if(existingUser){
          return done(null, false); // Should say email is already in use
        }
      }catch(err){
        return done(err);
      }

      
      try{
        let newUser = await new User({
          fname: req.body.fname,
          lname: req.body.lname,
          email
        });
        newUser.password = newUser.encryptPassword(password);
        newUser = await newUser.save();

      }catch(err){
        return done(err);
      }

    }
  )
);
