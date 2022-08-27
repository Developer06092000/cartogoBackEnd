module.exports = (sequelize, Sequelize) => {
    const Orders = sequelize.define("orders", {
        id: {
            type: Sequelize.INTEGER,
            autoIncrement: true,
            primaryKey: true,
            allowNull: false,
        },
        name: {
            type: Sequelize.STRING,
            defaultValue: "",
        },
        email: {
            type: Sequelize.STRING,
            defaultValue: "",
        },
        phone: {
            type: Sequelize.STRING,
            defaultValue: "",
        },
        answered: {
            type: Sequelize.BOOLEAN,
            defaultValue: false,
        },
        telegramId: {
            type: Sequelize.STRING,
            defaultValue: "",
        },
        description: {
            type: Sequelize.STRING,
            defaultValue: "",
        },
    });
    return Orders;
};
