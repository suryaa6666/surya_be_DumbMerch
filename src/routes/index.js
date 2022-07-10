const express = require('express');

const router = express.Router();

const { getUsers, getUser, addUser, updateUser, deleteUser } = require('../controllers/user');
const { register, login } = require('../controllers/auth');
const { getCategories, addCategory, updateCategory, deleteCategory, getCategory } = require('../controllers/category');
const { getProducts, getProduct, addProduct, updateProduct, deleteProduct } = require('../controllers/product');
const { getTransactions, getTransaction, addTransaction } = require('../controllers/transaction');

// user routes
router.get('/user', getUsers);
router.get('/user/:id', getUser);
router.post('/user', addUser); // not necessary but okay for dev, use register instead
router.patch('/user/:id', updateUser);
router.delete('/user/:id', deleteUser);

// auth routes
router.post('/login', login);
router.post('/register', register);

// category routes
router.get('/category', getCategories);
router.get('/category/:id', getCategory);
router.post('/category', addCategory);
router.patch('/category/:id', updateCategory);
router.delete('/category/:id', deleteCategory);

// category routes
router.get('/product', getProducts);
router.get('/product/:id', getProduct);
router.post('/product', addProduct);
router.patch('/product/:id', updateProduct);
router.delete('/product/:id', deleteProduct);

// transaction routes
router.get('/transaction', getTransactions);
router.get('/transaction/:id', getTransaction);
router.post('/transaction', addTransaction);

module.exports = router;