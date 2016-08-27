const fs = require('fs');
const cls = require('cli-color');


export default class  Error {

	error_success(text) {

		console.log(cls.green(text));
		return this;
	
	}

	error_running(text) {

		console.log(cls.blue(text));
		return this;
	}

	error_warning(text) {

		console.log(cls.yellow(text));
		return this;
	}

	error_danger() {

		console.log(cls.green(text));
		return this;
	}

	exit() {

		process.exit();
	
	}

}