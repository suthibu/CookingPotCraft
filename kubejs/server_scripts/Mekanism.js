ServerEvents.recipes(event => {
event.remove({output:`mekanism:energized_smelter`})
event.custom({
    "type": "farmersdelight:cooking",
    "container": {
      "count": 1,
      "id": "mekanism:steel_casing"
      },
      "cookingtime": 200,
      "experience": 1.0,
      "ingredients": [
        {
          "tag": "c:glass_blocks/cheap"
        },
        {
          "item": "minecraft:redstone"
        },
        {
          "item": "mekanism:basic_control_circuit"
        },
      ],
      "recipe_book_tab": "meals",
      "result": {
        "id": "mekanism:energized_smelter"
      }
    })
})
