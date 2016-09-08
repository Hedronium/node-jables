'use strict'
var error = require('./Error.js');

class Cache {

	constructor (path) {

		this.cache_path = path+'/mysql/cache/';

	}

	/**
	 * This creates cache into the cache/ folder
	 */
	create_new_cache() {


	}

	/**
	 * Update cache data ..
	 */
	update_cache() {


	}

	/**
	* Deletes one cache folder..
	*/
	delete_one_cache() {

	}
	/**
	* Delete full cache
	*/
	delete_full_cache() {

	}

}

module.exports = Cache;
