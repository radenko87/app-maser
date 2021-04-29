const express = require("express");
const router = express.Router();

router.use(checkTest);

router.get("/", require("../controllers/test/testController"));

router.get(
  "/print1/",
  require("../controllers/test/printController")
);

router.post('/send',(req,res) => {
  console.log(req.body);
})

router.get(
    "/savetnik/termini/:name",
    require("../controllers/test/testController")
  );

  function checkTest(req, res, next) {
    let user = req.session.user;
    if (user) {
      if (user.role == "test") {
        next();
      } else {
        res.redirect("/");
      }
    } else {
      res.redirect("/");
    }
  }
module.exports = router;
