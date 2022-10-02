module.exports = (sequelize, dataType) => {
	const topic = sequelize.define("topic", {
		title: {
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
			defaultValue: "anonymous",
		},
		isClosed: {
			type: dataType.BOOLEAN,
			allowNull: false,
			defaultValue: false,
		},
	});
	return topic;
};
