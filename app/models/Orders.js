module.exports = class Orders {
    constructor({ name, email, phone, answered, description, telegramId, carId }) {
        this.name = name;
        this.email = email;
        this.phone = phone;
        this.answered = answered;
        this.description = description;
        this.telegramId = telegramId;
        this.carId = carId;
    }
};
