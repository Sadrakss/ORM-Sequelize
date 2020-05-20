const User = require('../models/User');
module.exports = {
    async index(req, res) {
        const user = await User.findAll({attributes:['id','name','email']})
        return res.json({Users:user})
    },
    async store(req, res) {
        const { name, email } = req.body;

        const user = await User.create({ name, email });
        return res.status(201).json(user);
    },
}