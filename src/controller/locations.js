const usersModel = require('../models/locations');

const getAllLocations = async (req, res) => {
  try{
    const [data] = await usersModel.getAllLocations();
    res.json({
      data: data
    })
  }catch(error){
    res.status(500).json({
      message: 'Server error',
      serverMessage: error
    })
  }
}

const createNewLocations = async (req, res) => {
  const {body} = req;

  try{
    await usersModel.createNewLocations(body);
    res.json({
      data: body
    });
  }catch(error){
    res.status(500).json({
      message: "Server connection error",
      messageServer: error
    })
  }
}

const updateLocations = async (req, res) => {
  const {id} = req.params;
  const {body} = req;

  try{
    await usersModel.updateLocations(body,id);
    res.json({
      message: "Update user success",
      data: {
        id: id,
        ...body
      }
    });
  }catch(error){
    res.status(500).json({
      message: "Server connection error",
      messageServer: error
    })
  }
}

const deleteLocations = async (req, res) => {
  const {id} = req.params;
  try{
    await usersModel.deleteLocations(id);
    res.json({
      message: "DELETE user success"
    });
  }catch(error){
    res.status(500).json({
      message: "Server connection error",
      messageServer: error
    })
  }
}

module.exports = {
    getAllLocations,
    createNewLocations,
    updateLocations,
    deleteLocations
}