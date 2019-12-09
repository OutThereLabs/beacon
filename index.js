var boomcatch = require('boomcatch');

boomcatch.listen({
	log: console,
	port: 8080,
	fwdPort: 9125
});
