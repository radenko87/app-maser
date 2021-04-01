const express = require("express");
const router = express.Router();

router.use(checkUnos);

router.get("/", require("../controllers/punos/punosController"));
router.post("/newUnos",require("..//controllers/punos/newUnos"));



function checkUnos(req, res, next) {
  let user = req.session.user;
  if (user) {
    if (user.role == "punos") {
      next();
    } else {
      res.redirect("/");
    }
  } else {
    res.redirect("/");
  }
}

module.exports = router;