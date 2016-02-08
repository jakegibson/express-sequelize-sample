module.exports = function(sequelize, DataTypes) {
  var Product = sequelize.define('Product', {
    id: {
      type:DataTypes.INTEGER,
      primaryKey: true
    },
    name: DataTypes.STRING,
    price:DataTypes.DECIMAL(10,2)
  }, {
    classMethods: {
      associate: function(models) {
        Product.hasMany(models.Purchase)
      }
    }
  });

  return Product;
};