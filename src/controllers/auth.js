exports.register = async (req, res) => {
    res.send({
        message: "auth register"
    })
}

exports.login = async (req, res) => {
    res.send({
        message: "auth login"
    })
}