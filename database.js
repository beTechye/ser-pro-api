const mongoose = require('mongoose');
mongoose
  .connect('mongodb://localhost:27017/ser-pro-db')
  .then(() => console.log('Database Connected!'));
module.exports = mongoose;
