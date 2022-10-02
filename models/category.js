module.exports = (sequelize, dataType) => {
	const category = sequelize.define("category", {
		name: {
			type: dataType.STRING,
			allowNull: false,
		},
		description: {
			type: dataType.STRING,
			allowNull: false,
		},
		createdBy: {
			type: dataType.STRING,
			allowNull: false,
			defaultValue: "admin",
		},
	});
	return category;
};
