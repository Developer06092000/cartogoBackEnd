const db = require("../models");

const Cars = db.Cars;
const Order = db.Orders;

exports.findTime = (req, res) => {
    Order.findAll({ raw: true })
        .then((res1) => {
            console.log(res1);
            let data = res1.filter(
                (item) =>
                    item.start_day === req.query.start_day ||
                    item.end_day === req.query.end_day ||
                    item.start_day === req.query.end_day ||
                    item.end_day === req.query.start_day
            );
            Cars.findAll({ raw: true })
                .then((res2) => {
                    if (data.length === 0) {
                        res.send(res2);
                    } else {
                        let data1 = res2.filter((item) => data.every((d) => d.carId !== item.id));
                        res.send(data1);
                    }
                })
                .catch((err) => console.log(err));
        })
        .catch((err) => console.log(err));
};

exports.findAll = (req, res) => {
    Cars.findAll({ raw: true })
        .then((res1) => {
            res.send(res1);
        })
        .catch((err) => console.log(err));
};

exports.create = (req, res) => {
    try {
        if (req.file == undefined) {
            return res.send(`You must select a file.`);
        }
        Cars.create({
            image: req.file.path,
            name: req.body.name,
            doors: req.body.doors,
            seats: req.body.seats,
            buggage: req.body.buggage,
            fuel: req.body.fuel,
            price: req.body.price,
            brandId: req.body.brandId,
            categoryId: req.body.categoryId,
        })
            .then((res1) => {
                Cars.findByPk(res1.id)
                    .then((res2) => {
                        res.send(res2);
                    })
                    .catch((err2) => {
                        res.send(err2);
                    });
            })
            .catch((err) => {
                res.send(err);
            });
    } catch (error) {
        return res.send(`Error when trying upload images: ${error}`);
    }
};

exports.findOne = (req, res) => {
    Cars.findByPk(req.params.id)
        .then((res1) => {
            if (res1) {
                res.send(res1);
            } else {
                res.send("Not found");
            }
        })
        .catch((err) => res.send(err));
};

exports.update = (req, res) => {
    Cars.update(
        {
            image: req.file ? req.file.path : undefined,
            name: req.body.name,
            doors: req.body.doors,
            seats: req.body.seats,
            buggage: req.body.buggage,
            fuel: req.body.fuel,
            price: req.body.price,
            brandId: req.body.brandId,
            categoryId: req.body.categoryId,
        },
        {
            where: { id: req.params.id },
        }
    )
        .then((res1) => {
            if (res1[0] !== 0) {
                Cars.findByPk(req.params.id)
                    .then((res2) => {
                        res.send(res2);
                    })
                    .catch((err2) => {
                        res.send(err2);
                    });
            } else {
                res.send("Not found");
            }
        })
        .catch((err) => {
            res.send(err);
        });
};

exports.delete = (req, res) => {
    Cars.destroy({
        where: { id: req.params.id },
    })
        .then((res1) => {
            if (res1) {
                res.send("Has been deleted!");
            } else {
                res.send("Not found");
            }
        })
        .catch((err) => {
            res.send(err);
        });
};
