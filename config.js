module.exports = {
	mongo: {
		username: process.env.MONGO_USER,
		password: process.env.MONGO_PASSWORD,
		url: process.env.MONGO_URL,
		database: 'lexlunch'
	},
	server: {
		hostname: 'localhost',
		port: 1337
	}
};