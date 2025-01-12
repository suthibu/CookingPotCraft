ServerEvents.recipes(event => {
event.remove({output:`mekanism:energized_smelter`}) //電動精錬機
event.custom({
    "type": "farmersdelight:cooking",
    "container": {
      "count": 1,
      "id": "mekanism:steel_casing"
      },
      "cookingtime": 0,
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
      "cookingtime": 0,
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
      "cookingtime": 0,
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
      "cookingtime": 0,
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
      "cookingtime": 0,
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
      "cookingtime": 0,
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
      "cookingtime": 0,
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
      "cookingtime": 0,
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
      "cookingtime": 0,
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
      "cookingtime": 0,
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
      "cookingtime": 0,
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
      "cookingtime": 0,
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
      "cookingtime": 0,
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
      "cookingtime": 0,
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
      "cookingtime": 0,
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
      "cookingtime": 0,
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
      "cookingtime": 0,
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
      "cookingtime": 0,
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
      "cookingtime": 0,
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
      "cookingtime": 0,
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
      "cookingtime": 0,
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
      "cookingtime": 0,
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
      "cookingtime": 0,
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
      "cookingtime": 0,
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
      "cookingtime": 0,
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
      "cookingtime": 0,
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
      "cookingtime": 0,
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
      "cookingtime": 0,
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
      "cookingtime": 0,
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
      "cookingtime": 0,
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
      "cookingtime": 0,
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
      "cookingtime": 0,
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
      "cookingtime": 0,
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
      "cookingtime": 0,
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
      "cookingtime": 0,
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
      "cookingtime": 0,
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
      "cookingtime": 0,
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
      "cookingtime": 0,
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
      "cookingtime": 0,
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
      "cookingtime": 0,
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
      "cookingtime": 0,
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
      "cookingtime": 0,
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
      "cookingtime": 0,
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
      "cookingtime": 0,
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
      "cookingtime": 0,
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
event.remove({output:"mekanism:energy_tablet"}) //エネルギータブレット
event.custom({
    "type": "farmersdelight:cooking",
      "cookingtime": 0,
      "experience": 1.0,
      "ingredients": [
        {
          "item": "minecraft:redstone"
        },
        {
          "item": "minecraft:gold_ingot"
        },
        {
          "item": "minecraft:redstone"
        },
        {
          "item": "mekanism:alloy_infused"
        },
        {
          "item": "minecraft:gold_ingot"
        },
        {
          "item": "mekanism:alloy_infused"
        },
      ],
      "recipe_book_tab": "meals",
      "result": {
        "id": "mekanism:energy_tablet"
      }
})
event.remove({output:"mekanism:configurator"}) //コンフィギュレーター
event.custom({
    "type": "farmersdelight:cooking",
      "cookingtime": 0,
      "experience": 1.0,
      "ingredients": [
        {
          "item": "minecraft:iron_ingot"
        },
        {
          "item": "minecraft:iron_ingot"
        },
        {
          "item": "mekanism:ingot_osmium"
        },
        {
          "item": "mekanism:ingot_steel"
        },
      ],
      "recipe_book_tab": "meals",
      "result": {
        "id": "mekanism:configurator"
      }
})
event.remove({output:"mekanism:network_reader"}) //ネットワークリーダー
event.custom({
    "type": "farmersdelight:cooking",
      "cookingtime": 0,
      "experience": 1.0,
      "ingredients": [
        {
          "item": "mekanism:alloy_infused"
        },
        {
          "item": "mekanism:energy_tablet"
        },
        {
          "item": "mekanism:alloy_infused"
        },
        {
          "item": "mekanism:ingot_steel"
        },
        {
          "tag": "c:glass_blocks/cheap"
        }
      ],
      "recipe_book_tab": "meals",
      "result": {
        "id": "mekanism:network_reader"
      }
})
event.remove({output:"mekanism:dictionary"}) //鉱石辞書
event.custom({
    "type": "farmersdelight:cooking",
      "cookingtime": 0,
      "experience": 1.0,
      "ingredients": [
        {
          "item": "mekanism:basic_control_circuit"
        },
        {
          "item": "minecraft:book"
        },
      ],
      "recipe_book_tab": "meals",
      "result": {
        "id": "mekanism:dictionary"
      }
})
event.remove({output:"mekanism:teleportation_core"}) //テレポーテーションコア
event.custom({
    "type": "farmersdelight:cooking",
    "container": {
      "count": 1,
      "id": "minecraft:diamond"
      },
      "cookingtime": 0,
      "experience": 1.0,
      "ingredients": [
        {
          "item": "minecraft:ender_pearl"
        },
        {
          "item": "mekanism:alloy_atomic"
        },
        {
          "item": "minecraft:ender_pearl"
        },
        {
          "item": "minecraft:gold_ingot"
        },
        {
          "item": "mekanism:alloy_atomic"
        },
        {
          "item": "minecraft:gold_ingot"
        },
      ],
      "recipe_book_tab": "meals",
      "result": {
        "id": "mekanism:teleportation_core"
      }
})
event.remove({output:"mekanism:portable_teleporter"}) //ポータブルテレポーター
event.custom({
    "type": "farmersdelight:cooking",
    "container": {
      "count": 1,
      "id": "mekanism:teleportation_core"
      },
      "cookingtime": 0,
      "experience": 1.0,
      "ingredients": [
        {
          "item": "mekanism:basic_control_circuit"
        },
        {
          "item": "mekanism:energy_tablet"
        },
        {
          "item": "mekanism:basic_control_circuit"
        }
      ],
      "recipe_book_tab": "meals",
      "result": {
        "id": "mekanism:portable_teleporter"
      }
})
event.remove({output:"mekanism:configuration_card"}) //設定カード
event.custom({
    "type": "farmersdelight:cooking",
    "container": {
      "count": 1,
      "id": "mekanism:basic_control_circuit"
      },
      "cookingtime": 0,
      "experience": 1.0,
      "ingredients": [
        {
          "item": "mekanism:alloy_infused"
        },
        {
          "item": "mekanism:alloy_infused"
        },
        {
          "item": "mekanism:alloy_infused"
        },
        {
          "item": "mekanism:alloy_infused"
        }
      ],
      "recipe_book_tab": "meals",
      "result": {
        "id": "mekanism:configuration_card"
      }
})
event.remove({output:"mekanism:crafting_formula"}) //クラフトレシピ
event.custom({
    "type": "farmersdelight:cooking",
    "container": {
      "count": 1,
      "id": "mekanism:basic_control_circuit"
      },
      "cookingtime": 0,
      "experience": 1.0,
      "ingredients": [
        {
          "item": "minecraft:paper"
        },
        {
          "item": "mekanism:basic_control_circuit"
        }
      ],
      "recipe_book_tab": "meals",
      "result": {
        "id": "mekanism:crafting_formula"
      }
})
event.remove({output:"mekanism:gauge_dropper"}) //軽量スポイト
event.custom({
    "type": "farmersdelight:cooking",
      "cookingtime": 0,
      "experience": 1.0,
      "ingredients": [
        {
          "tag": "c:glass_panes"
        },
        {
          "item": "mekanism:ingot_osmium"
        },
        {
          "tag": "c:glass_panes"
        },
        {
          "tag": "c:glass_panes"
        },
        {
          "tag": "c:glass_panes"
        },
        {
          "tag": "c:glass_panes"
        },
      ],
      "recipe_book_tab": "meals",
      "result": {
        "id": "mekanism:gauge_dropper"
      }
})
event.remove({output:"mekanism:geiger_counter"}) //ガイガーカウンター
event.custom({
    "type": "farmersdelight:cooking",
    "container": {
      "count": 1,
      "id": "mekanism:basic_control_circuit"
      },
      "cookingtime": 0,
      "experience": 1.0,
      "ingredients": [
        {
          "item": "mekanism:ingot_lead"
        },
        {
          "item": "mekanism:ingot_lead"
        },
        {
          "item": "mekanism:ingot_lead"
        },
        {
          "item": "mekanism:ingot_lead"
        }
      ],
      "recipe_book_tab": "meals",
      "result": {
        "id": "mekanism:geiger_counter"
      }
})
event.remove({output:"mekanism:seismic_reader"}) //弾性波解析機
event.custom({
    "type": "farmersdelight:cooking",
    "container": {
      "count": 1,
      "id": "mekanism:energy_tablet"
      },
      "cookingtime": 0,
      "experience": 1.0,
      "ingredients": [
        {
          "item": "mekanism:ingot_steel"
        },
        {
          "item": "minecraft:lapis_lazuli"
        },
        {
          "item": "mekanism:ingot_steel"
        },
        {
          "item": "mekanism:ingot_steel"
        },
        {
          "item": "mekanism:ingot_steel"
        },
        {
          "item": "mekanism:ingot_steel"
        }
      ],
      "recipe_book_tab": "meals",
      "result": {
        "id": "mekanism:seismic_reader"
      }
})
event.remove({output:"mekanism:dosimeter"}) //線量計
event.custom({
    "type": "farmersdelight:cooking",
    "container": {
      "count": 1,
      "id": "minecraft:redstone"
      },
      "cookingtime": 0,
      "experience": 1.0,
      "ingredients": [
        {
          "item": "mekanism:ingot_lead"
        },
        {
          "item": "mekanism:ingot_lead"
        },
        {
          "item": "mekanism:ingot_lead"
        },
        {
          "item": "mekanism:ingot_lead"
        }
      ],
      "recipe_book_tab": "meals",
      "result": {
        "id": "mekanism:dosimeter"
      }
})
event.remove({output:"mekanism:canteen"}) //キャンティーン
event.custom({
    "type": "farmersdelight:cooking",
    "container": {
      "count": 1,
      "id": "minecraft:bowl"
      },
      "cookingtime": 0,
      "experience": 1.0,
      "ingredients": [
        {
          "item": "mekanism:ingot_tin"
        },
        {
          "item": "mekanism:ingot_tin"
        },
        {
          "item": "mekanism:ingot_tin"
        },
        {
          "item": "mekanism:ingot_tin"
        }
      ],
      "recipe_book_tab": "meals",
      "result": {
        "id": "mekanism:canteen"
      }
})
event.remove({output:"mekanism:portable_qio_dashboard"}) //ポータブルQIOダッシュボード
event.custom({
    "type": "farmersdelight:cooking",
    "container": {
      "count": 1,
      "id": "mekanism:teleportation_core"
      },
      "cookingtime": 0,
      "experience": 1.0,
      "ingredients": [
        {
          "item": "mekanism:pellet_polonium"
        },
        {
          "item": "mekanism:pellet_polonium"
        },
        {
          "item": "mekanism:pellet_polonium"
        },
        {
          "item": "mekanism:pellet_polonium"
        },
        {
          "item": "mekanism:qio_dashboard"
        },
        {
          "item": "mekanism:pellet_polonium"
        }
      ],
      "recipe_book_tab": "meals",
      "result": {
        "id": "mekanism:portable_qio_dashboard"
      }
})
event.remove({output:"mekanism:qio_dashboard"}) //QIOダッシュボード
event.custom({
    "type": "farmersdelight:cooking",
    "container": {
      "count": 1,
      "id": "mekanism:teleportation_core"
      },
      "cookingtime": 0,
      "experience": 1.0,
      "ingredients": [
        {
          "item": "minecraft:ender_pearl"
        },
        {
          "item": "mekanism:ingot_lead"
        },
        {
          "item": "minecraft:ender_pearl"
        },
        {
          "item": "mekanism:ingot_lead"
        },
        {
          "tag": "c:glass_panes"
        },
        {
          "item": "mekanism:ingot_lead"
        }
      ],
      "recipe_book_tab": "meals",
      "result": {
        "id": "mekanism:qio_dashboard"
      }
})
event.remove({output:"mekanism:qio_drive_base"}) //QIOドライブ
event.custom({
    "type": "farmersdelight:cooking",
    "container": {
      "count": 1,
      "id": "minecraft:ender_pearl"
      },
      "cookingtime": 0,
      "experience": 1.0,
      "ingredients": [
        {
          "item": "minecraft:ender_pearl"
        },
        {
          "item": "mekanism:ultimate_control_circuit"
        },
        {
          "item": "minecraft:ender_pearl"
        },
        {
          "item": "mekanism:ultimate_control_circuit"
        },
        {
          "item": "mekanism:ultimate_control_circuit"
        },
        {
          "item": "mekanism:ultimate_control_circuit"
        }
      ],
      "recipe_book_tab": "meals",
      "result": {
        "id": "mekanism:qio_drive_base"
      }
})
event.remove({output:"mekanism:qio_drive_hyper_dense"}) //超高密集QIOドライブ
event.custom({
    "type": "farmersdelight:cooking",
    "container": {
      "count": 1,
      "id": "mekanism:teleportation_core"
      },
      "cookingtime": 0,
      "experience": 1.0,
      "ingredients": [
        {
          "item": "mekanism:pellet_plutonium"
        },
        {
          "item": "mekanism:qio_drive_base"
        },
        {
          "item": "mekanism:pellet_plutonium"
        },
        {
          "item": "mekanism:qio_drive_base"
        },
        {
          "item": "mekanism:qio_drive_base"
        },
        {
          "item": "mekanism:qio_drive_base"
        }
      ],
      "recipe_book_tab": "meals",
      "result": {
        "id": "mekanism:qio_drive_hyper_dense"
      }
})
event.remove({output:"mekanism:qio_drive_time_dilating"}) //時間拡張QIOドライブ
event.custom({
    "type": "farmersdelight:cooking",
    "container": {
      "count": 1,
      "id": "mekanism:pellet_polonium"
      },
      "cookingtime": 0,
      "experience": 1.0,
      "ingredients": [
        {
          "item": "mekanism:pellet_plutonium"
        },
        {
          "item": "mekanism:qio_drive_hyper_dense"
        },
        {
          "item": "mekanism:pellet_plutonium"
        },
        {
          "item": "mekanism:qio_drive_hyper_dense"
        },
        {
          "item": "mekanism:qio_drive_hyper_dense"
        },
        {
          "item": "mekanism:qio_drive_hyper_dense"
        }
      ],
      "recipe_book_tab": "meals",
      "result": {
        "id": "mekanism:qio_drive_time_dilating"
      }
})
event.remove({output:"mekanism:qio_drive_supermassive"}) //超大容量QIOドライブ
event.custom({
    "type": "farmersdelight:cooking",
    "container": {
      "count": 1,
      "id": "mekanism:pellet_antimatter"
      },
      "cookingtime": 0,
      "experience": 1.0,
      "ingredients": [
        {
          "item": "mekanism:pellet_polonium"
        },
        {
          "item": "mekanism:qio_drive_time_dilating"
        },
        {
          "item": "mekanism:pellet_polonium"
        },
        {
          "item": "mekanism:qio_drive_time_dilating"
        },
        {
          "item": "mekanism:qio_drive_time_dilating"
        },
        {
          "item": "mekanism:qio_drive_time_dilating"
        }
      ],
      "recipe_book_tab": "meals",
      "result": {
        "id": "mekanism:qio_drive_supermassive"
      }
})
event.remove({output:"mekanism:qio_drive_array"}) //QIOドライブ配列
event.custom({
    "type": "farmersdelight:cooking",
    "container": {
      "count": 1,
      "id": "minecraft:ender_pearl"
      },
      "cookingtime": 0,
      "experience": 1.0,
      "ingredients": [
        {
          "item": "mekanism:teleportation_core"
        },
        {
          "tag": "c:glass_panes"
        },
        {
          "item": "mekanism:teleportation_core"
        },
        {
          "item": "mekanism:ultimate_control_circuit"
        },
        {
          "tag": "mekanism:personal_storage"
        },
        {
          "item": "mekanism:ultimate_control_circuit"
        }
      ],
      "recipe_book_tab": "meals",
      "result": {
        "id": "mekanism:qio_drive_array"
      }
})
event.remove({output:"mekanism:qio_redstone_adapter"}) //QIOレッドストーンアダプター
event.custom({
    "type": "farmersdelight:cooking",
    "container": {
      "count": 1,
      "id": "mekanism:teleportation_core"
      },
      "cookingtime": 0,
      "experience": 1.0,
      "ingredients": [
        {
          "item": "minecraft:ender_pearl"
        },
        {
          "item": "minecraft:redstone_torch"
        },
        {
          "item": "minecraft:ender_pearl"
        },
        {
          "item": "mekanism:ultimate_control_circuit"
        },
        {
          "item": "minecraft:redstone"
        },
        {
          "item": "mekanism:ultimate_control_circuit"
        }
      ],
      "recipe_book_tab": "meals",
      "result": {
        "id": "mekanism:qio_redstone_adapter"
      }
})
event.remove({output:"mekanism:qio_exporter"}) //QIO搬出機
event.custom({
    "type": "farmersdelight:cooking",
    "container": {
      "count": 1,
      "id": "minecraft:piston"
      },
      "cookingtime": 0,
      "experience": 1.0,
      "ingredients": [
        {
          "item": "mekanism:ingot_lead"
        },
        {
          "item": "mekanism:teleportation_core"
        },
        {
          "item": "mekanism:ingot_lead"
        },
        {
          "item": "minecraft:ender_pearl"
        },
        {
          "item": "mekanism:ultimate_control_circuit"
        },
        {
          "item": "minecraft:ender_pearl"
        }
      ],
      "recipe_book_tab": "meals",
      "result": {
        "id": "mekanism:qio_exporter"
      }
})
event.remove({output:"mekanism:qio_importer"}) //QIO搬入機
event.custom({
    "type": "farmersdelight:cooking",
    "container": {
      "count": 1,
      "id": "minecraft:sticky_piston"
      },
      "cookingtime": 0,
      "experience": 1.0,
      "ingredients": [
        {
          "item": "mekanism:ingot_lead"
        },
        {
          "item": "mekanism:teleportation_core"
        },
        {
          "item": "mekanism:ingot_lead"
        },
        {
          "item": "minecraft:ender_pearl"
        },
        {
          "item": "mekanism:ultimate_control_circuit"
        },
        {
          "item": "minecraft:ender_pearl"
        }
      ],
      "recipe_book_tab": "meals",
      "result": {
        "id": "mekanism:qio_importer"
      }
})
event.remove({output:"mekanism:scuba_mask"}) //スキューバーマスク
event.custom({
    "type": "farmersdelight:cooking",
      "cookingtime": 0,
      "experience": 1.0,
      "ingredients": [
        {
          "item": "mekanism:ingot_steel"
        },
        {
          "item": "mekanism:ingot_steel"
        },
        {
          "item": "mekanism:ingot_steel"
        },
        {
          "tag": "c:glass_blocks"
        },
        {
          "item": "mekanism:basic_control_circuit"
        },
        {
          "tag": "c:glass_blocks"
        }
      ],
      "recipe_book_tab": "meals",
      "result": {
        "id": "mekanism:scuba_mask"
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
      event.remove({ output: output }) //QIO搬入機

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
potRecipe("mekanism:free_runners", ["mekanism:basic_control_circuit", "mekanism:energy_tablet", "mekanism:basic_control_circuit", "mekanism:alloy_infused", "mekanism:energy_tablet", "mekanism:alloy_infused"]) //フリーランナー
potRecipe("mekanism:free_runners_armored",["mekanism:dust_diamond","mekanism:free_runners","mekanism:dust_diamond","mekanism:ingot_bronze","mekanism:block_steel","mekanism:ingot_bronze"]) //装甲フリーランナー
potRecipe("mekanism:meka_tool",["mekanism:ultimate_control_circuit","mekanism:configurator","mekanism:ultimate_control_circuit","mekanism:pellet_polonium","mekanism:atomic_disassembler","mekanism:pellet_polonium"],"mekanism:basic_induction_cell") //Meka-Tool
potRecipe("mekanism:atomic_disassembler",["mekanism:alloy_infused","mekanism:energy_tablet","mekanism:alloy_infused","mekanism:alloy_infused","mekanism:alloy_atomic","mekanism:alloy_infused"],"mekanism:ingot_refined_obsidian") //原子分解機
potRecipe("mekanism:flamethrower",["mekanism:ingot_tin","mekanism:ingot_tin","mekanism:ingot_tin","mekanism:ingot_tin","mekanism:basic_chemical_tank","minecraft:flint_and_steel"],"mekanism:advanced_control_circuit") //火炎放射器
potRecipe("mekanism:electric_bow",["minecraft:string","minecraft:string","minecraft:string","mekanism:alloy_infused","mekanism:energy_tablet","mekanism:alloy_infused"]) //エレクトリックボウ
potRecipe("mekanism:scuba_tank",["mekanism:alloy_infused","mekanism:basic_chemical_tank","mekanism:alloy_infused","mekanism:ingot_steel","mekanism:ingot_steel","mekanism:ingot_steel"],"mekanism:basic_control_circuit") //潜水タンク
potRecipe("mekanism:jetpack",["mekanism:ingot_steel","mekanism:basic_chemical_tank","mekanism:ingot_steel","mekanism:ingot_tin","mekanism:ingot_tin","mekanism:ingot_tin"],"mekanism:basic_control_circuit") //ジェットパック
potRecipe("mekanism:jetpack_armored",["mekanism:dust_diamond","mekanism:jetpack","mekanism:dust_diamond","mekanism:ingot_bronze","mekanism:block_steel","mekanism:ingot_bronze"]) //装甲ジェットパック
potRecipe("mekanism:hdpe_elytra",["mekanism:alloy_atomic","mekanism:hdpe_sheet","mekanism:alloy_atomic","mekanism:hdpe_sheet","mekanism:hdpe_sheet","mekanism:hdpe_sheet"],"minecraft:elytra") //HDPE強化エリトラ
potRecipe("mekanism:hazmat_mask",["mekanism:ingot_lead","mekanism:ingot_lead","mekanism:ingot_lead","mekanism:ingot_lead","minecraft:orange_dye","mekanism:ingot_lead"]) //防護マスク
potRecipe("mekanism:hazmat_gown",["mekanism:ingot_lead","minecraft:orange_dye","mekanism:ingot_lead","mekanism:ingot_lead","mekanism:ingot_lead","mekanism:ingot_lead"],"mekanism:ingot_lead") //防護ガウン
potRecipe("mekanism:hazmat_pants",["mekanism:ingot_lead","mekanism:ingot_lead","mekanism:ingot_lead","mekanism:ingot_lead","mekanism:ingot_lead","mekanism:ingot_lead"],"minecraft:orange_dye") //防護パンツ
potRecipe("mekanism:hazmat_boots",["mekanism:ingot_lead","minecraft:black_dye","mekanism:ingot_lead","mekanism:ingot_lead","minecraft:black_dye","mekanism:ingot_lead"]) //防護ブーツ
potRecipe("mekanism:mekasuit_helmet",["mekanism:hdpe_sheet","mekanism:ultimate_control_circuit","mekanism:hdpe_sheet","mekanism:pellet_polonium","mekanism:basic_induction_cell","mekanism:pellet_polonium"],"minecraft:netherite_helmet") //MekaSuitヘルメット
potRecipe("mekanism:mekasuit_bodyarmor",["mekanism:hdpe_sheet","mekanism:ultimate_control_circuit","mekanism:hdpe_sheet","mekanism:pellet_polonium","mekanism:basic_induction_cell","mekanism:pellet_polonium"],"minecraft:netherite_chestplate") //MekaSuitボディアーマー
potRecipe("mekanism:mekasuit_pants",["mekanism:hdpe_sheet","mekanism:ultimate_control_circuit","mekanism:hdpe_sheet","mekanism:pellet_polonium","mekanism:basic_induction_cell","mekanism:pellet_polonium"],"minecraft:netherite_leggings") //MekaSuitパンツ
potRecipe("mekanism:mekasuit_boots",["mekanism:hdpe_sheet","mekanism:ultimate_control_circuit","mekanism:hdpe_sheet","mekanism:pellet_polonium","mekanism:basic_induction_cell","mekanism:pellet_polonium"],"minecraft:netherite_boots") //MekaSuitブーツ
})