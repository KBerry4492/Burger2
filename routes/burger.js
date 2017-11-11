var db = require("../models");

module.exports = burger(app) {
  all: function(cb) {
    .all("burgers", function(res) {
      cb(res);
    });
  },
  // The variables cols and vals are arrays.
  create: function(cols, vals, cb) {
    .create("burgers", cols, vals, function(res) {
      cb(res);
    });
  },
  update: function(objColVals, condition, cb) {
    .update("burgers", objColVals, condition, function(res) {
      cb(res);
    });
  }
};

 burger;
