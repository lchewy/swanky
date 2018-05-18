const mongoose = require("mongoose");
const Product = mongoose.model("product");
const Cart = require("../models/Cart");

module.exports = app => {
  app.get("/api/products", async (req, res) => {
    const products = await Product.find().select({ reviews: false });
    res.send( products );
  });

  app.get("/api/add-to-cart/:id", async (req, res) => {
    const { id } = req.params;
    const cart = new Cart(req.session.cart ? req.session.cart : {});

    try {
      const item = await Product.findById(id);
      cart.add(item, id);
      req.session.cart = cart;
      res.redirect("/");
    } catch (err) {
      res.status(404).send({
        error: "sorry something occured, please try again in a few minutes"
      });
    }
  });

  app.get("/api/reduce/:id", (req, res) => {
    const { id } = req.params;
    const cart = new Cart(req.session.cart ? req.session.cart : {});

    cart.reduceByOne(id);
    req.session.cart = cart;
    res.redirect("/shopping-cart");
  });

  app.get("/api/remove/:id", (req, res) => {
    const { id } = req.params;
    const cart = new Cart(req.session.cart ? req.session.cart : {});

    cart.removeItem(id);
    req.session.cart = cart;
    res.redirect("/shopping-cart");
  });

  app.get("/api/shopping-cart", (req, res) => {
    if (!req.session.cart) {
      res.send({});
    }

    const cart = new Cart(req.session.cart);
    res.send({
      products: cart.generateArray(),
      totalPrice: cart.totalPrice
    });
  });

  
};
