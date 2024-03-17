// import models
const Product = require('./Product');
const Category = require('./Category');
const Tag = require('./Tag');
const ProductTag = require('./ProductTag');

// Products belongsTo Category
Product.belongsTo(Category, {
  foriegnKey: 'category_id',
})
// Categories have many Products
Category.hasMany(Product, {
  foriegnKey: 'category_id',
  onDelete: 'CASCADE',
})
// Products belongToMany Tags (through ProductTag)
Product.belongsToMany(ProductTag, {
  foriegnKey: 'product_id'
})
// Tags belongToMany Products (through ProductTag)
Tag.belongsToMany(ProductTag, {
  foriegnKey:'product_id',
  
})
module.exports = {
  Product,
  Category,
  Tag,
  ProductTag,
};
