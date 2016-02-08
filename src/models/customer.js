module.exports = function(sequelize, DataTypes) {
  var Customer = sequelize.define('Customer', {
    id: {
      type:DataTypes.INTEGER,
      primaryKey: true
    },
    name: DataTypes.STRING,
    account_id: DataTypes.STRING,
    email: {
      type: DataTypes.STRING,
      validated: {
        isEmail: true
      }
    }
  }, {
    classMethods: {
      associate: function(models) {
        Customer.hasMany(models.Purchase)
      }
    }
  });

  return Customer;
};