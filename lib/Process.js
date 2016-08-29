'use strict'

const error = require('./Error.js');
const fs = require('fs');

class Process extends error {


	// proccess while user hits setup command
	setup(path) {

		var Setup = require('./Setup.js');
		Setup = new Setup(path);
		error.console_running('Setting up migration folder........');
		Setup.start_setup();
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