const mongojs = require("mongojs");
const db = mongojs("fullapp", ["popis1"]);

const savetnikController = (req, res) => {
  let user = req.session.user;

  db.popis1.find(
    { savetnik: user.first_name + " " + user.last_name, active: true },
    (err, popis1) => {
      res.render("savetnik/index", {
        name: user.first_name,
        popis1: popis1,
      });
    }
  );
};

module.exports = savetnikController;
