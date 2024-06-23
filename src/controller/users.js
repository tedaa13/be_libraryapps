const usersModel = require('../models/users');

const getAllUsers = async (req, res) => {
  try{
    const [data] = await usersModel.getAllUsers();
    res.json({
      message: 'GET all users success',
      data: data
    })
  }catch(error){
    res.status(500).json({
      message: 'Server error',
      serverMessage: error
    })
  }
  //CONTOH DATA DUMMY
  // const data = {
  //   id: 1,
  //   name: "Teda",
  //   email: "teda@gmail.com",
  //   address: "Bogor"
  // }
}

const getAllUsersActive = async (req, res) => {
  try{
    const [data] = await usersModel.getAllUsersActive();
    res.json({
      message: 'GET all users active success',
      data: data
    })
  }catch(error){
    res.status(500).json({
      message: 'Server error',
      serverMessage: error
    })
  }
}

const getDetailUser = async (req, res) => {
  const {id} = req.params;
  
  try{
    const [data] = await usersModel.getDetailUser(id);
    res.json({
      message: 'GET detail user success',
      data: data
    })
  }catch(error){
    res.status(500).json({
      message: 'Server error',
      serverMessage: error
    })
  }
}

const createNewUser = async (req, res) => {
  const {body} = req;
  if(body.name == ""){
    res.status(422).json({
      errors: "Name required",
    });
  }else if(body.email == ""){
    res.status(422).json({
      errors: "Email required",
    });
  }else if(body.address == ""){
    res.status(422).json({
      errors: "Address required",
    });
  }else{
    try{
      await usersModel.createNewUser(body);
      res.json({
        message: 'CREATE new user success',
        data: body
      });
    }catch(error){
      res.status(500).json({
        message: "Server connection error",
        messageServer: error
      })
    }
  }
}

const updateUser = async (req, res) => {
  const {id} = req.params;
  const {body} = req;

  try{
    await usersModel.updateUser(body,id);
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

const deleteUser = async (req, res) => {
  const {id} = req.params;
  try{
    await usersModel.deleteUser(id);
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
    getAllUsers,
    createNewUser,
    updateUser,
    deleteUser,
    getDetailUser,
    getAllUsersActive
}