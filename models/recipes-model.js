const db = require("../data/config");

module.exports = {
  getRecipes,
  getShoppingList,
  getInstructions,
};

function getRecipes() {
  return db("recipes");
}

function getShoppingList(id) {
  return db("recipes")
    .where({ id })
    .select("recipes.ingredients", "recipes.quantity");
}

function getInstructions(id) {
  return db("recipes").where({ id }).select("recipes.instructions");
}
