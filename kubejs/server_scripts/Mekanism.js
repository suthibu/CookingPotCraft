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
event.remove({output:"mekanism:basic_crushing_factory"}) //粉砕ファクトリー
event.custom({
    "type": "farmersdelight:cooking",
    "container": {
      "count": 1,
      "id": "mekanism:crusher"
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
        "id": "mekanism:basic_crushing_factory"
      }
})
event.remove({output:"mekanism:advanced_crushing_factory"})
event.custom({
    "type": "farmersdelight:cooking",
    "container": {
      "count": 1,
      "id": "mekanism:basic_crushing_factory"
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
        "id": "mekanism:advanced_crushing_factory"
      }
})
event.remove({output:"mekanism:elite_crushing_factory"})
event.custom({
    "type": "farmersdelight:cooking",
    "container": {
      "count": 1,
      "id": "mekanism:advanced_crushing_factory"
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
        "id": "mekanism:elite_crushing_factory"
      }
})
event.remove({output:"mekanism:ultimate_crushing_factory"})
event.custom({
    "type": "farmersdelight:cooking",
    "container": {
      "count": 1,
      "id": "mekanism:elite_crushing_factory"
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
        "id": "mekanism:ultimate_crushing_factory"
      }
})
event.remove({output:"mekanism:crusher"})
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
        "id": "mekanism:crusher"
      }
})
event.remove({output:"mekanism:basic_compressing_factory"}) //圧縮ファクトリー
event.custom({
    "type": "farmersdelight:cooking",
    "container": {
      "count": 1,
      "id": "mekanism:osmium_compressor"
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
        "id": "mekanism:basic_compressing_factory"
      }
})
event.remove({output:"mekanism:advanced_compressing_factory"})
event.custom({
    "type": "farmersdelight:cooking",
    "container": {
      "count": 1,
      "id": "mekanism:basic_compressing_factory"
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
        "id": "mekanism:advanced_compressing_factory"
      }
})
event.remove({output:"mekanism:elite_compressing_factory"})
event.custom({
    "type": "farmersdelight:cooking",
    "container": {
      "count": 1,
      "id": "mekanism:advanced_compressing_factory"
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
        "id": "mekanism:elite_compressing_factory"
      }
})
event.remove({output:"mekanism:ultimate_compressing_factory"})
event.custom({
    "type": "farmersdelight:cooking",
    "container": {
      "count": 1,
      "id": "mekanism:elite_compressing_factory"
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
        "id": "mekanism:ultimate_compressing_factory"
      }
})
event.remove({output:"mekanism:osmium_compressor"})
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
        "id": "mekanism:osmium_compressor"
      }
})
event.remove({output:"mekanism:basic_combining_factory"}) //結合ファクトリー
event.custom({
    "type": "farmersdelight:cooking",
    "container": {
      "count": 1,
      "id": "mekanism:combiner"
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
        "id": "mekanism:basic_combining_factory"
      }
})
event.remove({output:"mekanism:advanced_combining_factory"})
event.custom({
    "type": "farmersdelight:cooking",
    "container": {
      "count": 1,
      "id": "mekanism:basic_combining_factory"
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
        "id": "mekanism:advanced_combining_factory"
      }
})
event.remove({output:"mekanism:elite_combining_factory"})
event.custom({
    "type": "farmersdelight:cooking",
    "container": {
      "count": 1,
      "id": "mekanism:advanced_combining_factory"
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
        "id": "mekanism:elite_combining_factory"
      }
})
event.remove({output:"mekanism:ultimate_combining_factory"})
event.custom({
    "type": "farmersdelight:cooking",
    "container": {
      "count": 1,
      "id": "mekanism:elite_combining_factory"
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
        "id": "mekanism:ultimate_combining_factory"
      }
})
event.remove({output:"mekanism:combiner"})
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
          "item": "mekanism:alloy_reinforced"
        },
        {
          "item": "mekanism:elite_control_circuit"
        },
        {
          "item": "mekanism:alloy_reinforced"
        },
        {
          "tag": "minecraft:stone_tool_materials"
        },
        {
          "item": "mekanism:elite_control_circuit"
        },
        {
          "tag": "minecraft:stone_tool_materials"
        },
      ],
      "recipe_book_tab": "meals",
      "result": {
        "id": "mekanism:combiner"
      }
})
event.remove({output:"mekanism:basic_purifying_factory"}) //圧縮ファクトリー
event.custom({
    "type": "farmersdelight:cooking",
    "container": {
      "count": 1,
      "id": "mekanism:purification_chamber"
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
        "id": "mekanism:basic_purifying_factory"
      }
})
event.remove({output:"mekanism:advanced_purifying_factory"})
event.custom({
    "type": "farmersdelight:cooking",
    "container": {
      "count": 1,
      "id": "mekanism:basic_purifying_factory"
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
        "id": "mekanism:advanced_purifying_factory"
      }
})
event.remove({output:"mekanism:elite_purifying_factory"})
event.custom({
    "type": "farmersdelight:cooking",
    "container": {
      "count": 1,
      "id": "mekanism:advanced_purifying_factory"
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
        "id": "mekanism:elite_purifying_factory"
      }
})
event.remove({output:"mekanism:ultimate_purifying_factory"})
event.custom({
    "type": "farmersdelight:cooking",
    "container": {
      "count": 1,
      "id": "mekanism:elite_purifying_factory"
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
        "id": "mekanism:ultimate_purifying_factory"
      }
})
event.remove({output:"mekanism:purification_chamber"})
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
        "id": "mekanism:purification_chamber"
      }
})
event.remove({output:"mekanism:basic_sawing_factory"}) //製材ファクトリー
event.custom({
    "type": "farmersdelight:cooking",
    "container": {
      "count": 1,
      "id": "mekanism:precision_sawmill"
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
        "id": "mekanism:basic_sawing_factory"
      }
})
event.remove({output:"mekanism:advanced_sawing_factory"})
event.custom({
    "type": "farmersdelight:cooking",
    "container": {
      "count": 1,
      "id": "mekanism:basic_sawing_factory"
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
        "id": "mekanism:advanced_sawing_factory"
      }
})
event.remove({output:"mekanism:elite_sawing_factory"})
event.custom({
    "type": "farmersdelight:cooking",
    "container": {
      "count": 1,
      "id": "mekanism:advanced_sawing_factory"
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
        "id": "mekanism:elite_sawing_factory"
      }
})
event.remove({output:"mekanism:ultimate_sawing_factory"})
event.custom({
    "type": "farmersdelight:cooking",
    "container": {
      "count": 1,
      "id": "mekanism:elite_sawing_factory"
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
        "id": "mekanism:ultimate_sawing_factory"
      }
})
event.remove({output:"mekanism:precision_sawmill"})
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
          "item": "minecraft:iron_ingot"
        },
        {
          "item": "mekanism:basic_control_circuit"
        },
        {
          "item": "minecraft:iron_ingot"
        },
        {
          "item": "mekanism:alloy_infused"
        },
        {
          "item": "mekanism:basic_control_circuit"
        },
        {
          "item": "mekanism:alloy_infused"
        },
      ],
      "recipe_book_tab": "meals",
      "result": {
        "id": "mekanism:precision_sawmill"
      }
})
event.remove({output:"mekanism:basic_infusing_factory"}) //吹込ファクトリー
event.custom({
    "type": "farmersdelight:cooking",
    "container": {
      "count": 1,
      "id": "mekanism:metallurgic_infuser"
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
        "id": "mekanism:basic_infusing_factory"
      }
})
event.remove({output:"mekanism:advanced_infusing_factory"})
event.custom({
    "type": "farmersdelight:cooking",
    "container": {
      "count": 1,
      "id": "mekanism:basic_infusing_factory"
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
        "id": "mekanism:advanced_infusing_factory"
      }
})
event.remove({output:"mekanism:elite_infusing_factory"})
event.custom({
    "type": "farmersdelight:cooking",
    "container": {
      "count": 1,
      "id": "mekanism:advanced_infusing_factory"
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
        "id": "mekanism:elite_infusing_factory"
      }
})
event.remove({output:"mekanism:ultimate_infusing_factory"})
event.custom({
    "type": "farmersdelight:cooking",
    "container": {
      "count": 1,
      "id": "mekanism:elite_infusing_factory"
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
        "id": "mekanism:ultimate_infusing_factory"
      }
})
event.remove({output:"mekanism:metallurgic_infuser"})
event.custom({
    "type": "farmersdelight:cooking",
    "container": {
      "count": 1,
      "id": "mekanism:ingot_osmium"
      },
      "cookingtime": 200,
      "experience": 1.0,
      "ingredients": [
        {
          "item": "minecraft:iron_ingot"
        },
        {
          "item": "minecraft:furnace"
        },
        {
          "item": "minecraft:iron_ingot"
        },
        {
          "item": "minecraft:redstone"
        },
        {
          "item": "minecraft:furnace"
        },
        {
          "item": "minecraft:redstone"
        },
      ],
      "recipe_book_tab": "meals",
      "result": {
        "id": "mekanism:metallurgic_infuser"
      }
})
event.remove({output:"mekanism:basic_injecting_factory"}) //注入ファクトリー
event.custom({
    "type": "farmersdelight:cooking",
    "container": {
      "count": 1,
      "id": "mekanism:chemical_injection_chamber"
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
        "id": "mekanism:basic_injecting_factory"
      }
})
event.remove({output:"mekanism:advanced_injecting_factory"})
event.custom({
    "type": "farmersdelight:cooking",
    "container": {
      "count": 1,
      "id": "mekanism:basic_injecting_factory"
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
        "id": "mekanism:advanced_injecting_factory"
      }
})
event.remove({output:"mekanism:elite_injecting_factory"})
event.custom({
    "type": "farmersdelight:cooking",
    "container": {
      "count": 1,
      "id": "mekanism:advanced_injecting_factory"
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
        "id": "mekanism:elite_injecting_factory"
      }
})
event.remove({output:"mekanism:ultimate_injecting_factory"})
event.custom({
    "type": "farmersdelight:cooking",
    "container": {
      "count": 1,
      "id": "mekanism:elite_injecting_factory"
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
        "id": "mekanism:ultimate_injecting_factory"
      }
})
event.remove({output:"mekanism:chemical_injection_chamber"})
event.custom({
    "type": "farmersdelight:cooking",
    "container": {
      "count": 1,
      "id": "mekanism:purification_chamber"
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
        "id": "mekanism:chemical_injection_chamber"
      }
})
})
