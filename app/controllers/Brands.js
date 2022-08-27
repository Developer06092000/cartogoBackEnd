const db = require("../models");

const Brands = db.Brands;

exports.findAll = (req, res) => {
    Brands.findAll({ raw: true })
        .then((res1) => {
            res.send(res1);
        })
        .catch((err) => console.log(err));
};

exports.create = (req, res) => {
    Brands.create({ name: req.body.name })
        .then((res1) => {
            Brands.findByPk(res1.id)
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
    Brands.findByPk(req.params.id)
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
    Brands.update(
        { name: req.body.name },
        {
            where: { id: req.params.id },
        }
    )
        .then((res1) => {
            if (res1[0] !== 0) {
                Brands.findByPk(req.params.id)
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
    Brands.destroy({
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
