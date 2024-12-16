ServerEvents.recipes(event => {
    event.remove({output:"minecraft:crafting_table"})
    event.custom({
      "type": "farmersdelight:cooking",
      "container": {
        "count": 1,
        "id": "farmersdelight:cooking_pot"
        },
        "cookingtime": 200,
        "experience": 1.0,
        "ingredients": [
          {
            "tag":"minecraft:planks"
          },
          {
            "tag":"minecraft:planks"
          },
          {
            "tag":"minecraft:planks"
          },
          {
            "tag":"minecraft:planks"
          },
          {
            "tag":"minecraft:planks"
          },
          {
            "tag":"minecraft:planks"
          }
        ],
        "recipe_book_tab": "meals",
        "result": {
          "id": "minecraft:crafting_table"
        }
      })  
})