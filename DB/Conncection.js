const mongoose = require('mongoose');

const URI ="mongodb+srv://UTD:utd1234@clusterutd.0enxb.mongodb.net/elpapajonh?retryWrites=true&w=majority";

const connectDB = async () => {
  await mongoose.connect(URI, {
    useUnifiedTopology: true,
    useNewUrlParser: true
  });
  console.log('conexión exitosa');
};

module.exports = connectDB;
