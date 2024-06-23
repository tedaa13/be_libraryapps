const usersModel = require('../models/books');

const getAllBooks = async (req, res) => {
  try{
    const [data] = await usersModel.getAllBooks();
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

const getAllBooksActive = async (req, res) => {
  try{
    const [data] = await usersModel.getAllBooksActive();
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

const createNewBook = async (req, res) => {
  const {body} = req;

  if(body.isbn == ""){
    res.status(422).json({
      errors: "ISBN Number required",
    });
  }else if(body.title == ""){
    res.status(422).json({
      errors: "Title required",
    });
  }else if(body.subtitle == ""){
    res.status(422).json({
      errors: "Subtitle required",
    });
  }else if(body.author == ""){
    res.status(422).json({
      errors: "Author required",
    });
  }else if(body.published == ""){
    res.status(422).json({
      errors: "Published required",
    });
  }else if(body.publisher == ""){
    res.status(422).json({
      errors: "Publisher required",
    });
  }else if(body.pages == ""){
    res.status(422).json({
      errors: "Pages required",
    });
  }else if(body.description == ""){
    res.status(422).json({
      errors: "Description required",
    });
  }else if(body.location == "" || body.location == "0"){
    res.status(422).json({
      errors: "Location required",
    });
  }else{
    try{
      await usersModel.createNewBook(body);
      res.json({
        data: body
      });
    }catch(error){
      res.status(500).json({
        messageServer: error
      })
    }
  }
}

const updateBook = async (req, res) => {
  const {id} = req.params;
  const {body} = req;

  try{
    await usersModel.updateBook(body,id);
    res.json({
      data: {
        id: id,
        ...body
      }
    });
  }catch(error){
    res.status(500).json({
      messageServer: error
    })
  }
}

const deleteBook = async (req, res) => {
  const {id} = req.params;
  try{
    await usersModel.deleteBook(id);
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
    getAllBooks,
    createNewBook,
    updateBook,
    deleteBook,
    getAllBooksActive
}