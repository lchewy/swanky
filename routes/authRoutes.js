const passport = require("passport");
const mongoose = require("mongoose");
const Order = mongoose.model("order");
const Cart = require("../models/Cart");
const requireLogin = require("../middlewares/requireLogin");
const csrf = require("csurf");
const csrfProtection = csrf({ cookie: true });

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

  app.get("/api/logout", requireLogin, (req, res) => {
    req.logout();
    res.redirect("/");
  });

  app.get("/api/signup", csrfProtection, (req, res) => {
    const messages = req.flash("error");
    res.send({
      csrfToken: req.csrfToken(),
      messages
    });
  });

  app.post(
    "/api/signup",
    passport.authenticate("local.signup", {
      // failureRedirect: "/api/signup",
      failureFlash: true
    }),
    (req, res) => {
      // console.log("server ", req.authInfo);
      res.send(req.body); 
    }
  );

  app.get("/api/signin", csrfProtection, (req, res) => {
    const messages = req.flash("error");
    res.send({
      csrfToken: req.csrfToken(),
      messages
    });
  });

  app.post(
    "/api/signin",
    passport.authenticate("local.signin", {
      // failureRedirect: "/api/signin",
      failureFlash: true
    }),
    (req, res, next) => {
      res.send(req.body);
    }
  );

  app.get("/api/current_user", (req, res) => {
    res.send(req.user);
  });
};
