const Register = require('../models/register');
const { errorHandler } = require('../helpers/dbErrorHandler');

exports.create = (req, res) => {
    const register = new Register(req.body);
    register.save((err, data) => {
        if (err) {
            return res.status(400).json({
                error: errorHandler(err)
            });
        }
        res.json({ data });
    });
};

