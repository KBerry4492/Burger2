module.exports = function(sequelize, DataTypes) {
  var Burger = sequelize.define('Burger', {

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

	  } //end table
	);
  return Burger;
};