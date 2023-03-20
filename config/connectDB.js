const mongoose = require("mongoose");
require("dotenv").config();

const connectDB = async () => {
    try {
      const connect = mongoose.connect(process.env.DATABASE_URL, {
        useNewUrlParser: true,
        useUnifiedTopology: true,
      });
      console.log(`MongoDB is Connected ;) `);
    } catch (err) {
      console.error(err);
      process.exit(1);
    }
  };

  module.exports = connectDB;