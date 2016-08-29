'use strict'

const fs = require('fs');
const error = require('./Error');

class Setup extends Error {

	constructor(path) {

		this._path = path;
		this._root_path = this._path+'/mysql/';
		this._migration_path = this._root_path+'/migration/'
		this._cache_path = this._root_path+'/cache';
		
		this._config_file = this._root_path+'/config.json';

		this._config_data = JSON.stringify({

			"development": {

				"username": "root",
				"pass": "",
				"database": "",
				"host":"127.0.0.1"
			
			},

			"production": {
				
				"username": "root",
				"pass": "",
				"database": "",
				"host": "127.0.0.1"
			
			}

		});


	}

	/**
	 * Start setup and call the create folder method , this method is just a conding convenstion
	 */
	
	static start_setup() {
		
		this.create_folder();
	}

	/**
	 * Creates folder in the targeted migration file
	 * @return {[type]} [description]
	 */
	create_folder() {

		error.console_running('Creating directtory set...');

		fs.mkdir(this._root_path,777,(err) => {

			if (err) {

				console_error(err).exit();
			}

		  fs.mkdir(this._migration_path,777, (err) => {

		  		if (err) {
		  			console_error(err).exit();
		  		}

		  		fs.mkdir(this._cache_path,777, (err) => {

		  			if (err) {
		  				console_error(err).exit();
		  			}

		  			// start creating file
		  			this.create_file();

		  		});
		  });

		});

	}

	/**
	 * Creates config file, after creating the folders
	 * @return {[type]} [description]
	 */
	create_config_file() {

		console_running('creating configuration file....');
		// creates config file ..
		fs.writeFile(this._config_file, this._config_data , { flag: 'w' }, (err) => {
	

		    if (err) {
		    	console_error(err).exit();
		    }

		});

}

}

module.exports = Setup;