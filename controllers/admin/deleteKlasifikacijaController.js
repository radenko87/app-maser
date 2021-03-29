const mongojs = require("mongojs");
const db = mongojs("fullapp", ["klasifikacija"]);

const deleteKlasifikacijaController = (req, res) => {
  let klasifikacijaId = req.params.klasifikacijaId;

  db.klasifikacija.remove({ _id: mongojs.ObjectID(klasifikacijaId) }, (err, docs) => {
    res.send("Ok");
  });
};

module.exports = deleteKlasifikacijaController;
