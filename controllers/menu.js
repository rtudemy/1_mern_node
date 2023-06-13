const Menu = require('../models/menu');
const Product = require('../models/product');
const { errorHandler } = require('../helpers/dbErrorHandler');

exports.menuById = (req, res, next, id) => {
    Category.findById(id).exec((err, category) => {
        if (err || !menu) {
            return res.status(400).json({
                error: 'Menu does not exist'
            });
        }
        req.menu = menu;
        next();
    });
};

exports.create = (req, res) => {
    const menu = new Menu(req.body);
    menu.save((err, data) => {
        if (err) {
            return res.status(400).json({
                error: errorHandler(err)
            });
        }
        res.json({ data });
    });
};

exports.read = (req, res) => {
    return res.json(req.menu);
};

exports.update = (req, res) => {
    console.log('req.body', req.body);
    console.log('menu update param', req.params.menuById);

    const menu = req.category;
    menu.name = req.body.name;
    menu.save((err, data) => {
        if (err) {
            return res.status(400).json({
                error: errorHandler(err)
            });
        }
        res.json(data);
    });
};

exports.remove = (req, res) => {
    const category = req.category;
    Product.find({ category }).exec((err, data) => {
        if (data.length >= 1) {
            return res.status(400).json({
                message: `Sorry. You cant delete ${category.name}. It has ${data.length} associated products.`
            });
        } else {
            category.remove((err, data) => {
                if (err) {
                    return res.status(400).json({
                        error: errorHandler(err)
                    });
                }
                res.json({
                    message: 'Category deleted'
                });
            });
        }
    });
};

exports.list = (req, res) => {
    Menu.find().exec((err, data) => {
        if (err) {
            return res.status(400).json({
                error: errorHandler(err)
            });
        }
        res.json(data);
    });
};
