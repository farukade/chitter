module.exports = (sequelize, dataType) => {
	const user = sequelize.define("user", {
		username: {
			type: dataType.STRING,
			allowNull: false,
		},
		email: {
			type: dataType.STRING,
			unique: true,
			allowNull: false,
		},
		password: {
			type: dataType.STRING,
			allowNull: false,
		},
		isActivated: {
			type: dataType.BOOLEAN,
			allowNull: false,
			defaultValue: false,
		},
		isAnonymous: {
			type: dataType.BOOLEAN,
			allowNull: false,
			defaultValue: false,
		},
		userType: {
			type: dataType.STRING,
			allowNull: false,
			defaultValue: "user",
		},
	});
	return user;
};
