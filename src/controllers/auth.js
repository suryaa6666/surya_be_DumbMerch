const { user } = require("../../models")

const Joi = require("joi");
const bcrypt = require("bcrypt");

exports.register = async (req, res) => {
    try {
        const schema = Joi.object({
            name: Joi.string().min(3).required(),
            email: Joi.string().email().min(5).required(),
            password: Joi.string().min(4).required()
        })

        const { error } = schema.validate(req.body)

        const emailExist = await user.findOne({
            where: {
                email: req.body.email
            }
        })

        const salt = await bcrypt.genSalt(10);
        const hashedPassword = await bcrypt.hash(req.body.password, salt);

        if (error) {
            return res.status(400).send({
                status: "error",
                message: error.details[0].message
            })
        }

        if (emailExist) {
            return res.status(400).send({
                status: "error",
                message: "email already registered! use another else!"
            })
        }

        const newUser = await user.create({
            name: req.body.name,
            email: req.body.email,
            password: hashedPassword,
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

        const isValid = await bcrypt.compare(req.body.password, userExist.password);

        if (!userExist) {
            return res.status(400).send({
                status: "error",
                message: "email not registered!"
            })
        }

        if (!isValid) {
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