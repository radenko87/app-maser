const mongojs = require("mongojs");
const db = mongojs("fullapp", ["users", "gradovi", "proizvodi","klasifikacija","vlasnistvo","savetnici"]);

const operaterController = (req, res) => {
  let user = req.session.user;

  db.gradovi.find({}, (err, gradovi) => {
    db.klasifikacija.find({}, (err, klasifikacija) => {
      db.proizvodi.find({}, (err, proizvodi) => {
        db.savetnici.find({}, (err, savetnici) => {
        db.vlasnistvo.find({}, (err, vlasnistvo) => {
    db.users.find({ role: "savetnik" }, (err, savetnici) => {
      
      db.termini.find(
        { operater: user.first_name + " " + user.last_name },
        (err, termini) => {
          res.render("operater/index", {
            name: user.first_name,
            savetnici: savetnici,
            proizvodi: proizvodi,
            vlasnistvo: vlasnistvo,
            gradovi: gradovi,
            klasifikacija: klasifikacija,
            brojTermina: termini.length,
        
            
          });
        });
        });
        });
        }
      );
    });
  });
});

};

module.exports = operaterController;
