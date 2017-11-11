var express = require("express");
var db = require('../models');
var moment = require('moment');
var router = express.Router();

// Create all our routes and set up logic within those routes where required.
router.get("/", function(req, res) {
  db.Burger.findAll({}).then((data) => {

    var burgers = {
      burgers: data
    };

    res.render("index", burgers);
  });
});

router.post("/api/burgers", function(req, res) {
  db.Burger.create([
    "name", "eaten"
  ], [
    req.body.name, req.body.eaten
  ], function(result) {
    // Send back the ID of the new quote
    res.json({ id: result.insertId });
  });
});

router.put("/api/burgers/:id", function(req, res) {
  var condition = "id = " + req.params.id;

  console.log("condition", condition);

  db.Burger.update({
    eaten: req.body.eaten
  }, condition, function(result) {
    if (result.changedRows == 0) {
      // If no rows were changed, then the ID must not exist, so 404
      return res.status(404).end();
    } else {
      res.status(200).end();
    }
  });
});

// Export routes for server.js to use.
module.exports = router;
