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
      try {
        const existingUser = await User.findOne({ email });
        if (existingUser) {
          console.log("herererere")
          return done(null, false, {message: "email is already in use"});
        }
      } catch (err) {
        console.log("errrrrrr")
        return done(err);
      }

      try {
        let newUser = await new User({
          fname: req.body.fname,
          lname: req.body.lname,
          email
        });
        newUser.password = newUser.encryptPassword(password);
        newUser = await newUser.save();
        console.log("tryadfadf")
        done(null, newUser);
      } catch (err) {
        return done(err);
      }
    }
  )
);

passport.use(
  "local.signin",
  new localStrategy(
    {
      usernameField: "email",
      passwordField: "password",
      passReqToCallback: true,
      proxy: true
    },
    async (req, email, password, done) => {
      try {
        const foundUser = await User.findOne({ email });
        if (!foundUser) {
          return done(null, false, { message: "email not found" });
        }

        if (!foundUser.validPassword(password)) {
          return done(null, false, { message: "password is incorrect" });
        }

        return done(null, foundUser);
      } catch (err) {
        return done(err);
      }
    }
  )
);
