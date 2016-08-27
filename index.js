#!/usr/bin/env node
const program  = require('commander');


program
   .version('0.1.0')
   .usage('<command>')

program
   .command('setup')
   .description('Setup files for writing migration')
   .action(function() {
         
         console.log();

   });


program
   .command('make:migration [option]')
   .description('Creates a json file')
   .action(function(option) {
         
         console.log(option);

   });

program
   .command('migrate')
   .description('Read schemas from json and then creates json')
   .action(function() {
         


   });


program
   .command('migrate:refresh')
   .description('Deletes current migration and reload it again')
   .action(function() {
         

   });

program
   .command('migration:rollback')
   .description('To rollback the latest migration operation, you may use the rollback command. This command rolls back the last "batch" of migrations, which may include multiple migration files')
   .action(function() {
         
         console.log();

   });
program
   .command('migration:reset')
   .description('The migrate:reset command will roll back all of your application\'s migrations')
   .action(function() {
         
         console.log();

   });

/*

program
   .arguments('<cmd>')
   .action(function(cmd) {
      
      switch (cmd) {

         case 'setup':
            break;
         case 'create':
            break;
         case 'make:migration':
            break;
         case 'migrate':
            break;
         case 'migration:refresh':
            break;
         case 'migration:rollback':
            break;
         case 'migration:rest':
            break;
         default:
            console.log('wrong command');
            break;

      }      

   });
 */

program.parse(process.argv);
