exports.up = async function (knex) {
  await knex.schema.createTable("recipes", (table) => {
    table.increments("Id");
    table.text("name").notNull().unique();
    table.text("ingredients").notNull();
    table.float("quantity").notNull();
    table.text("instructions").notNull();
  });

  await knex.schema.createTable("ingredients", (table) => {
    table.increments("Id");
    table.text("ingredient").notNull().unique();
  });
};

exports.down = async function (knex) {
  await knex.schema.dropTableIfExists("ingredients");
  await knex.schema.dropTableIfExists("recipes");
};