const mongojs = require("mongojs");
const db = mongojs("fullapp", ["popis1"]);

const izvestajController = (req, res) => {
  let id = req.params.id;

  db.popis1.update(
    { _id: mongojs.ObjectID(id) },
    {
      $set: {
        active: false,
      },
    },
    (err, docs) => {
      // proveriti err
      res.redirect("/savetnik");
    }
  );
};

module.exports = izvestajController;
