const db = require("../models");

const Cars = db.Cars;

exports.findAll = (req, res) => {
    Cars.findAll({ raw: true })
        .then((res1) => {
            res.send(res1);
        })
        .catch((err) => console.log(err));
};

exports.create = (req, res) => {
    Cars.create({
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
