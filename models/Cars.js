module.exports = class Car {
    constructor({ name, doors, seats, buggage, fuel, price, brandId, categoryId }) {
        this.name = name;
        this.doors = doors;
        this.seats = seats;
        this.buggage = buggage;
        this.fuel = fuel;
        this.price = price;
        this.brandId = brandId;
        this.categoryId = categoryId;
    }
};
