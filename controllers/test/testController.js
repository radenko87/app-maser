const mongojs = require("mongojs");
const db = mongojs("fullapp", ["popis1","users"]);

const testController = (req, res) => {
  let name = req.params.name;
  let user = req.session.user;

  db.popis1.find({ }, (err, popis1) => {
    
   
    res.render("test/index", {
      name: name,
      popis1: popis1,
      
      });
    }
  );
};

module.exports = testController;