
exports.getUsers = async (req, res) => {
    res.send({
        message: "get users"
    })
}

exports.getUser = async (req, res) => {

    const { id } = req.params;

    res.send({
        message: `get user ${id}`
    })
}

exports.addUser = async (req, res) => {
    res.send({
        message: "add user"
    })
}

exports.updateUser = async (req, res) => {

    const { id } = req.params;

    res.send({
        message: `update user ${id}`
    })
}

exports.deleteUser = async (req, res) => {

    const { id } = req.params;

    res.send({
        message: `delete user ${id}`
    })
}