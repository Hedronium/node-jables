const fs = require('fs');


export default class Setup extends Error {

	constructor(path) {

		this._path = path;
		this._config_data = JSON.stringify({

			"development": [

				"username": "root",
				"pass": "",
				"database": "",
				"host":"127.0.0.1"
			
			],

			"production": [
				
				"username": "root",
				"pass": "",
				"database": "",
				"host": "127.0.0.1"
			
			]

		});


	}

	create_folder () {

		fs.mkdir(this._path,0777,function(err){

			if (err) {


			}

		});

	}

	create_file() {

		fs.writeFile((self._path + '/config.json'), json , { flag: 'w' }, function (err) {
		    
		    if (err) {
		    	throw console.log(cls.red(err));
		    }


		});
	}


}