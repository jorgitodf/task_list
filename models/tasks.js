module.exports = function(sequelize, Sequelize) {
    var Tasks = sequelize.define('Tasks', {
        name: Sequelize.STRING,
        done: Sequelize.BOOLEAN
    })
    return Tasks;
};
