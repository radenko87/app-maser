const express = require("express");
const router = express.Router();



router.get("/", require("../controllers/test/testController"));


router.get(
    "/savetnik/termini/:name",
    require("../controllers/test/testController")
  );


module.exports = router;
