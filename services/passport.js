const passport = require("passport");
const localStrategy = require("passport-local").Strategy;
const FacebookStrategy = require("passport-facebook").Strategy;
const GoogleStrategy = require("passport-google-oauth20").Strategy;
const mongoose = require("mongoose");
const User = mongoose.model("user");
const keys = require("../config/keys");

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
          return done(null, false);
        }
      } catch (err) {
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

passport.use(
  new FacebookStrategy(
    {
      clientID: keys.facebookClientID,
      clientSecret: keys.facebookClientSecret,
      callbackURL: "/api/auth/facebook/callback",
      proxy: true
    },
    async (accessToken, refreshToken, profile, done) => {
      const existingUser = await User.findOne({ facebookId: profile.id });
      if (existingUser) {
        done(null, existingUser);
      } else {
        const newUser = await new User({ facebookId: profile.id }).save();
        done(null, newUser);
      }
    }
  )
);

passport.use(
  new GoogleStrategy(
    {
      clientID: keys.googleClientID,
      clientSecret: keys.googleClientSecret,
      callbackURL: "/api/auth/google/callback",
      proxy: true
    },
    async (accessToken, refreshToken, profile, done) => {
      const existingUser = await User.findOne({ googleId: profile.id });

      if (existingUser) {
        done(null, existingUser); 
      } else {
        const user = await new User({ googleId: profile.id }).save();
        done(null, user); 
      }
    }
  )
);
