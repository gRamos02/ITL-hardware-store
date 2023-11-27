const { sequelize, Producto } = require('../database/models')

module.exports.getAll = async (req, res) => {

    try {
        const { count, rows } = await Producto.findAndCountAll();
        res.json({
            data: rows,
            totalResults: count
        })
    } catch (err) {
        res.status(500).json({message:  err.message})
    }
}

//MIDDLEWARE
module.exports.getById = async (req, res) => {
    try {

    } catch (err) {

    }

}

module.exports.getOne = async (req, res) => {
    try {
        
    } catch (err) {

    }

}