module.exports = function(sequelize, Sequelize) {
    var Users = sequelize.define('Users', {
        username: Sequelize.STRING,
        password: Sequelize.STRING
    })
    return Users;
};
