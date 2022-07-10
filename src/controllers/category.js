exports.getCategories = async (req, res) => {
    res.send({
        message: "get categories"
    })
}

exports.addCategory = async (req, res) => {
    res.send({
        message: "add category"
    })
}


exports.updateCategory = async (req, res) => {

    const { id } = req.params;

    res.send({
        message: `update category ${id}`
    })
}

exports.deleteCategory = async (req, res) => {

    const { id } = req.params;

    res.send({
        message: `delete category ${id}`
    })
}