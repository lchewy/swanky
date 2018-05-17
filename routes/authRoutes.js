const passport = require("passport");
const mongoose = require("mongoose");
const Order = mongoose.model("order");
const Cart = require("../models/Cart");
const requireLogin = require("../middlewares/requireLogin");
const csrf = require("csurf");
const csrfProtection = csrf({ cookie: true });

const User = mongoose.model("user");

module.exports = app => {
  app.get("/api/profile", requireLogin, async (req, res) => {
    try {
      const orders = await Order.find({ user: req.user });
      let cart;
      orders.forEach(order => {
        cart = new Cart(order.cart);
        order.items = cart.generateArray();
      });

      res.send({ orders });
    } catch (err) {
      res.status(404).send({ error: "not found" });
    }
  });

  app.get("/api/logout", (req, res) => {
    // console.log("here i am")
    req.logout();
    res.redirect("/");
  });

  app.get("/api/signup", csrfProtection, (req, res) => {
    const messages = req.flash("error");
    // console.log("hey whoa, what abou me")
    res.send({
      csrfToken: req.csrfToken(),
      messages
    });
  });

  app.post(
    "/api/signup",
    passport.authenticate("local.signup", {
      failureFlash: true
    }),
    (req, res) => {
      // console.log("server ", req.authInfo);
        const messages = req.flash("error");
      // req.user.message = messages[0]
      // console.log("server ", req.user)
      // console.log("I'm freaking heree~!!!", messages)

      res.send(req.user);
    }
  );

  app.get("/api/signin", csrfProtection, (req, res) => {
    // const messages = req.flash("error");
    res.send({
      csrfToken: req.csrfToken()
      // messages
    });
  });

  app.post(
    "/api/signin",
    passport.authenticate("local.signin", {
      // failureRedirect: "/api/signin",
      failureFlash: true
    }),
    (req, res, next) => {
      res.send(req.user);
    }
  );

  app.get(
    "/api/auth/facebook",
    passport.authenticate("facebook", {
      scope: ["email"]
    })
  );

  app.get(
    "/api/auth/facebook/callback",
    passport.authenticate("facebook"),
    (req, res) => {
      res.redirect("/");
      // res.send("i'm working here!");
    }
  );

  app.get(
    "/api/auth/google",
    passport.authenticate("google", {
      scope: ["profile", "email"]
    })
  );

  app.get(
    "/api/auth/google/callback",
    passport.authenticate("google"),
    (req, res) => {
      res.redirect("/");
    }
  );

  app.get("/api/current_user", (req, res) => {
    res.send(req.user);
  });
};
