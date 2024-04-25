const User = require('./User');
const Checkings = require('./Checkings');
const AccOverview = require('./AccOverview');
const Transactions = require('./Transactions')

User.hasMany(Checkings, {
  foreignKey: 'user_id',
  onDelete: 'CASCADE',
});

Checkings.belongsTo(User, {
  foreignKey: 'user_id',
});

Checkings.hasOne(AccOverview, {
  foreignKey: 'checkings_id',
});

AccOverview.belongsTo(Checkings, {
  foreignKey: 'checkings_id',
});

AccOverview.hasMany(Transactions,{
  foreignKey: 'transactions_id',
})

module.exports = { User, Checkings, AccOverview, Transactions};