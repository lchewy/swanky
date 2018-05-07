const passport = require("passport");
module.exports = app => {
  app.get("/api/signup", (req, res) => {
    // if (!req.session.test) {
    //   req.session.test = "OK";
    // }
    // res.send("OK");

    let messages = req.flash("error")
    console.log("GET / ", messages);
    res.send(req.body)
  });

//   app.get("/test", (req, res) => {
//     console.log("session ", req.session.test);
//     res.send(req.session.test);
//   });

  app.post(
    "/api/signup",
    passport.authenticate("local.signup", {
      failureRedirect: "/api/signup",
      failureFlash: true
    }),
    (req, res) => {
      console.log("server ", req.authInfo);
      res.send(req.body);
    }
  );

  app.get("/api/current_user", (req, res) => {
    console.log("USER", req.user);
    res.send(req.user);
  });

  app.get("/api/logout", (req, res) => {
    req.logout();
    res.redirect("/");
  });
};
