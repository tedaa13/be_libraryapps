const dbPool = require('../config/connection');
const getAllTransaction = () => {
  const sqlQuery =  "SELECT h.id_transaction_hdr, h.id_user, h.no_transaction, DATE_FORMAT(h.request_date,'%Y-%m-%d') as request_date, DATE_FORMAT(h.return_date,'%Y-%m-%d') as return_date, d.id_book, b.title, u.name, DATE_FORMAT(h.created_at,'%Y-%m-%d %H:%i:%s') as created_at, h.days "+
                    "FROM trx_transactions_hdr as h "+
                    "INNER JOIN trx_transactions_dtl as d ON d.id_transaction_hdr = h.id_transaction_hdr "+
                    "INNER JOIN mst_books as b ON b.id_book = d.id_book "+
                    "INNER JOIN mst_users as u ON u.id_user = h.id_user ";
  return dbPool.execute(sqlQuery);
};

const createTransaction = (body, id_hdr, no_transaction) => {
  const sqlQuery = "INSERT INTO trx_transactions_hdr (id_transaction_hdr, id_user, no_transaction, id_status, request_date, return_date, days, created_at) "+
                    "VALUES('"+id_hdr+"','"+body.name+"','"+no_transaction+"','006',Now(),DATE_ADD(DATE_FORMAT(Now(), '%Y-%m-%d 23:59:59'), INTERVAL "+body.days+" DAY),'"+body.days+"',Now()) ";
  return dbPool.execute(sqlQuery);
};

const createTransactionDtl = (id_book, id_dtl, id_hdr) => {
  const sqlQuery = "INSERT INTO trx_transactions_dtl (id_transaction_hdr, id_transaction_dtl, id_book) "+
                    "VALUES('"+id_hdr+"','"+id_dtl+"','"+id_book+"') ";
  return dbPool.execute(sqlQuery);
};

const getIDTransaction = () => {
  const sqlQuery =  "SELECT h.id_transaction_hdr "+
                    "FROM trx_transactions_hdr as h "+
                    "WHERE LEFT(h.no_transaction,4) = YEAR(Now()) "+
                    "ORDER BY h.id_transaction_hdr DESC LIMIT 1";
  return dbPool.execute(sqlQuery);
};

module.exports = {
  getAllTransaction,
  createTransaction,
  getIDTransaction,
  createTransactionDtl
}