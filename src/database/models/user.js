const UserModel = (sequelize, DataTypes) => {
  const User = sequelize.define('User', {
    id: {
      allowNull: false,
      autoIncrement: true,
      type: DataTypes.INTEGER,
      primaryKey: true,
    },
    email: {
      type: DataTypes.STRING,
      unique: true,
    },
      firstName: DataTypes.STRING,
      secondName: DataTypes.STRING,
      password: DataTypes.STRING,
    },
    {
      timestamps: false,
      tableName: 'Users'
  });
  return User;
}

module.exports = UserModel
