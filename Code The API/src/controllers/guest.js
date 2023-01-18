const guest = require('../models/index').guest

exports.findAll = async (_req, res) => {
    let data = await guest.findAll({
        attributes: ['name', 'note']
    })
    if (data[0]) {
        return res.json({
            message: 'Berhasil mengambil semua data',
            data
        })
    }

    return res.status(404).json({
        message: 'Tidak ada data'
    })
}

exports.findOne = async (req, res) => {
    let id = req.params.id
    let data = await guest.findOne({
        where: {id},
        attributes: ['name', 'note']
    })
    if (data) {
        return res.json({
            message: 'Berhasil mengambil data',
            data
        })
    }

    return res.status(404).json({
        message: `Tidak ada data dengan id ${id}`
    })
}

exports.insert = (req, res) => {
    let data = req.body
    guest.create(data)
    res.json({
        message: 'Berhasil menambah data',
        data
    })
}