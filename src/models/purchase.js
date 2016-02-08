module.exports = function(sequelize, DataTypes) {
  var Purchase = sequelize.define('Purchase', {
    id: {
      type:DataTypes.INTEGER,
      primaryKey: true
    },
    name: DataTypes.STRING,
    price:DataTypes.DECIMAL(10,2)
  }, {
    classMethods: {
      associate: function(models) {
        Purchase.belongsTo(models.Product);
        Purchase.belongsTo(models.Customer);
      }
    }
  });

  return Purchase;
};