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

}

module.exports = Cache;