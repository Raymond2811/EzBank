const User = require('./User');
const Checkings = require('./Checkings');
const Transactions = require('./Transactions')

User.hasMany(Checkings, {
  foreignKey: 'user_id',
  onDelete: 'CASCADE',
});

Checkings.belongsTo(User, {
  foreignKey: 'user_id',
});

Checkings.hasMany(Transactions,{
  foreignKey: 'transactions_id',
})

module.exports = { User, Checkings, Transactions};