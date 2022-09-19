const bcrypt = require("bcrypt");
const db = require("../models");
const jwt = require("jsonwebtoken");
const config = require("../config/config");
const nodemailer = require("nodemailer");

const Users = db.Users;

exports.create = (req, res) => {
    Users.findOne({ where: { username: req.body.username } })
        .then((res1) => {
            if (!res1) {
                let user = {
                    username: req.body.username,
                    password: req.body.password,
                    email: req.body.email,
                };
                jwt.sign(user, config.verifyKey, { expiresIn: "90s" }, (err, token) => {
                    let transporter = nodemailer.createTransport({
                        service: "Gmail",
                        auth: {
                            user: config.email,
                            pass: config.emailPassword,
                        },
                    });

                    let mailOptions = {
                        from: config.email,
                        to: req.body.email,
                        subject: "Sending Email using Node.js",
                        html: `<button><a href="http://localhost:8080/auth/verify/?token=${token}">Active Link</a></button>`,
                    };

                    transporter.sendMail(mailOptions, function (error, info) {
                        if (error) {
                            res.send(error);
                        } else {
                            res.send(`Message sending your ${req.body.email}.`);
                        }
                    });
                });
            } else {
                res.send("This username already exists!");
            }
        })
        .catch((err) => {
            res.send(err);
        });
};

exports.login = (req, res) => {
    Users.findOne({ where: { username: req.body.username } })
        .then((res1) => {
            if (res1) {
                if (bcrypt.compareSync(req.body.password, res1.password).valueOf()) {
                    let user = {
                        id: res1.id,
                        username: res1.username,
                        email: res1.email,
                    };
                    jwt.sign(user, config.tokenKey, { expiresIn: "4h" }, (err, token) => {
                        if (err) res.send(err);
                        res.send({ token: token });
                    });
                } else {
                    res.send("Incorrect password!");
                }
            } else {
                res.send("Incorrect username");
            }
        })
        .catch((err) => {
            res.send(err);
        });
};

exports.verify = (req, res) => {
    jwt.verify(req.query.token, config.verifyKey, (err, auth) => {
        if (err) res.send("Verify time is ended!");
        let salt = bcrypt.genSaltSync(config.genSalt).valueOf();
        let password = bcrypt.hashSync(auth.password, salt).valueOf();
        let user = {
            username: auth.username,
            password: password,
            email: auth.email,
        };
        Users.create(user)
            .then((res1) => {
                Users.findByPk(res1.id)
                    .then((res2) => {
                        res.send("Verify successed!!!");
                    })
                    .catch((err2) => {
                        res.send(err2);
                    });
            })
            .catch((err) => {
                res.send(err);
            });
    });
};

exports.update = (req, res) => {
    let tokenHeader = req.headers["authorization"];
    if (tokenHeader) {
        let token = tokenHeader.split(" ")[1];
        jwt.verify(token, config.tokenKey, (err, auth) => {
            if (err) res.send(err);
            let salt = bcrypt.genSaltSync(config.genSalt).valueOf();
            let password = bcrypt.hashSync(req.body.password, salt).valueOf();
            Users.update(
                { password: password },
                {
                    where: { username: auth.username },
                }
            )
                .then((res1) => {
                    if (res1[0] !== 0) {
                        res.send("Password changed!");
                    } else {
                        res.send("Password not changed!");
                    }
                })
                .catch((err) => {
                    res.send(err);
                });
        });
    } else {
        res.sendStatus(403);
    }
};

exports.delete = (req, res) => {
    let tokenHeader = req.headers["authorization"];
    if (tokenHeader) {
        let token = tokenHeader.split(" ")[1];
        jwt.verify(token, config.tokenKey, (err, auth) => {
            if (err) res.send(err);
            Users.destroy({
                where: { username: auth.username },
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
        });
    }
};
