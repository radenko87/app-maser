const mongojs = require("mongojs");
const db = mongojs("fullapp", ["popis1"]);

const newUnosController = (req, res) => {
  let user = req.session.user;
  db.popis1.insert(
    {
      ime_stranke: req.body.ime_stranke,
      prezime_stranke: req.body.prezime_stranke,
      godiste_stranke: req.body.godiste_stranke,
      ime_supruznika: req.body.ime_supruznika,
      prezime_supruznika: req.body.prezime_supruznika,
      godiste_supruznika: req.body.godiste_supruznika,
      fiksni_telefon: req.body.fiksni_telefon,
      mobilni_telefon: req.body.mobilni_telefon,
      adresa: req.body.adresa,
      datum_zakazivanja: req.body.datum_zakazivanja,
      vreme_termina: req.body.vreme_termina,
      savetnik: req.body.savetnik,
      gradovi: req.body.gradovi,
      deca: req.body.deca,
      operacije: req.body.operacije,
      terapija: req.body.terapija,
      napomena: req.body.napomena,
      vlasnistvo: req.body.vlasnistvo,
      klasifikacija: req.body.klasifikacija,
      active: true,
      vrednost_ugovora: 0,
      razlog: "",
      ulaz: false,
      proizvodi: req.body.proizvodi,
      operater: user.first_name + " " + user.last_name,
    },
    (err, docs) => {
      res.redirect("/punos");
    }
  );
};

module.exports = newUnosController;