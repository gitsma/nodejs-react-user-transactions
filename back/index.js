require('dotenv').config();

const connectDATABASE = require('./config/db');
connectDATABASE();

const express = require('express');
const app = express();

app.use(express.json());

const createUser = require('./controllers/usersController');
const { setTransaction, getTransactions } = require('./controllers/transactionsController');

app.post('/api/user', createUser);
app.post('/api/transaction', setTransaction);
app.get('/api/transactions', getTransactions);

app.listen(process.env.PORT, () => {
    console.log(`Server is running on ${process.env.PORT} `)
})