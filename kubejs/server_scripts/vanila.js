ServerEvents.recipes(event => {
    event.remove({output:"minecraft:crafting_table"}) //作業台
    event.custom({
      "type": "farmersdelight:cooking",
      "container": {
        "count": 1,
        "id": "farmersdelight:cooking_pot"
        },
        "cookingtime": 0,
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
ServerEvents.recipes(event => {
  /** 
   * FarmersDelightのポットでレシピを追加する
   * @param {String} output           完成品
   * @param {String[]} inputs         必要なアイテム
   * @param {String?} containerItem    容器
   */
  let potRecipe = (output, inputs, containerItem) => {
      event.remove({ output: output })

      if (containerItem) {
          event.custom({
              "type": "farmersdelight:cooking",
              "container": {
                  "count": 1,
                  "id": containerItem
              },
              "cookingtime": 0,
              "experience": 1.0,
              "ingredients": inputs.map(item => {
                  return { "item": item }
              }
              ),
              "recipe_book_tab": "meals",
              "result": {
                  "id": output
              }
          })
      } else {
          event.custom({
              "type": "farmersdelight:cooking",
              "cookingtime": 0,
              "experience": 1.0,
              "ingredients": inputs.map(item => {
                  return { "item": item }
              }
              ),
              "recipe_book_tab": "meals",
              "result": {
                  "id": output
              }
          })
      }
  }
potRecipe("minecraft:netherite_upgrade_smithing_template",["minecraft:diamond","minecraft:diamond","minecraft:diamond","minecraft:netherrack","minecraft:netherrack","minecraft:netherrack"],"minecraft:netherite_ingot") //ネザライト強化の鍛治型
})