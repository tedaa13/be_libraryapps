require('dotenv').config();
const PORT = process.env.PORT || 5000;
const express = require('express');
const cors = require('cors');

const usersRoutes = require('./routes/users.js');
const booksRoutes = require('./routes/books.js');
const locationsRoutes = require('./routes/locations.js');
const transactionsRoutes = require('./routes/transactions.js');
const app = express();

app.use(function (req, res, next) {
  // Website you wish to allow to connect
  res.setHeader('Access-Control-Allow-Origin', '*');
  // Request methods you wish to allow
  res.setHeader('Access-Control-Allow-Methods', 'GET, POST, PUT, PATCH, DELETE, OPTIONS');
  // Request headers you wish to allow
  res.setHeader('Access-Control-Allow-Headers', 'X-Requested-With,content-type');
  // Set to true if you need the website to include cookies in the requests sent
  // to the API (e.g. in case you use sessions)
  res.setHeader('Access-Control-Allow-Credentials', true);
  // Pass to next layer of middleware
  next();
});

app.use(express.json());
app.use('/users', usersRoutes);
app.use('/books', booksRoutes);
app.use('/locations', locationsRoutes);
app.use('/transactions', transactionsRoutes);

app.listen(PORT, () => {
  console.log(`Server berhasil running pada port ${PORT}`);
});

// app.use((req, res, next) => {
//     console.log('log terjadi request ke API');
//     next();
// });

// app.get("/", (req, res) => {
//     // res.send('<h1>HELLO GET METHOD</h1>');
//     res.json({
//         nama: "Andre Teda",
//         umur: 32
//     });
// }); 

// app.post("/", (req, res) => {
//     res.send("HALOO POST ANDRE");
// });

