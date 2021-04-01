const mongojs = require("mongojs");
const db = mongojs("fullapp", ["vlasnistvo"]);

const deleteVlasnistvoController = (req, res) => {
  let vlasnistvoId = req.params.vlasnistvoId;
  db.vlasnistvo.remove({ _id: mongojs.ObjectID(vlasnistvoId) }, (err, docs) => {
    res.send("Ok");
  });
};

module.exports = deleteVlasnistvoController;