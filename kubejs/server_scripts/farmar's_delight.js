ServerEvents.recipes(event => {
    event.remove({output:"farmersdelight:cooking_pot"})
    event.custom({
      "type": "farmersdelight:cooking",
      "container": {
        "count": 1,
        "id": "minecraft:water_bucket"
        },
        "cookingtime": 200,
        "experience": 1.0,
        "ingredients": [
          {
            "item":"minecraft:brick"
          },
          {
            "item":"minecraft:wooden_shovel"
          },
          {
            "item":"minecraft:brick"
          },
          {
            "item":"minecraft:iron_ingot"
          },
          {
            "item":"minecraft:iron_ingot"
          },
          {
            "item":"minecraft:iron_ingot"
          }
        ],
        "recipe_book_tab": "meals",
        "result": {
          "id": "farmersdelight:cooking_pot"
        }
      })  
})