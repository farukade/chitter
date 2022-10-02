const { constants } = require("./constants");
const { utilities } = require("../utils/utils");
const { handleBadRequests, handleError, handleSuccess } = constants;
const { getToken } = utilities;
const db = require("../models/index");
const bcrypt = require("bcryptjs");
const users = db.user;

exports.userController = {
	signup: async (req, res) => {
		try {
			const { email, username } = req.body;
			const existingUser = await users.findOne({
				where: { email },
			});
			if (existingUser)
				return handleBadRequests(
					res,
					"user with " + email + " already signed up"
				);
			const password = bcrypt.hashSync(req.body.password, 10);
			const user = await users.create({
				email,
				username,
				password,
			});
			handleSuccess(res, "signup success", user, true);
		} catch (error) {
			handleError(res, error);
		}
	},
	signin: async (req, res) => {
		try {
			const { email, password } = req.body;

			const user = await users.findOne({
				where: { email },
			});

			if (!user) return handleBadRequests(res, "invalid credentials");

			let isValidPassword = bcrypt.compareSync(password, user.password);
			if (!isValidPassword)
				return handleBadRequests(res, "invalid credentials");
			let token = getToken(user);
			handleSuccess(res, "sign in success", token);
		} catch (error) {
			handleError(res, error);
		}
	},
};
