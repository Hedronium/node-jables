'use strict'

const fs = require('file-system');
const error = require('./Error');

class Migtration {

	constructor (path) {

		this.path = path;
		this.file_path = '';
		this.data = "";

	}

	/**
	 * This creates migration file into the /migration folder
	 * @param  {[string]} full_path [full path name which is generated from users input ]
	 */
	
	create_migration_file(file,table) {

		this.file_path = this.path+file;
		this.data = JSON.stringify({

			"table": table
		},null,4);
		
		fs.writeFile(this.file_path, this.data , { flag: 'w' }, (err) => {

		    if (err) {
		    	error.console_error(err).exit();
		    }
		    
		});

	}



	
}
module.exports = Migtration;