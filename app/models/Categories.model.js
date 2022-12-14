module.exports = (sequelize, Sequelize) => {
    const Categories = sequelize.define("categories", {
        id: {
            type: Sequelize.INTEGER,
            autoIncrement: true,
            primaryKey: true,
            allowNull: false,
        },
        name: {
            type: Sequelize.STRING,
            allowNull: false,
        },
    });
    return Categories;
};
