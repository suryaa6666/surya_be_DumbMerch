const { user } = require("../../models")

const Joi = require("joi");

exports.register = async (req, res) => {
    try {
        const schema = Joi.object({
            name: Joi.string().min(3).required(),
            email: Joi.string().email().min(5).required(),
            password: Joi.string().min(4).required()
        })

        const { error } = schema.validate(req.body)

        if (error) {
            return res.status(400).send({
                status: "error",
                message: error.details[0].message
            })
        }

        const newUser = await user.create({
            name: req.body.name,
            email: req.body.email,
            password: req.body.password,
            status: "customer"
        });

        res.status(201).send({
            status: "success",
            message: "new account has been successfully registered!",
            data: {
                name: newUser.name,
                email: newUser.email
            }
        })

    } catch (error) {
        res.status(400).send({
            status: "error",
            message: error.toString()
        })
    }
}

exports.login = async (req, res) => {
    try {
        const schema = Joi.object({
            email: Joi.string().email().min(5).required(),
            password: Joi.string().min(4).required()
        })

        const { error } = schema.validate(req.body)

        if (error) {
            return res.status(400).send({
                status: "error",
                message: error.details[0].message
            })
        }

        const userExist = await user.findOne({
            where: {
                email: req.body.email
            }
        })

        if (!userExist) {
            return res.status(400).send({
                status: "error",
                message: "email not registered!"
            })
        }

        if (userExist.password !== req.body.password) {
            return res.status(400).send({
                status: "error",
                message: "password is wrong!"
            })
        }

        res.status(200).send({
            status: "success",
            message: "login success!",
            data: {
                name: userExist.name,
                email: userExist.email
            }
        })

    } catch (error) {
        res.status(400).send({
            status: "error",
            message: error.toString()
        })
    }
}