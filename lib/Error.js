'use strict'

const cls = require('cli-color');

class  Error {

	constructor() {

	}

	console_success(text) {

		console.log(cls.green(text));
		return this;
	
	}

	console_running(text) {

		console.log(cls.blue(text));
		return this;
	}

	console_warning(text) {

		console.log(cls.yellow(text));
		return this;
	}

	console_error(text) {

		console.log(cls.red(text));
		return this;
	}

	exit() {

		process.exit();	
	
	}

}

module.exports = Error;