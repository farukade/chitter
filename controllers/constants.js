const { log } = console;
exports.constants = {
	handleError: (res, error) => {
		log(error);
		return res.status(400).send({
			success: false,
			message: error.message || "an error occurred",
		});
	},
	handleBadRequests: (res, message = "bad request") => {
		return res.status(400).send({
			success: false,
			message,
		});
	},
	handleSuccess: (res, message, result, isCreated, paging) => {
		let code;
		switch (isCreated) {
			case true:
				code = 201;
				break;

			default:
				code = 200;
				break;
		}

		return res.status(code).send({
			success: true,
			message,
			result,
			paging,
		});
	},
};
