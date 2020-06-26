exports.seed = async function (knex) {
  await knex("recipes").insert([
    {
      name: "Kimchi Quesadilla",
      ingredients: "Tortilla, Kimchi, Pre-shredded Cheese",
      quantity: 1,
      instructions:
        "Heat Skillet. Add tortilla to warm for a min; flip to other side. Add cheese, kimchi, and cheese in that order. Add another tortilla on top and flip. Cook for a minute, then plate and serve",
    },
  ]);
};
