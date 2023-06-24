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
        // answered: {
        //     type: Sequelize.BOOLEAN,
        //     defaultValue: false,
        // },
        status: {
            type: Sequelize.BOOLEAN,
            defaultValue: false,
        },
        // telegramId: {
        //     type: Sequelize.STRING,
        //     defaultValue: "",
        // },
        description: {
            type: Sequelize.STRING,
            defaultValue: "",
        },
        start_time: {
            type: Sequelize.STRING,
            defaultValue: "",
        },
        end_time: {
            type: Sequelize.STRING,
            defaultValue: "",
        },
        start_day: {
            type: Sequelize.STRING,
            defaultValue: "",
        },
        end_day: {
            type: Sequelize.STRING,
            defaultValue: "",
        },
    });
    return Orders;
};
