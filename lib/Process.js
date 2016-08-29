'use strict'

const Error = require('./Error.js');
const Setup = require('./Setup');
const fs = require('fs');

class Process extends Error {


	// proccess while user hits setup command
	setup(path) {

		Error.console_running('Setting up migration folder........');
		Setup.create_folder();
	}

	/**
	 * Create migration a new migration file
	 */
	make_migration() {

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