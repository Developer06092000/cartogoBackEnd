const db = require("../models");
const config = require("../config/config");
const jwt = require("jsonwebtoken");

const Order = db.Orders;

exports.findAll = (req, res) => {
    Order.findAll({ raw: true })
        .then((res1) => {
            res.send(res1);
        })
        .catch((err) => console.log(err));
};

// exports.create = (req, res) => {
//     let order = {
//         name: req.body.name,
//         email: req.body.email,
//         phone: req.body.phone,
//         description: req.body.description,
//         start_time: req.body.time,
//         end_time: req.body.time,
//         start_day: req.body.start_day,
//         end_day: req.body.end_day,
//         carId: req.body.carId,
//     };
//     jwt.sign(order, config.verifyKey, (err, token) => {
//         if (err) res.send(err);
//         console.log(1);
//         let transporter = nodemailer.createTransport({
//             service: "Gmail",
//             auth: {
//                 user: config.email,
//                 pass: config.emailPassword,
//             },
//         });
//         console.log(2);

//         let mailOptions = {
//             from: config.email,
//             to: req.body.email,
//             subject: "Order",
//             html: `<button><a href="http://localhost:8080/auth/verify/?token=${token}">Active Link</a></button>`,
//         };

//         transporter.sendMail(mailOptions, function (error, info) {
//             if (error) {
//                 res.send(error);
//             } else {
//                 res.send(`Message sending your ${req.body.email}.`);
//             }
//         });
//     });
// };

exports.create = (req, res) => {
    // jwt.verify(req.query.token, config.verifyKey, (err, auth) => {
    //     if (err) res.send(err);
    // });
    Order.create({
        name: auth.name,
        email: auth.email,
        phone: auth.phone,
        description: auth.description,
        start_time: auth.time,
        end_time: auth.time,
        start_day: auth.start_day,
        end_day: auth.end_day,
        carId: auth.carId,
        status: true,
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
            status: req.body.status,
            description: req.body.description,
            start_time: req.body.start_time,
            end_time: req.body.end_time,
            start_day: req.body.start_day,
            end_day: req.body.end_day,
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
