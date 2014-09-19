module.exports = {
	mongo: {
		username: process.env.MONGO_USER || "",
		password: process.env.MONGO_PASSWORD || "",
		url: process.env.MONGO_URL || 'localhost',
		database: 'lexlunch'
	},
	server: {
		hostname: 'localhost',
		port: process.env.PORT || 1337
	}
};
