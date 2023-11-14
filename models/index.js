const User = require('./User');
const Checkings = require('./Checkings');

User.hasMany(Checkings, {
  foreignKey: 'user_id',
  onDelete: 'CASCADE'
});

Checkings.belongsTo(User, {
  foreignKey: 'user_id'
});

module.exports = { User, Checkings };
