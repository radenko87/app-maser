const mongojs = require("mongojs");
const db = mongojs("fullapp", ["termini","users"]);

const testController = (req, res) => {
  let name = req.params.name;
  let user = req.session.user;

  db.termini.find({ }, (err, termini) => {
    
   
    res.render("test/index", {
      name: name,
      termini: termini,
      
      });
    }
  );
};

module.exports = testController;