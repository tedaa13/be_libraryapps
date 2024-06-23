const dbPool = require('../config/connection');
const getAllLocations = () => {
  const sqlQuery = "SELECT * FROM mst_locations";
  return dbPool.execute(sqlQuery);
};

const createNewLocations = (body) => {
  const sqlQuery = "INSERT INTO mst_locations (name, col_location, row_location, quantity) VALUES ('"+body.name+"','"+body.columns+"','"+body.rows+"','"+body.quantity+"')";
  return dbPool.execute(sqlQuery);
};

const updateLocations = (body, idLocation) => {
  const sqlQuery =  "UPDATE mst_locations " +
                    "SET name = '"+body.name+"', col_location = '"+body.email+"', row_location = '"+body.address+"', quantity = '"+body.address+"'" +
                    "WHERE id_location = '"+idLocation+"'";
  return dbPool.execute(sqlQuery);
}

const deleteLocations = (idLocation) => {
  const sqlQuery =  "DELETE FROM mst_locations " +
                    "WHERE id_location = '"+idLocation+"'";
  return dbPool.execute(sqlQuery);
}

module.exports = {
  getAllLocations,
  createNewLocations,
  updateLocations,
  deleteLocations
}