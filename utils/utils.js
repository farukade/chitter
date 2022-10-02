const jwt = require("jsonwebtoken");
const secret = process.env.SECRET;

exports.utilities = {
	removeWhiteSpaces: (str) => {
		return str.replace(/\s/g, "").toLowerCase();
	},
	convertToSlug: (str) => {
		str = str.trim();
		return str.replace(/\s/g, "-").toLowerCase();
	},
	getPayload: (user) => {
		const { username, userType, id } = user;
		let payload = {
			id,
			username,
			userType,
		};
		return payload;
	},
	getToken: (user) => {
		let payload = this.utilities.getPayload(user);
		let token = jwt.sign(payload, secret, {
			expiresIn: 300000,
		});
		return {
			token,
			payload,
		};
	},
};
