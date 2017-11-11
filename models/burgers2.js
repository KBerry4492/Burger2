module.exports = function(sequelize, DataTypes) {
  var Burgers = sequelize.define('Burgers', {

        burger_name: {
          type: DataTypes.STRING,
          allowNull: false,
          
          validate: {
            notEmpty: true,
          
          }
        }, //end burger name

        eaten: {
          type: DataTypes.BOOLEAN,
          defaultValue: false,
        },

      }, //end table

      {
        underscored: true,
        freezeTableName: true,
      } //cutlery
    )
  return Burgers;
