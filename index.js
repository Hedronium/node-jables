#!/usr/bin/env node
var program  = require('commander');

program
   .version('0.1.0')
   .usage('<command>')

program
   .command('setup')
   .description('Setup files for writing migration');
program
   .command('create')
   .description('Creates a json file');

program
   .command('migrate')
   .description('Read schemas from json and then creates json');

program
   .command('migrate:undo')
   .description('creates a json file');

program
   .command('migrate:refresh')
   .description('creates a json file');


program
   .arguments('<cmd>')
   .action(function(cmd) {
   
//       lib.get(cmd);
   });

program.parse(process.argv);
