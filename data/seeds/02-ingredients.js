exports.seed = async function (knex) {
  await knex("ingredients").insert([
    { ingredient: "tortilla" },
    { ingredient: "kimchi" },
    { ingredient: "pre-shredded cheese" },
  ]);
};
