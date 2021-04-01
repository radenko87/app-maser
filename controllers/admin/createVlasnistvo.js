const mongojs = require("mongojs");
const db = mongojs("fullapp", ["users", "vlasnistvo"]);

const createVlasnistvo = (req, res) => {
  let name = req.body.name;
  let role = req.body.role;

  db.vlasnistvo.insert({ name: name, role: role }, (err, docs) => {
    // check error
    res.redirect("/admin");
  });
};

module.exports = createVlasnistvo;