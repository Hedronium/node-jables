'use strict'

const fs = require('file-system');
const error = require('./Error');

class Migtration {

	constructor (path) {

		this.path = path;
		this.data = JSON.stringify({

		});

	}

	/**
	 * This creates migration file into the /migration folder
	 * @param  {[string]} full_path [full path name which is generated from users input ]
	 */
	
	create_migration_file(file) {

		let file_path = this.path+file;
		
		fs.writeFile(this.full_path, this.data , { flag: 'w' }, (err) => {

		    if (err) {
		    	error.console_error(err).exit();
		    }
		    
		});

	}



	
}
module.exports = Migtration;