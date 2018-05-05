const express = require("express");
const morgan = require("morgan");
const mongoose = require("mongoose");
const cookieParser = require("cookie-parser");
const session = require("express-session");
const MongoStore = require("connect-mongo")(session);
const keys = require("./config/keys");
const passport = require("passport");

require("./models/User");
require("./services/passport");

mongoose.connect(keys.mongoURI, () => {
  console.log("connected to mongo");

});

const app = express();

app.use(morgan("dev"));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());

app.use(
  session({
    secret: keys.sessionSecret,
    resave: false,
    saveUninitialized: false,
    store: new MongoStore({ mongooseConnection: mongoose.connection }),
    cookie: { maxAge: 24 * 60 * 60 * 1000 }
  })
);

app.use(passport.initialize());
app.use(passport.session());


app.get("/", (req, res) => {
    if(!req.session.test){
        req.session.test = "OK";
    }
    res.send("OK")
});

app.get("/test", (req, res)=>{
    console.log("session ", req.session.test)
    res.send(req.session.test);
});

app.post("/api/signup", passport.authenticate("local.signup", {
  failureRedirect:"/api/signup",
  failureFlash: true
}),(req, res)=>{
  console.log("server ", req.session)
  res.send(req.body)
})

app.get("/api/current_user", (req, res)=>{
  console.log("USER",req.user)
  res.send(req.user)
})

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
  console.log("listening on port: ", PORT);
});
