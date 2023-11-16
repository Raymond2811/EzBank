const User = require('./User');
const Checkings = require('./Checkings');
const AccOverview = require('./AccOverview');
const Homepage = require('./Homepage');

User.hasMany(Homepage, {
  foreignKey: 'user_id',
  onDelete: 'CASCADE'
});

Homepage.belongsTo(User, {
  foreignKey: 'user_id'
});

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

module.exports = { User, Checkings, AccOverview, Homepage };
