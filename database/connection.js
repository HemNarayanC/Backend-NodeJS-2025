//we will be writing the code/logic for database connection

// const sequelize = require("sequelize");

const { Sequelize, DataTypes } = require("sequelize");
const bookModel = require("./models/book.model");
/* const bookModel = require("./models/book.model.js");
 bookModel(); */

//same as above but extra line of code
/*const sequelize = require("sequelize");
const sequelize = sequelize.Sequelize;
const DataTypes = sequelize.DataTypes;*/

const sequelize = new Sequelize(
  "postgresql://postgres.rbcpnignllcorrossaxt:Ra1n6037Colors@8520@aws-0-us-east-2.pooler.supabase.com:6543/postgres"
); //object instantiation

sequelize
  .authenticate()
  .then(() => {
    console.log("Authenticated Successfully");
  })
  .catch((err) => {
    console.log("Error" + err);
  });

const db = {};
db.Sequelize = Sequelize;
db.sequelize = sequelize;
db.books = require("./models/book.model.js")(sequelize, DataTypes); //envoking the function
db.users = require("./models/user.model.js")(sequelize, DataTypes);
db.products = require("./models/product.model.js")(sequelize, DataTypes);

sequelize.sync({force: false})
.then(()=>{
    console.log("migration done...")
})

module.exports = db;
