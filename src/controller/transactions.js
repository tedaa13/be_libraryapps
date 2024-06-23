const transactionModel = require('../models/transactions');
const bookModel = require('../models/books');

const getAllTransaction = async (req, res) => {
  try{
    const [data] = await transactionModel.getAllTransaction();
    res.json({
      message: 'GET all transaction success',
      data: data
    })
  }catch(error){
    res.status(500).json({
      message: 'Server error',
      serverMessage: error
    })
  }
}

const createTransaction = async (req, res) => {
  try{
    const {body} = req;

    //Mendapatkan ID Transaction terakhir
    const [getID] = await transactionModel.getIDTransaction();
    let id_hdr = 1;
    if(getID.length > 0){
      id_hdr = getID[0].id_transaction_hdr + 1;
    }

    //Logic untuk membuat no transaksi per periode tahun
    const d = new Date();
    let year = d.getFullYear();
    let month = d.getMonth();
    let numbering = "000" +  id_hdr;
    let no_transaction = year.toString() + ("0" + (month + 1).toString()).slice(-2) +  numbering.substr(numbering.length-4, numbering.length);

    //Create transaksi header
    const [data] = await transactionModel.createTransaction(body, id_hdr, no_transaction);

    //Fungi untuk update status buku dan insert row transaksi detail
    for(let x = 0;x<body.book.length;x++){
      await transactionModel.createTransactionDtl(body.book[x], x + 1, id_hdr);
      await bookModel.updateStatusBook(body.book[x]);
    }

    res.json({
      message: 'POST create transaction success'
    })
  }catch(error){
    res.status(500).json({
      message: 'Server error',
      serverMessage: error
    })
  }
}


module.exports = {
    getAllTransaction,
    createTransaction
}