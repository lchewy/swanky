const express = require("express");
const morgan = require("morgan");
const mongoose = require("mongoose");
const cookieParser = require("cookie-parser");
const session = require("express-session");
const MongoStore = require("connect-mongo")(session);
const keys = require("./config/keys");
const passport = require("passport");
const flash = require("connect-flash");

require("./models/User");
require("./models/Order");
require("./models/Review");
require("./models/Product");
require("./models/Cart");
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

app.use(flash());
app.use(passport.initialize());
app.use(passport.session());

require("./routes/authRoutes")(app);
require("./routes/billingRoutes")(app);


const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
  console.log("listening on port: ", PORT);
});
