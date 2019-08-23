//changes we want to make
exports.up = function(knex) {
    //create a fruits table
    //define the schema
    return knex.schema.createTable('cars', tbl =>{
      tbl.increments();
      tbl.text('VIN', 128).unique().notNullable();
      tbl.text('Make', 128).notNullable();
      tbl.text('Model', 128).notNullable();
      tbl.text('Mileage', 128).notNullable();
      tbl.text('TitleStatus');
    });
  };
  
  
  //undoes the changes
  exports.down = function(knex) {
    //drop the fruits table
  };