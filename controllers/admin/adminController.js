const mongojs = require("mongojs");
const db = mongojs("fullapp", ["users", "gradovi", "proizvodi","klasifikacija","vlasnistvo"]);

const adminController = (req, res) => {
  let user = req.session.user;
  db.users.find({}, (err, users) => {
    db.proizvodi.find({}, (err, proizvodi) => {
      db.klasifikacija.find({}, (err,klasifikacija) => {
        db.vlasnistvo.find({}, (err,vlasnistvo) => {
      db.gradovi.find({}, (err, gradovi) => {
        db.termini.find({ "active":false}, (err,termini) =>{
          db.termini.find({ "active":true}, (err,atermini) =>{
        let operateri = users.filter((user) => user.role == "operater");
        let savetnici = users.filter((user) => user.role == "savetnik");

       

        res.render("admin/adminDashboard", {
          name: user.first_name,
          gradovi: gradovi,
          klasifikacija: klasifikacija,
          proizvodi: proizvodi,
          operateri: operateri,
          vlasnistvo: vlasnistvo,
      
          savetnici: savetnici,
          brojusera: users.length,
          brojoperatera: operateri.length,
          brojsavjetnika: savetnici.length,
          neaktivnitermini: termini.length,
          aktivnitermini: atermini.length,


        });
        });
        });
      });
    });
  });
});
  
});
};

module.exports = adminController;
