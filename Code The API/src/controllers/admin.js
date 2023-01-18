const md5 = require('md5')
const createToken = require('../middleware/jwt')

const model = require('../models/index')
const admin = model.admin
const guest = model.guest

exports.admin = async (req, res) => {
    let action = req.query.action
    let data = {
        ...req.body,
        password: md5(req.body.password)
    }
    if (action == 'sigin') {
        let result = await admin.findOne({
            where: data,
            attributes: ['username']
        })

        if (result) {
            let token = createToken(result)
            return res.json({
                message: 'Berhasil sigin',
                token,
                username: data.username
            })
        }

        return res.json({
            message: 'Username dan password tidak ditemukan atau salah'
        })
    } else if (action == 'sigup') {
        admin.create(data)
        return res.json({
            message: 'Berhasi sigup',
            data : {
                ...data,
                password: '********'
            }
        })
    }

    return res.status(404).json({
        message: 'query action diperlukan',
        query: ['sigin', 'sigup']
    })
}

exports.findAll = async (_req, res) => {
    let data = await guest.findAll()
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
    let data = await guest.findOne({where: {id}})
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

exports.delete = async (req, res) => {
    let id = req.params.id
    let data = await guest.findOne({where: {id}})
    if (data) {
        guest.destroy({where: {id}})
        return res.json({
            message: 'Berhasil menghapus data',
            data
        })
    }

    return res.status(404).json({
        message: `Tidak ada data dengan id ${id}`
    })
}