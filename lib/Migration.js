'use strict'

const fs = require('file-system');
const error = require('./Error');
const json_lint = require('json-lint');

class Migtration {

	constructor (path) {

		this.path = path;
		this.file_path = '';
		this.data = "";
		this.migration_path = this.path+'/mysql/migration/';
		this.error = new error;

	}

	/**
	 * This creates migration file into the /migration folder
	 * @param  {[string]} full_path [full path name which is generated from users input ]
	 */
	
	create_migration_file(file,table,file_name) {

		this.file_path = this.path+file;
		this.data = JSON.stringify({
			"table": table
		},null,4);
		
		fs.writeFile(this.file_path, this.data , { flag: 'w' }, (err) => {

		    if (err) {
		    	error.console_error(err).exit();
		    }

		    this.error.console_success('Created named '+file_name+'.json in migration folder.').exit();

		});

	}

	/**
	 * Generate migration file...
	 */
	generate_migration() {



	}
		
	/**
	 * this validate json syntax , in the migration file, throws an error if there are any syntax error is found
	*/
	
	validate_json_syntax() {

		fs.readdir(this.migration_path,(err,files) => {
			
			let migration_path = this.migration_path;

			files.forEach(function(data){

                let lint = json_lint(migration_path+data+'.json');
                	
                	if (lint.error) {
                		let error_message = 'Json Syntax error: '+lint.error+' line number: ' + lint.line + ' ' + lint.character;
                		this.error.console_error(error_message).exit();
                	}

			});

		});

	}

	/**
	 * this things validate json schema..
	 */
	validate_json_schema() {

		

	}

}

module.exports = Migtration;