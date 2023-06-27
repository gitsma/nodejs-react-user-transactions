const Transactions = require('../models/Transaction');
const asyncHandler = require('express-async-handler');

// create new transaction
// POST /api/transactions
// access privat - useris turi buti prisijunges

const setTransaction = asyncHandler( async(req, res) => {
    if(!req.body.text || !req.body.amount){
        res.status(400)
        throw new Error('Please add a text and amount');
    }
    const transaction = await Transactions.create({
        text: req.body.text,
        amount: req.body.amount,
        user: req.body.user
    });
    res.status(200).send(transaction);
});


// get transaction
// get   /api/transactions
// access privat - useris turi buti prisijunges
const getTransactions = asyncHandler( async (req, res)=>{
    const transactions = await Transactions.find({user: '64996c4c810905801aef4e69'});
    if(!transactions){      
        res.status(400)
        throw new Error('transactions not found');
    }
    res.status(200).send(transactions);
})
module.exports = {
    setTransaction,
    getTransactions
}