exports.getTransactions = async (req, res) => {
    res.send({
        message: "get transactions"
    })
}

exports.getTransaction = async (req, res) => {

    const { id } = req.params;

    res.send({
        message: `get transaction ${id}`
    })
}

exports.addTransaction = async (req, res) => {
    res.send({
        message: "add transaction"
    })
}