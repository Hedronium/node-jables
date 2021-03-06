#!/usr/bin/env node
'use strict'
const program    = require('commander');
const Process    = require('./lib/Process');
const path  = process.cwd();

const ObProcess = new Process(path);

program
   .version('0.1.0')
   .usage('<command>')

program
   .command('setup')
   .description('Setup files for writing migration')
   .action(() => {
      
         ObProcess.setup_start();
   });


program
   .command('make:migration [file_name]')
   .description('Creates a json file into migration folder')
   .action((file_name) => {
            
      ObProcess.make_migration(file_name);

   });

program
   .command('migrate')
   .description('Read schemas from json and then creates json')
   .action(() => {
      
         ObProcess.migrate();
   });


program
   .command('migrate:refresh')
   .description('Deletes current migration and reload it again')
   .action(() => {
         
   });

program
   .command('migration:rollback')
   .description('To rollback the latest migration operation, you may use the rollback command. This command rolls back the last "batch" of migrations, which may include multiple migration files')
   .action(() => {
         
   });

program
   .command('migration:reset')
   .description('The migrate:reset command will roll back all of your application\'s migrations')
   .action(() => {
         
   });


program
   .command('migration:undo')
   .description('The migrate:reset command will roll back all of your application\'s migrations')
   .action(() => {
         
   });

program
   .command('cache:clear')
   .description('The cache:clear command clear cache files.')
   .action(() => {
         
   });

program.parse(process.argv);
