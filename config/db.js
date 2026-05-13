const mongoose = require("mongoose");

const connectToDB = async () => {
  await mongoose
    .connect(`${process.env.MONGODB_URL}`)
    .then(() => {
      console.log(`MONGODB connected Successfully`);
    })
    .catch((err) => {
      console.log("Something Went Wrong in the DataBase : ", err);
    });
};

module.exports = connectToDB;
