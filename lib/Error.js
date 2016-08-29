'use strict'

const cls = require('cli-color');

class  Error {

	constructor() {

	}

	static console_success(text) {

		console.log(cls.green(text));
		return this;
	
	}

	static console_running(text) {

		console.log(cls.blue(text));
		return this;
	}

	static console_warning(text) {

		console.log(cls.yellow(text));
		return this;
	}

	static console_error(text) {

		console.log(cls.green(text));
		return this;
	}

	static exit() {

		process.exit();	
	
	}

}

module.exports = Error;