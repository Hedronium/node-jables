'use strict'

const error 	= require('./Error.js');
const Setup 	= require('./Setup.js');
const Migration = require('./Migration.js');
const Cache 	= require('./Cache.js');

class Process {

	constructor (path) {

		this.path 		= path;
		this.error 		= new error();
		this.setup 		= new Setup(this.path);
		this.migration  = new Migration(this.path);
		this.cache 		= new Cache(this.path);

	}


	// proccess while user hits setup command
	setup_start() {

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
            var data = file_name.replace('_table','');
            var table = data.replace('create_','');

			file = '/mysql/migration/create_'+ file_name +'_'+day+'_'+hour+'_'+minutes+'_'+seconds+'_table.json';

			// main proccessing method call, which will create file and put demo data into the file
			this.migration.create_migration_file(file,table,file_name);
	}

	/**
	 * Migrate current json schema
	 */
	migrate () {

		this.migration.validate_json_syntax();

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

	/**
	 * Clear cache
	 */
	cache_clear() {


	}

}

module.exports = Process;
