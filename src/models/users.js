const dbPool = require('../config/connection');
const getAllUsers = () => {
  const sqlQuery =  "SELECT u.id_user, u.name, u.email, u.address, s.description as status_desc "+
                    "FROM mst_users as u "+
                    "INNER JOIN mst_status as s ON s.id_status = u.id_status ";
  return dbPool.execute(sqlQuery);
};

const getAllUsersActive = () => {
  const sqlQuery =  "SELECT u.id_user, u.name, u.email, u.address, s.description as status_desc "+
                    "FROM mst_users as u "+
                    "INNER JOIN mst_status as s ON s.id_status = u.id_status "+
                    "WHERE u.id_status = '001'";
  return dbPool.execute(sqlQuery);
};

const getDetailUser = (idUser) => {
  const sqlQuery =  "SELECT u.id_user, u.name, u.email, u.address, s.description as status_desc, u.id_status "+
                    "FROM mst_users as u "+
                    "INNER JOIN mst_status as s ON s.id_status = u.id_status "+
                    "WHERE u.id_user = '"+idUser+"'";
  return dbPool.execute(sqlQuery);
};

const createNewUser = (body) => {
  const sqlQuery = "INSERT INTO mst_users (name, email, address, id_status) VALUES ('"+body.name+"','"+body.email+"','"+body.address+"','001')";
  return dbPool.execute(sqlQuery);
};

const updateUser = (body, idUser) => {
  const sqlQuery =  "UPDATE mst_users " +
                    "SET name = '"+body.name+"', email = '"+body.email+"', address = '"+body.address+"', id_status = '"+body.id_status+"'" +
                    "WHERE id_user = '"+idUser+"'";
  return dbPool.execute(sqlQuery);
}

const deleteUser = (idUser) => {
  console.log(idUser);
  const sqlQuery =  "DELETE FROM mst_users " +
                    "WHERE id_user = '"+idUser+"'";
  return dbPool.execute(sqlQuery);
}

module.exports = {
  getAllUsers,
  createNewUser,
  updateUser,
  deleteUser,
  getDetailUser,
  getAllUsersActive
}