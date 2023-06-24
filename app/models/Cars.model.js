module.exports = (sequelize, Sequelize) => {
    const Cars = sequelize.define("cars", {
        id: {
            type: Sequelize.INTEGER,
            autoIncrement: true,
            primaryKey: true,
            allowNull: false,
        },
        brand: {
            type: Sequelize.STRING,
            defaultValue: "",
        },
        name: {
            type: Sequelize.STRING,
            defaultValue: "",
        },
        doors: {
            type: Sequelize.INTEGER,
            defaultValue: null,
        },
        seats: {
            type: Sequelize.INTEGER,
            defaultValue: null,
        },
        buggage: {
            type: Sequelize.INTEGER,
            defaultValue: null,
        },
        fuel: {
            type: Sequelize.STRING,
            defaultValue: "",
        },
        price: {
            type: Sequelize.INTEGER,
            defaultValue: null,
        },
        image: {
            type: Sequelize.STRING,
            defaultValue: "",
        },
    });
    return Cars;
};
