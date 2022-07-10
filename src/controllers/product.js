exports.getProducts = async (req, res) => {
    res.send({
        message: "get products"
    })
}

exports.getProduct = async (req, res) => {

    const { id } = req.params;

    res.send({
        message: `get product ${id}`
    })
}

exports.addProduct = async (req, res) => {
    res.send({
        message: "add product"
    })
}

exports.updateProduct = async (req, res) => {

    const { id } = req.params;

    res.send({
        message: `update product ${id}`
    })
}

exports.deleteProduct = async (req, res) => {

    const { id } = req.params;

    res.send({
        message: `delete product ${id}`
    })
}