'use strict'

const error = require('./Error.js');
const Setup = require('./Setup.js');
const Migration = require('./Migration.js');

class Process {

	constructor (path) {

		this.path 		= path;
		this.error 		= new error();
		this.setup 		= new Setup(this.path);
		this.migration  = new Migration(this.path);
	}


	// proccess while user hits setup command
	setup() {

		this.error.console_running('Setting up migration folder...');
		this.setup.start_setup();
	}

	/**
	 * Create migration a new migration file
	 */
	make_migration(file_name) {

	      if ((file_name.substring(0,7) != 'create_' || file_name.slice(-6) != '_table')) {
	         
	        	this.error.console_error('migration command error!').exit();
	       	
	       	}

			let file 	= '';
			let day 	= new Date().getDay();
			let hour 	= new Date().getDate();
			let minutes = new Date().getMinutes();
			let seconds = new Date().getSeconds();
	
			file = '/mysql/migration/create_'+ file_name +day+'_'+hour+'_'+minutes+'_'+seconds+'_table.json';
			
			// main proccessing method call
			this.migration.create_migration_file(file);
	}

	/**
	 * Migrate current json schema
	 */
	migrate () {


	}

	/**
	 *   Rebuild the changed mysql schema
	 */
	migrate_refresh() {


	}

	/**
	 *  Rollback into previous changes
	 */
	migrate_rollback() {


	}

	/**
	 * Reset changes in migration file
	 */
	migrate_reset() {


	}

	/**
	 * Create migration a new migration file
	 */
	migrate_undo() {


	}

}

module.exports = Process;
