const db = require("../models");

const Order = db.Orders;

exports.findAll = (req, res) => {
    Order.findAll({ raw: true })
        .then((res1) => {
            res.send(res1);
        })
        .catch((err) => console.log(err));
};

exports.create = (req, res) => {
    Order.create({
        name: req.body.name,
        email: req.body.email,
        phone: req.body.phone,
        answered: req.body.answered,
        description: req.body.description,
        telegramId: req.body.telegramId,
        carId: req.body.carId,
    })
        .then((res1) => {
            Order.findByPk(res1.id)
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
};

exports.findOne = (req, res) => {
    Order.findByPk(req.params.id)
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
    Order.update(
        {
            name: req.body.name,
            email: req.body.email,
            phone: req.body.phone,
            answered: req.body.answered,
            description: req.body.description,
            telegramId: req.body.telegramId,
            carId: req.body.carId,
        },
        {
            where: { id: req.params.id },
        }
    )
        .then((res1) => {
            if (res1[0] !== 0) {
                Order.findByPk(req.params.id)
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
        .catch((err1) => {
            res.send(err1);
        });
};

exports.delete = (req, res) => {
    Order.destroy({
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
