module.exports = function (sequelize, DataTypes) {
    const User = sequelize.define('User', {
        username: DataTypes.STRING,
        birthday: DataTypes.DATE,
    }, {
      classMethods: {
        associate: function (models) {
          // reignKey: { allowNull: false } });
          // User.belongsTo(moUser.belongsTo(models.Department, { foreignKey: { allowNull: false } });
          // User.belongsTo(models.Position, { fodels.Profile, { foreignKey: { allowNull: false } });
  
          // User.hasMany(models.Report, { foreignKey: { allowNull: false } });
          // User.hasMany(models.Notification, { foreignKey: { allowNull: false } });
          // User.hasMany(models.Response, { foreignKey: { allowNull: false } });
  
        }
      },
  
      timestamps: true,
  
      // don't delete database entries but set the newly added attribute deletedAt
      // to the current date (when deletion was done). paranoid will only work if
      // timestamps are enabled
      paranoid: false,
  
      // don't use camelcase for automatically added attributes but underscore style
      // so updatedAt will be updated_at
      underscored: true
    });
    return User;
  };