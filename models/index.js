const { Sequelize } = require("sequelize");
require("dotenv").config();

const sequelize = new Sequelize({
	database: process.env.DATABASE_NAME,
	username: process.env.DATABASE_USER,
	password: process.env.DATABASE_PASSWORD,
	host: process.env.DATABASE_HOST,
	port: 5432,
	dialect: "postgres",
	dialectOptions: {
		// ssl: {
		// 	require: true,
		// 	rejectUnauthorized: false, // <<<<<<< YOU NEED THIS
		// },
	},
	// logging: false,
});

sequelize
	.authenticate()
	.then(() =>
		console.log(
			"DATABASE ",
			process.env.DATABASE_NAME.toUpperCase(),
			" CONNECTED"
		)
	)
	.catch((err) => console.log("cannot connect" + err));

const db = {};
db.Sequelize = Sequelize;
db.sequelize = sequelize;
db.user = require("./user")(sequelize, Sequelize);
db.topic = require("./topic")(sequelize, Sequelize);
db.category = require("./category")(sequelize, Sequelize);

//one to one
db.user.hasOne(db.topic, { name: "owner" });
db.topic.belongsTo(db.user);

//One to Many
db.category.hasMany(db.topic);
db.topic.belongsTo(db.category);

module.exports = db;
