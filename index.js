const express = require("express");
const Sequelize = require("sequelize");
const Car = require("./models/Cars");
const Orders = require("./models/Orders");

const app = new express();
app.use(express.urlencoded({ extended: true }));

const sequelize = new Sequelize("cartogo", "root", "", {
    dialect: "mysql",
    host: "localhost",
    define: {
        timestamps: false,
    },
});

const Brand = sequelize.define("brands", {
    id: {
        type: Sequelize.INTEGER,
        autoIncrement: true,
        primaryKey: true,
        allowNull: false,
    },
    name: {
        type: Sequelize.STRING,
        allowNull: false,
    },
});

const Category = sequelize.define("categories", {
    id: {
        type: Sequelize.INTEGER,
        autoIncrement: true,
        primaryKey: true,
        allowNull: false,
    },
    name: {
        type: Sequelize.STRING,
        allowNull: false,
    },
});

const Cars = sequelize.define("cars", {
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
    doors: {
        type: Sequelize.INTEGER,
        defaultValue: null,
    },
    seats: {
        type: Sequelize.INTEGER,
        defaultValue: null,
    },
    buggage: {
        type: Sequelize.INTEGER,
        defaultValue: null,
    },
    fuel: {
        type: Sequelize.STRING,
        defaultValue: "",
    },
    price: {
        type: Sequelize.INTEGER,
        defaultValue: null,
    },
});

const Order = sequelize.define("orders", {
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

Brand.hasMany(Cars);
Category.hasMany(Cars);
Cars.hasMany(Order);

sequelize
    .sync()
    .then((res) => console.log("Sequelize iwga tuwdi"))
    .catch((err) => {
        console.log("Sequelize iwga tuwmadi");
    });

//
/* Brands methods */
/* Begin brands mehtods */

app.get("/brands/", (req, res) => {
    Brand.findAll({ raw: true })
        .then((res1) => {
            res.send(res1);
        })
        .catch((err) => console.log(err));
});

app.post("/brands/", (req, res) => {
    Brand.create({ name: req.body.name })
        .then((res1) => {
            res.send(res1);
        })
        .catch((err) => {
            res.send(err);
        });
});

app.get("/brands/:id/", (req, res) => {
    Brand.findByPk(req.params.id)
        .then((res1) => {
            if (res1) {
                res.send(res1);
            } else {
                res.send("Not found");
            }
        })
        .catch((err) => res.send(err));
});

app.put("/brands/:id/", (req, res) => {
    Brand.update(
        { name: req.body.name },
        {
            where: { id: req.params.id },
        }
    )
        .then((res1) => {
            if (res1[0] !== 0) {
                Brand.findByPk(req.params.id)
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
});

app.patch("/brands/:id/", (req, res) => {
    Brand.update(
        { name: req.body.name },
        {
            where: { id: req.params.id },
        }
    )
        .then((res1) => {
            if (res1[0] !== 0) {
                Brand.findByPk(req.params.id)
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
});

app.delete("/brands/:id/", (req, res) => {
    Brand.destroy({
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
});

/* End brands mehtods */
//

//
/* Categories methods */
/* Begin categories mehtods */

app.get("/categories/", (req, res) => {
    Category.findAll({ raw: true })
        .then((res1) => {
            res.send(res1);
        })
        .catch((err) => console.log(err));
});

app.post("/categories/", (req, res) => {
    Category.create({ name: req.body.name })
        .then((res1) => {
            res.send(res1);
        })
        .catch((err) => {
            res.send(err);
        });
});

app.get("/categories/:id/", (req, res) => {
    Category.findByPk(req.params.id)
        .then((res1) => {
            if (res1) {
                res.send(res1);
            } else {
                res.send("Not found");
            }
        })
        .catch((err) => res.send(err));
});

app.put("/categories/:id/", (req, res) => {
    Category.update(
        { name: req.body.name },
        {
            where: { id: req.params.id },
        }
    )
        .then((res1) => {
            if (res1[0] !== 0) {
                Category.findByPk(req.params.id)
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
});

app.patch("/categories/:id/", (req, res) => {
    Category.update(
        { name: req.body.name },
        {
            where: { id: req.params.id },
        }
    )
        .then((res1) => {
            if (res1[0] !== 0) {
                Category.findByPk(req.params.id)
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
});

app.delete("/categories/:id/", (req, res) => {
    Category.destroy({
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
});

/* End categories mehtods */
//

//
/* Cars methods */
/* Begin cars mehtods */

app.get("/cars/", (req, res) => {
    Cars.findAll({ raw: true })
        .then((res1) => {
            console.log(res1);
            res.send(res1);
        })
        .catch((err) => console.log(err));
});

app.post("/cars/", (req, res) => {
    Cars.create(new Car(req.body))
        .then((res1) => {
            res.send(res1);
        })
        .catch((err) => {
            res.send(err);
        });
});

app.get("/cars/:id/", (req, res) => {
    Cars.findByPk(req.params.id)
        .then((res1) => {
            if (res1) {
                res.send(res1);
            } else {
                res.send("Not found");
            }
        })
        .catch((err) => res.send(err));
});

app.put("/cars/:id/", (req, res) => {
    Cars.update(new Car(req.body), {
        where: { id: req.params.id },
    })
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
});

app.patch("/cars/:id/", (req, res) => {
    Cars.update(new Car(req.body), {
        where: { id: req.params.id },
    })
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
});

app.delete("/cars/:id/", (req, res) => {
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
});

/* End cars mehtods */
//

//
/* Orders methods */
/* Begin orders mehtods */

app.get("/orders/", (req, res) => {
    Order.findAll({ raw: true })
        .then((res1) => {
            console.log(res1);
            res.send(res1);
        })
        .catch((err) => console.log(err));
});

app.post("/orders/", (req, res) => {
    Order.create(new Orders(req.body))
        .then((res1) => {
            res.send(res1);
        })
        .catch((err) => {
            res.send(err);
        });
});

app.get("/orders/:id/", (req, res) => {
    Order.findByPk(req.params.id)
        .then((res1) => {
            if (res1) {
                res.send(res1);
            } else {
                res.send("Not found");
            }
        })
        .catch((err) => res.send(err));
});

app.put("/orders/:id/", (req, res) => {
    Order.update(new Orders(req.body), {
        where: { id: req.params.id },
    })
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
});

app.patch("/orders/:id/", (req, res) => {
    Order.update(new Orders(req.body), {
        where: { id: req.params.id },
    })
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
        .catch((err) => {
            res.send(err);
        });
});

app.delete("/orders/:id/", (req, res) => {
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
});

/* End orders mehtods */
//

app.listen(8000);
