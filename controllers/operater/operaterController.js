const mongojs = require("mongojs");
const db = mongojs("fullapp", ["users", "gradovi", "proizvodi","klasifikacija"]);

const operaterController = (req, res) => {
  let user = req.session.user;

  db.gradovi.find({}, (err, gradovi) => {
    db.klasifikacija.find({}, (err, klasifikacija) => {
    db.users.find({ role: "savetnik" }, (err, savetnici) => {
      
      db.termini.find(
        { operater: user.first_name + " " + user.last_name },
        (err, termini) => {
          res.render("operater/index", {
            name: user.first_name,
            savetnici: savetnici,
            gradovi: gradovi,
            klasifikacija: klasifikacija,
            brojTermina: termini.length,
        
            
          });
        });
        }
      );
    });
  });

};

module.exports = operaterController;
