const { user } = require('../../models');

exports.getUsers = async (req, res) => {
    try {
        const data = await user.findAll();

        res.status(200).send({
            status: "success",
            data
        })

    } catch (error) {
        res.status(400).send({
            status: "error",
            message: error.toString()
        })
    }
}

exports.getUser = async (req, res) => {
    try {
        const { id } = req.params;

        const data = await user.findOne({
            where: { id }
        })

        res.status(200).send({
            status: "success",
            data
        })
    } catch (error) {
        res.status(400).send({
            status: "error",
            message: error.toString()
        })
    }
}

exports.addUser = async (req, res) => {
    try {
        await user.create(req.body);

        res.status(201).send({
            message: "new user has been successfully added!"
        })
    } catch (error) {
        res.status(400).send({
            status: "error",
            message: error.toString()
        })
    }
}

exports.updateUser = async (req, res) => {
    try {
        const { id } = req.params;

        await user.update(req.body, {
            where: { id }
        })

        res.status(200).send({
            message: `update user id : ${id}, success!`,
            data: req.body
        })
    } catch (error) {
        res.status(400).send({
            status: "error",
            message: error.toString()
        })
    }
}

exports.deleteUser = async (req, res) => {
    try {

        const { id } = req.params;

        await user.destroy({
            where: { id }
        })

        res.status(200).send({
            message: `delete user id : ${id}, success!`
        })
    } catch (error) {
        res.status(400).send({
            status: "error",
            message: error.toString()
        })
    }
}