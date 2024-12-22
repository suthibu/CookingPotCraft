ServerEvents.recipes(event => {
event.remove({output:`mekanism:energized_smelter`}) //電動精錬機
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
event.remove({output:"mekanism:robit"}) //ロビット
event.custom({
"type": "ae2:transform",
  "ingredients": [
    {
      "item": "mekanism:alloy_atomic"
    },
    {
      "item": "mekanism:ingot_refined_obsidian"
    },
    {
      "item": "mekanism:energy_tablet"
    },
    {
      "item": "mekanism:ingot_steel"
    },
    {
      "tag": "mekanism:personal_storage"
    }
  ],
  "result": {
    "id": "mekanism:robit"
  }
})
event.remove({output:"mekanism:basic_smelting_factory"}) //精錬ファクトリー
event.custom({
    "type": "farmersdelight:cooking",
    "container": {
      "count": 1,
      "id": "mekanism:energized_smelter"
      },
      "cookingtime": 200,
      "experience": 1.0,
      "ingredients": [
        {
          "item": "minecraft:redstone"
        },
        {
          "item": "mekanism:basic_control_circuit"
        },
        {
          "item": "minecraft:redstone"
        },
        {
          "item": "minecraft:iron_ingot"
        },
        {
          "item": "mekanism:basic_control_circuit"
        },
        {
          "item": "minecraft:iron_ingot"
        },
      ],
      "recipe_book_tab": "meals",
      "result": {
        "id": "mekanism:basic_smelting_factory"
      }
})
event.remove({output:"mekanism:advanced_smelting_factory"})
event.custom({
    "type": "farmersdelight:cooking",
    "container": {
      "count": 1,
      "id": "mekanism:basic_smelting_factory"
      },
      "cookingtime": 200,
      "experience": 1.0,
      "ingredients": [
        {
          "item": "mekanism:alloy_infused"
        },
        {
          "item": "mekanism:advanced_control_circuit"
        },
        {
          "item": "mekanism:alloy_infused"
        },
        {
          "item": "mekanism:ingot_osmium"
        },
        {
          "item": "mekanism:advanced_control_circuit"
        },
        {
          "item": "mekanism:ingot_osmium"
        },
      ],
      "recipe_book_tab": "meals",
      "result": {
        "id": "mekanism:advanced_smelting_factory"
      }
})
event.remove({output:"mekanism:elite_smelting_factory"})
event.custom({
    "type": "farmersdelight:cooking",
    "container": {
      "count": 1,
      "id": "mekanism:advanced_smelting_factory"
      },
      "cookingtime": 200,
      "experience": 1.0,
      "ingredients": [
        {
          "item": "mekanism:alloy_reinforced"
        },
        {
          "item": "mekanism:elite_control_circuit"
        },
        {
          "item": "mekanism:alloy_reinforced"
        },
        {
          "item": "minecraft:gold_ingot"
        },
        {
          "item": "mekanism:elite_control_circuit"
        },
        {
          "item": "minecraft:gold_ingot"
        },
      ],
      "recipe_book_tab": "meals",
      "result": {
        "id": "mekanism:elite_smelting_factory"
      }
})
event.remove({output:"mekanism:ultimate_smelting_factory"})
event.custom({
    "type": "farmersdelight:cooking",
    "container": {
      "count": 1,
      "id": "mekanism:elite_smelting_factory"
      },
      "cookingtime": 200,
      "experience": 1.0,
      "ingredients": [
        {
          "item": "mekanism:alloy_atomic"
        },
        {
          "item": "mekanism:ultimate_control_circuit"
        },
        {
          "item": "mekanism:alloy_atomic"
        },
        {
          "item": "minecraft:diamond"
        },
        {
          "item": "mekanism:ultimate_control_circuit"
        },
        {
          "item": "minecraft:diamond"
        },
      ],
      "recipe_book_tab": "meals",
      "result": {
        "id": "mekanism:ultimate_smelting_factory"
      }
})
event.remove({output:"mekanism:basic_enriching_factory"}) //濃縮ファクトリー
event.custom({
    "type": "farmersdelight:cooking",
    "container": {
      "count": 1,
      "id": "mekanism:enrichment_chamber"
      },
      "cookingtime": 200,
      "experience": 1.0,
      "ingredients": [
        {
          "item": "minecraft:redstone"
        },
        {
          "item": "mekanism:basic_control_circuit"
        },
        {
          "item": "minecraft:iron_ingot"
        },
        {
          "item": "minecraft:redstone"
        },
        {
          "item": "mekanism:basic_control_circuit"
        },
        {
          "item": "minecraft:iron_ingot"
        },
      ],
      "recipe_book_tab": "meals",
      "result": {
        "id": "mekanism:basic_enriching_factory"
      }
})
event.remove({output:"mekanism:advanced_enriching_factory"})
event.custom({
    "type": "farmersdelight:cooking",
    "container": {
      "count": 1,
      "id": "mekanism:basic_enriching_factory"
      },
      "cookingtime": 200,
      "experience": 1.0,
      "ingredients": [
        {
          "item": "mekanism:alloy_infused"
        },
        {
          "item": "mekanism:advanced_control_circuit"
        },
        {
          "item": "mekanism:alloy_infused"
        },
        {
          "item": "mekanism:ingot_osmium"
        },
        {
          "item": "mekanism:advanced_control_circuit"
        },
        {
          "item": "mekanism:ingot_osmium"
        },
      ],
      "recipe_book_tab": "meals",
      "result": {
        "id": "mekanism:advanced_enriching_factory"
      }
})
event.remove({output:"mekanism:elite_enriching_factory"})
event.custom({
    "type": "farmersdelight:cooking",
    "container": {
      "count": 1,
      "id": "mekanism:advanced_enriching_factory"
      },
      "cookingtime": 200,
      "experience": 1.0,
      "ingredients": [
        {
          "item": "mekanism:alloy_reinforced"
        },
        {
          "item": "mekanism:elite_control_circuit"
        },
        {
          "item": "mekanism:alloy_reinforced"
        },
        {
          "item": "minecraft:gold_ingot"
        },
        {
          "item": "mekanism:elite_control_circuit"
        },
        {
          "item": "minecraft:gold_ingot"
        },
      ],
      "recipe_book_tab": "meals",
      "result": {
        "id": "mekanism:elite_enriching_factory"
      }
})
event.remove({output:"mekanism:ultimate_enriching_factory"})
event.custom({
    "type": "farmersdelight:cooking",
    "container": {
      "count": 1,
      "id": "mekanism:elite_enriching_factory"
      },
      "cookingtime": 200,
      "experience": 1.0,
      "ingredients": [
        {
          "item": "mekanism:alloy_atomic"
        },
        {
          "item": "mekanism:ultimate_control_circuit"
        },
        {
          "item": "mekanism:alloy_atomic"
        },
        {
          "item": "minecraft:diamond"
        },
        {
          "item": "mekanism:ultimate_control_circuit"
        },
        {
          "item": "minecraft:diamond"
        },
      ],
      "recipe_book_tab": "meals",
      "result": {
        "id": "mekanism:ultimate_enriching_factory"
      }
})
event.remove({output:"mekanism:enrichment_chamber"})
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
          "item": "minecraft:redstone"
        },
        {
          "item": "mekanism:basic_control_circuit"
        },
        {
          "item": "minecraft:redstone"
        },
        {
          "item": "minecraft:iron_ingot"
        },
        {
          "item": "mekanism:basic_control_circuit"
        },
        {
          "item": "minecraft:iron_ingot"
        },
      ],
      "recipe_book_tab": "meals",
      "result": {
        "id": "mekanism:enrichment_chamber"
      }
})
})
