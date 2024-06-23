const dbPool = require('../config/connection');
const getAllBooks = () => {
  const sqlQuery =  "SELECT b.title, b.isbn, b.author, CONCAT(l.name, ' - ', l.col_location, ' - ', l.row_location) as location_name, l.col_location, l.row_location, s.description as status_desc "+
                    "FROM mst_books as b "+
                    "LEFT JOIN mst_locations as l ON l.id_location = b.id_location "+
                    "INNER JOIN mst_status as s ON s.id_status = b.id_status ";

  return dbPool.execute(sqlQuery);
};

const getAllBooksActive = () => {
  const sqlQuery =  "SELECT b.id_book, b.title, b.isbn, b.author, l.name as location_name, l.col_location, l.row_location "+
                    "FROM mst_books as b "+
                    "LEFT JOIN mst_locations as l ON l.id_location = b.id_location "+
                    "WHERE b.id_status = '003'";

  return dbPool.execute(sqlQuery);
};

const createNewBook = (body) => {
  const sqlQuery =  "INSERT INTO mst_books (id_location, isbn, title, subtitle, author, published, publisher, pages, description, website, created_at)" +
                    "VALUES ('"+body.id_location+"','"+body.isbn+"','"+body.title+"','"+body.subtitle+"','"+body.author+"','"+body.published+"','"+body.publisher+"','"+body.pages+"','"+body.description+"','"+body.website+"', Now())";
  return dbPool.execute(sqlQuery);
};

const updateBook = (body, idBook) => {
  const sqlQuery =  "UPDATE mst_books " +
                    "SET id_location = '"+body.id_location+"', isbn = '"+body.isbn+"', title = '"+body.title+"',subtitle = '"+body.subtitle+"', author = '"+body.author+"', publisher = '"+body.publisher+"', description = '"+body.description+"', website = '"+body.website+"'" +
                    "WHERE id_book = '"+idBook+"'";
  return dbPool.execute(sqlQuery);
}

const updateStatusBook = (idBook) => {
  const sqlQuery =  "UPDATE mst_books " +
                    "SET id_status = '004'" +
                    "WHERE id_book = '"+idBook+"'";
  return dbPool.execute(sqlQuery);
}

const deleteBook = (idBook) => {
  const sqlQuery =  "DELETE FROM mst_books " +
                    "WHERE id_book = '"+idBook+"'";
  return dbPool.execute(sqlQuery);
}

module.exports = {
  getAllBooks,
  createNewBook,
  updateBook,
  deleteBook,
  getAllBooksActive,
  updateStatusBook
}