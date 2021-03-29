const mongojs = require("mongojs");
const db = mongojs("fullapp", ["users", "klasifikacija"]);

const createKlasifikacija = (req, res) => {
  let name = req.body.name;
  

  db.klasifikacija.insert({ name: name }, (err, docs) => {
    // check for error
    res.redirect("/admin");
  });
};

module.exports = createKlasifikacija;