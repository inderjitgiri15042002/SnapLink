require("dotenv").config();
const app = require("./app.js");
const connectToDB = require("./config/db.js");

const PORT = process.env.PORT || 4000;

connectToDB();

app.listen(PORT, () => {
  console.log(`Server Started at PORT ${PORT}`);
});
