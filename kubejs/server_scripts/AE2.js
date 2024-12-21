ServerEvents.recipes(event => {
event.remove({output:'ae2:network_tool'})
event.custom({
        "type": "farmersdelight:cooking",
        "cookingtime": 500,
        "experience": 0.35,
        "ingredients": [
          {
            "tag": "ae2:illuminated_panel"
          },
          {
            "tag": "c:chests/wooden"
          },
          {
            "tag": "ae2:quartz_wrench"
          },
          {
            "item": "ae2:calculation_processor"
          }
        ],
        "recipe_book_tab": "meals",
        "result": {
          "id": "ae2:network_tool"
        }
    })
event.remove({output:'ae2:matter_cannon'})
event.custom({
      "type": "farmersdelight:cooking",
        "cookingtime": 500,
        "experience": 0.35,
        "ingredients": [
          {
            "item": "minecraft:iron_ingot"
          },
          {
            "item": "ae2:energy_cell"
          },
          {
            "item": "ae2:cell_component_4k"
          },
          {
            "item": "ae2:formation_core"
          }
        ],
        "recipe_book_tab": "meals",
        "result": {
          "id": "ae2:matter_cannon"
        }
    })
event.remove({output:'ae2:controller'})
event.custom({
  "type": "farmersdelight:cooking",
  "cookingtime": 500,
  "experience": 0.35,
  "ingredients": [
    {
      "item": "ae2:smooth_sky_stone_block"
    },
    {
      "item": "ae2:fluix_crystal"
    },
    {
      "item": "ae2:engineering_processor"
    }
  ],
  "recipe_book_tab": "meals",
  "result": {
    "id": "ae2:controller"
  }
})
event.remove({output:'ae2:color_applicator'})
event.custom({
      "type": "farmersdelight:cooking",
        "cookingtime": 500,
        "experience": 0.35,
        "ingredients": [
          {
            "item": "ae2:formation_core"
          },
          {
            "item": "ae2:energy_cell"
          },
          {
            "item": "ae2:cell_component_4k"
          },
          {
            "item": "minecraft:iron_ingot"
          }
        ],
        "recipe_book_tab": "meals",
        "result": {
          "id": "ae2:color_applicator"
        }
    })
    event.remove({output:'ae2:entropy_manipulator'})
    event.custom({
      "type": "farmersdelight:cooking",
        "cookingtime": 500,
        "experience": 0.35,
        "ingredients": [
          {
            "item": "ae2:fluix_crystal"
          },
          {
            "item": "ae2:energy_cell"
          },
          {
            "item": "ae2:engineering_processor"
          },
          {
            "item": "minecraft:iron_ingot"
          }
        ],
        "recipe_book_tab": "meals",
        "result": {
          "id": "ae2:entropy_manipulator"
        }
    })
    event.remove({output:'ae2:charged_staff'})
    event.custom({
      "type": "farmersdelight:cooking",
      "container": {
        "count": 1,
        "id": "ae2:charged_certus_quartz_crystal"
        },
        "cookingtime": 200,
        "experience": 1.0,
        "ingredients": [
          {
            "item": "minecraft:iron_ingot"
          },
          {
            "item": "minecraft:iron_ingot"
          },
        ],
        "recipe_book_tab": "meals",
        "result": {
          "id": "ae2:charged_staff"
        }
      })
event.remove({output:"ae2:memory_card"})
event.custom({
  "type": "farmersdelight:cooking",
  "container": {
    "count": 1,
    "id": "ae2:calculation_processor"
    },
    "cookingtime": 200,
    "experience": 1.0,
    "ingredients": [
      {
        "item":"minecraft:iron_ingot"
      },
      {
        "item":"minecraft:iron_ingot"
      },
      {
        "item":"minecraft:gold_ingot"
      },
      {
        "item":"minecraft:redstone"
      },
      {
        "item":"minecraft:gold_ingot"
      }

    ],
    "recipe_book_tab": "meals",
    "result": {
      "id": "ae2:memory_card"
    }
  })
event.remove({output:"ae2:item_storage_cell_1k"}) //アイテムストレージセル
event.custom({
  "type": "farmersdelight:cooking",
  "container": {
    "count": 1,
    "id": "ae2:item_cell_housing"
    },
    "cookingtime": 200,
    "experience": 1.0,
    "ingredients": [
      {
        "item":"ae2:cell_component_1k"
      }
    ],
    "recipe_book_tab": "meals",
    "result": {
      "id": "ae2:item_storage_cell_1k"
    }
})
  event.remove({output:"ae2:item_storage_cell_4k"}) 
  event.custom({
    "type": "farmersdelight:cooking",
    "container": {
      "count": 1,
      "id": "ae2:item_cell_housing"
      },
      "cookingtime": 200,
      "experience": 1.0,
      "ingredients": [
        {
          "item":"ae2:cell_component_4k"
        }
      ],
      "recipe_book_tab": "meals",
      "result": {
        "id": "ae2:item_storage_cell_4k"
      }
    })
    event.remove({output:"ae2:item_storage_cell_16k"})
    event.custom({
      "type": "farmersdelight:cooking",
      "container": {
        "count": 1,
        "id": "ae2:item_cell_housing"
        },
        "cookingtime": 200,
        "experience": 1.0,
        "ingredients": [
          {
            "item":"ae2:cell_component_16k"
          }
        ],
        "recipe_book_tab": "meals",
        "result": {
          "id": "ae2:item_storage_cell_16k"
        }
      })
      event.remove({output:"ae2:item_storage_cell_64k"})
      event.custom({
        "type": "farmersdelight:cooking",
        "container": {
          "count": 1,
          "id": "ae2:item_cell_housing"
          },
          "cookingtime": 200,
          "experience": 1.0,
          "ingredients": [
            {
              "item":"ae2:cell_component_64k"
            }
          ],
          "recipe_book_tab": "meals",
          "result": {
            "id": "ae2:item_storage_cell_64k"
          }
        })
        event.remove({output:"ae2:item_storage_cell_256k"})
        event.custom({
          "type": "farmersdelight:cooking",
          "container": {
            "count": 1,
            "id": "ae2:item_cell_housing"
            },
            "cookingtime": 200,
            "experience": 1.0,
            "ingredients": [
              {
                "item":"ae2:cell_component_256k"
              }
            ],
            "recipe_book_tab": "meals",
            "result": {
              "id": "ae2:item_storage_cell_256k"
            }
})
event.remove({output:"ae2:portable_item_cell_1k"}) //アイテムポータブルセル
        event.custom({
          "type": "farmersdelight:cooking",
          "container": {
            "count": 1,
            "id": "ae2:item_cell_housing"
            },
            "cookingtime": 200,
            "experience": 1.0,
            "ingredients": [
              {
                "item":"ae2:chest"
              },
              {
                "item":"ae2:cell_component_1k"
              },
              {
                "item":"ae2:energy_cell"
              }
            ],
            "recipe_book_tab": "meals",
            "result": {
              "id": "ae2:portable_item_cell_1k"
            }
})
event.remove({output:"ae2:portable_item_cell_4k"})
event.custom({
  "type": "farmersdelight:cooking",
  "container": {
    "count": 1,
    "id": "ae2:item_cell_housing"
    },
    "cookingtime": 200,
    "experience": 1.0,
    "ingredients": [
      {
        "item":"ae2:chest"
      },
      {
        "item":"ae2:cell_component_4k"
      },
      {
        "item":"ae2:energy_cell"
      }
    ],
    "recipe_book_tab": "meals",
    "result": {
      "id": "ae2:portable_item_cell_4k"
    }
})
event.remove({output:"ae2:portable_item_cell_16k"})
event.custom({
  "type": "farmersdelight:cooking",
  "container": {
    "count": 1,
    "id": "ae2:item_cell_housing"
    },
    "cookingtime": 200,
    "experience": 1.0,
    "ingredients": [
      {
        "item":"ae2:chest"
      },
      {
        "item":"ae2:cell_component_16k"
      },
      {
        "item":"ae2:energy_cell"
      }
    ],
    "recipe_book_tab": "meals",
    "result": {
      "id": "ae2:portable_item_cell_16k"
    }
})
event.remove({output:"ae2:portable_item_cell_64k"})
event.custom({
  "type": "farmersdelight:cooking",
  "container": {
    "count": 1,
    "id": "ae2:item_cell_housing"
    },
    "cookingtime": 200,
    "experience": 1.0,
    "ingredients": [
      {
        "item":"ae2:chest"
      },
      {
        "item":"ae2:cell_component_64k"
      },
      {
        "item":"ae2:energy_cell"
      }
    ],
    "recipe_book_tab": "meals",
    "result": {
      "id": "ae2:portable_item_cell_64k"
    }
})
event.remove({output:"ae2:portable_item_cell_256k"})
event.custom({
  "type": "farmersdelight:cooking",
  "container": {
    "count": 1,
    "id": "ae2:item_cell_housing"
    },
    "cookingtime": 200,
    "experience": 1.0,
    "ingredients": [
      {
        "item":"ae2:chest"
      },
      {
        "item":"ae2:cell_component_256k"
      },
      {
        "item":"ae2:energy_cell"
      }
    ],
    "recipe_book_tab": "meals",
    "result": {
      "id": "ae2:portable_item_cell_256k"
    }
})
event.remove({output:"ae2:view_cell"})
event.custom({
  "type": "farmersdelight:cooking",
  "container": {
    "count": 1,
    "id": "ae2:item_cell_housing"
    },
    "cookingtime": 200,
    "experience": 1.0,
    "ingredients": [
      {
        "tag":"c:gems/certus_quartz"
      }
    ],
    "recipe_book_tab": "meals",
    "result": {
      "id": "ae2:view_cell"
    }
})
event.remove({output:"ae2:fluid_storage_cell_1k"}) //液体ストレージセル
event.custom({
  "type": "farmersdelight:cooking",
  "container": {
    "count": 1,
    "id": "ae2:fluid_cell_housing"
    },
    "cookingtime": 200,
    "experience": 1.0,
    "ingredients": [
      {
        "item":"ae2:cell_component_1k"
      }
    ],
    "recipe_book_tab": "meals",
    "result": {
      "id": "ae2:fluid_storage_cell_1k"
    }
})
event.remove({output:"ae2:fluid_storage_cell_4k"})
event.custom({
  "type": "farmersdelight:cooking",
  "container": {
    "count": 1,
    "id": "ae2:fluid_cell_housing"
    },
    "cookingtime": 200,
    "experience": 1.0,
    "ingredients": [
      {
        "item":"ae2:cell_component_4k"
      }
    ],
    "recipe_book_tab": "meals",
    "result": {
      "id": "ae2:fluid_storage_cell_4k"
    }
})
event.remove({output:"ae2:fluid_storage_cell_16k"})
event.custom({
  "type": "farmersdelight:cooking",
  "container": {
    "count": 1,
    "id": "ae2:fluid_cell_housing"
    },
    "cookingtime": 200,
    "experience": 1.0,
    "ingredients": [
      {
        "item":"ae2:cell_component_16k"
      }
    ],
    "recipe_book_tab": "meals",
    "result": {
      "id": "ae2:fluid_storage_cell_16k"
    }
})
event.remove({output:"ae2:fluid_storage_cell_64k"})
event.custom({
  "type": "farmersdelight:cooking",
  "container": {
    "count": 1,
    "id": "ae2:fluid_cell_housing"
    },
    "cookingtime": 200,
    "experience": 1.0,
    "ingredients": [
      {
        "item":"ae2:cell_component_64k"
      }
    ],
    "recipe_book_tab": "meals",
    "result": {
      "id": "ae2:fluid_storage_cell_64k"
    }
})
event.remove({output:"ae2:fluid_storage_cell_256k"})
event.custom({
  "type": "farmersdelight:cooking",
  "container": {
    "count": 1,
    "id": "ae2:fluid_cell_housing"
    },
    "cookingtime": 200,
    "experience": 1.0,
    "ingredients": [
      {
        "item":"ae2:cell_component_256k"
      }
    ],
    "recipe_book_tab": "meals",
    "result": {
      "id": "ae2:fluid_storage_cell_256k"
    }
})
event.remove({output:"ae2:portable_fluid_cell_1k"}) //液体ポータブルセル
event.custom({
  "type": "farmersdelight:cooking",
  "container": {
    "count": 1,
    "id": "ae2:fluid_cell_housing"
    },
    "cookingtime": 200,
    "experience": 1.0,
    "ingredients": [
      {
        "item":"ae2:chest"
      },
      {
        "item":"ae2:cell_component_1k"
      },
      {
        "item":"ae2:energy_cell"
      }
    ],
    "recipe_book_tab": "meals",
    "result": {
      "id": "ae2:portable_fluid_cell_1k"
    }
})
event.remove({output:"ae2:portable_fluid_cell_4k"})
event.custom({
  "type": "farmersdelight:cooking",
  "container": {
    "count": 1,
    "id": "ae2:fluid_cell_housing"
    },
    "cookingtime": 200,
    "experience": 1.0,
    "ingredients": [
      {
        "item":"ae2:chest"
      },
      {
        "item":"ae2:cell_component_4k"
      },
      {
        "item":"ae2:energy_cell"
      }
    ],
    "recipe_book_tab": "meals",
    "result": {
      "id": "ae2:portable_fluid_cell_4k"
    }
})
event.remove({output:"ae2:portable_fluid_cell_16k"})
event.custom({
  "type": "farmersdelight:cooking",
  "container": {
    "count": 1,
    "id": "ae2:fluid_cell_housing"
    },
    "cookingtime": 200,
    "experience": 1.0,
    "ingredients": [
      {
        "item":"ae2:chest"
      },
      {
        "item":"ae2:cell_component_16k"
      },
      {
        "item":"ae2:energy_cell"
      }
    ],
    "recipe_book_tab": "meals",
    "result": {
      "id": "ae2:portable_fluid_cell_16k"
    }
})
event.remove({output:"ae2:portable_fluid_cell_64k"})
event.custom({
  "type": "farmersdelight:cooking",
  "container": {
    "count": 1,
    "id": "ae2:fluid_cell_housing"
    },
    "cookingtime": 200,
    "experience": 1.0,
    "ingredients": [
      {
        "item":"ae2:chest"
      },
      {
        "item":"ae2:cell_component_64k"
      },
      {
        "item":"ae2:energy_cell"
      }
    ],
    "recipe_book_tab": "meals",
    "result": {
      "id": "ae2:portable_fluid_cell_64k"
    }
})
event.remove({output:"ae2:portable_fluid_cell_256k"})
event.custom({
  "type": "farmersdelight:cooking",
  "container": {
    "count": 1,
    "id": "ae2:fluid_cell_housing"
    },
    "cookingtime": 200,
    "experience": 1.0,
    "ingredients": [
      {
        "item":"ae2:chest"
      },
      {
        "item":"ae2:cell_component_256k"
      },
      {
        "item":"ae2:energy_cell"
      }
    ],
    "recipe_book_tab": "meals",
    "result": {
      "id": "ae2:portable_fluid_cell_256k"
    }
})
event.remove({output:"ae2:fluid_cell_housing"})
event.custom({
  "type": "farmersdelight:cooking",
    "cookingtime": 200,
    "experience": 1.0,
    "ingredients": [
      {
        "item":"ae2:quartz_glass"
      },
      {
        "item":"minecraft:redstone"
      },
      {
        "item":"ae2:quartz_glass"
      },
      {
        "item":"minecraft:copper_ingot"
      },
      {
        "item":"minecraft:copper_ingot"
      },
      {
        "item":"minecraft:copper_ingot"
      }
    ],
    "recipe_book_tab": "meals",
    "result": {
      "id": "ae2:fluid_cell_housing"
    }
})
event.remove({output:"ae2:item_cell_housing"})
event.custom({
  "type": "farmersdelight:cooking",
    "cookingtime": 200,
    "experience": 1.0,
    "ingredients": [
      {
        "item":"ae2:quartz_glass"
      },
      {
        "item":"minecraft:redstone"
      },
      {
        "item":"ae2:quartz_glass"
      },
      {
        "item":"minecraft:iron_ingot"
      },
      {
        "item":"minecraft:copper_ingot"
      },
      {
        "item":"minecraft:iron_ingot"
      }
    ],
    "recipe_book_tab": "meals",
    "result": {
      "id": "ae2:item_cell_housing"
    }
})
event.remove({output:"ae2:spatial_storage_cell_2"}) //空間ストレージ
event.custom({
  "type": "farmersdelight:cooking",
  "container": {
    "count": 1,
    "id": "ae2:item_cell_housing"
    },
    "cookingtime": 200,
    "experience": 1.0,
    "ingredients": [
      {
        "item":"ae2:spatial_cell_component_2"
      }
    ],
    "recipe_book_tab": "meals",
    "result": {
      "id": "ae2:spatial_storage_cell_2"
    }
})
event.remove({output:"ae2:spatial_storage_cell_16"})
event.custom({
  "type": "farmersdelight:cooking",
  "container": {
    "count": 1,
    "id": "ae2:item_cell_housing"
    },
    "cookingtime": 200,
    "experience": 1.0,
    "ingredients": [
      {
        "item":"ae2:spatial_cell_component_16"
      }
    ],
    "recipe_book_tab": "meals",
    "result": {
      "id": "ae2:spatial_storage_cell_16"
    }
})
event.remove({output:"ae2:spatial_storage_cell_128"})
event.custom({
  "type": "farmersdelight:cooking",
  "container": {
    "count": 1,
    "id": "ae2:item_cell_housing"
    },
    "cookingtime": 200,
    "experience": 1.0,
    "ingredients": [
      {
        "item":"ae2:spatial_cell_component_128"
      }
    ],
    "recipe_book_tab": "meals",
    "result": {
      "id": "ae2:spatial_storage_cell_128"
    }
})
event.remove({output:"appmek:chemical_storage_cell_1k"}) //化学物質ストレージ
event.custom({
  "type": "farmersdelight:cooking",
  "container": {
    "count": 1,
    "id": "appmek:chemical_cell_housing"
    },
    "cookingtime": 200,
    "experience": 1.0,
    "ingredients": [
      {
        "item":"ae2:cell_component_1k"
      }
    ],
    "recipe_book_tab": "meals",
    "result": {
      "id": "appmek:chemical_storage_cell_1k"
    }
})
event.remove({output:"appmek:chemical_storage_cell_4k"})
event.custom({
  "type": "farmersdelight:cooking",
  "container": {
    "count": 1,
    "id": "appmek:chemical_cell_housing"
    },
    "cookingtime": 200,
    "experience": 1.0,
    "ingredients": [
      {
        "item":"ae2:cell_component_4k"
      }
    ],
    "recipe_book_tab": "meals",
    "result": {
      "id": "appmek:chemical_storage_cell_4k"
    }
})
event.remove({output:"appmek:chemical_storage_cell_16k"})
event.custom({
  "type": "farmersdelight:cooking",
  "container": {
    "count": 1,
    "id": "appmek:chemical_cell_housing"
    },
    "cookingtime": 200,
    "experience": 1.0,
    "ingredients": [
      {
        "item":"ae2:cell_component_16k"
      }
    ],
    "recipe_book_tab": "meals",
    "result": {
      "id": "appmek:chemical_storage_cell_16k"
    }
})
event.remove({output:"appmek:chemical_storage_cell_64k"})
event.custom({
  "type": "farmersdelight:cooking",
  "container": {
    "count": 1,
    "id": "appmek:chemical_cell_housing"
    },
    "cookingtime": 200,
    "experience": 1.0,
    "ingredients": [
      {
        "item":"ae2:cell_component_64k"
      }
    ],
    "recipe_book_tab": "meals",
    "result": {
      "id": "appmek:chemical_storage_cell_64k"
    }
})
event.remove({output:"appmek:chemical_storage_cell_256k"})
event.custom({
  "type": "farmersdelight:cooking",
  "container": {
    "count": 1,
    "id": "appmek:chemical_cell_housing"
    },
    "cookingtime": 200,
    "experience": 1.0,
    "ingredients": [
      {
        "item":"ae2:cell_component_256k"
      }
    ],
    "recipe_book_tab": "meals",
    "result": {
      "id": "appmek:chemical_storage_cell_256k"
    }
})
event.remove({output:"appmek:chemical_cell_housing"})
event.custom({
  "type": "farmersdelight:cooking",
    "cookingtime": 200,
    "experience": 1.0,
    "ingredients": [
      {
        "item":"ae2:quartz_glass"
      },
      {
        "item":"minecraft:redstone"
      },
      {
        "item":"ae2:quartz_glass"
      },
      {
        "item":"mekanism:ingot_osmium"
      },
      {
        "item":"mekanism:ingot_osmium"
      },
      {
        "item":"mekanism:ingot_osmium"
      }
    ],
    "recipe_book_tab": "meals",
    "result": {
      "id": "appmek:chemical_cell_housing"
    }
})
event.remove({output:"appmek:portable_chemical_cell_1k"}) //ポータブル化学物質セル
event.custom({
  "type": "farmersdelight:cooking",
  "container": {
    "count": 1,
    "id": "appmek:chemical_cell_housing"
    },
    "cookingtime": 200,
    "experience": 1.0,
    "ingredients": [
      {
        "item":"ae2:chest"
      },
      {
        "item":"ae2:cell_component_1k"
      },
      {
        "item":"ae2:energy_cell"
      }
    ],
    "recipe_book_tab": "meals",
    "result": {
      "id": "appmek:portable_chemical_cell_1k"
    }
})
event.remove({output:"appmek:portable_chemical_cell_4k"})
event.custom({
  "type": "farmersdelight:cooking",
  "container": {
    "count": 1,
    "id": "appmek:chemical_cell_housing"
    },
    "cookingtime": 200,
    "experience": 1.0,
    "ingredients": [
      {
        "item":"ae2:chest"
      },
      {
        "item":"ae2:cell_component_4k"
      },
      {
        "item":"ae2:energy_cell"
      }
    ],
    "recipe_book_tab": "meals",
    "result": {
      "id": "appmek:portable_chemical_cell_4k"
    }
})
event.remove({output:"appmek:portable_chemical_cell_16k"})
event.custom({
  "type": "farmersdelight:cooking",
  "container": {
    "count": 1,
    "id": "appmek:chemical_cell_housing"
    },
    "cookingtime": 200,
    "experience": 1.0,
    "ingredients": [
      {
        "item":"ae2:chest"
      },
      {
        "item":"ae2:cell_component_16k"
      },
      {
        "item":"ae2:energy_cell"
      }
    ],
    "recipe_book_tab": "meals",
    "result": {
      "id": "appmek:portable_chemical_cell_16k"
    }
})
event.remove({output:"appmek:portable_chemical_cell_64k"})
event.custom({
  "type": "farmersdelight:cooking",
  "container": {
    "count": 1,
    "id": "appmek:chemical_cell_housing"
    },
    "cookingtime": 200,
    "experience": 1.0,
    "ingredients": [
      {
        "item":"ae2:chest"
      },
      {
        "item":"ae2:cell_component_64k"
      },
      {
        "item":"ae2:energy_cell"
      }
    ],
    "recipe_book_tab": "meals",
    "result": {
      "id": "appmek:portable_chemical_cell_64k"
    }
})
event.remove({output:"appmek:portable_chemical_cell_256k"})
event.custom({
  "type": "farmersdelight:cooking",
  "container": {
    "count": 1,
    "id": "appmek:chemical_cell_housing"
    },
    "cookingtime": 200,
    "experience": 1.0,
    "ingredients": [
      {
        "item":"ae2:chest"
      },
      {
        "item":"ae2:cell_component_256k"
      },
      {
        "item":"ae2:energy_cell"
      }
    ],
    "recipe_book_tab": "meals",
    "result": {
      "id": "appmek:portable_chemical_cell_256k"
    }
})
event.remove({output:"ae2:formation_core"}) //形成コア
event.custom({
  "type": "farmersdelight:cooking",
    "cookingtime": 200,
    "experience": 1.0,
    "ingredients": [
      {
        "tag":"c:gems/certus_quartz"
      },
      {
        "item":"ae2:fluix_dust"
      },
      {
        "item":"ae2:logic_processor"
      }
    ],
    "recipe_book_tab": "meals",
    "result": {
      "id": "ae2:formation_core"
    }
})
event.remove({output:"ae2:annihilation_core"}) //消滅コア
event.custom({
  "type": "farmersdelight:cooking",
    "cookingtime": 200,
    "experience": 1.0,
    "ingredients": [
      {
        "item":"minecraft:quartz"
      },
      {
        "item":"ae2:fluix_dust"
      },
      {
        "item":"ae2:logic_processor"
      }
    ],
    "recipe_book_tab": "meals",
    "result": {
      "id": "ae2:annihilation_core"
    }
})
event.remove({output:"ae2:void_card"}) //基本カード
event.custom({
  "type": "farmersdelight:cooking",
  "container": {
    "count": 1,
    "id": "ae2:basic_card"
    },
    "cookingtime": 200,
    "experience": 1.0,
    "ingredients": [
      {
        "item":"ae2:calculation_processor"
      }
    ],
    "recipe_book_tab": "meals",
    "result": {
      "id": "ae2:void_card"
    }
})
event.remove({output:"ae2:redstone_card"})
event.custom({
  "type": "farmersdelight:cooking",
  "container": {
    "count": 1,
    "id": "ae2:basic_card"
    },
    "cookingtime": 200,
    "experience": 1.0,
    "ingredients": [
      {
        "item":"minecraft:redstone_torch"
      }
    ],
    "recipe_book_tab": "meals",
    "result": {
      "id": "ae2:redstone_card"
    }
})
event.remove({output:"ae2:crafting_card"})
event.custom({
  "type": "farmersdelight:cooking",
  "container": {
    "count": 1,
    "id": "ae2:basic_card"
    },
    "cookingtime": 200,
    "experience": 1.0,
    "ingredients": [
      {
        "item":"minecraft:crafting_table"
      }
    ],
    "recipe_book_tab": "meals",
    "result": {
      "id": "ae2:crafting_card"
    }
})
event.remove({output:"ae2:capacity_card"})
event.custom({
  "type": "farmersdelight:cooking",
  "container": {
    "count": 1,
    "id": "ae2:basic_card"
    },
    "cookingtime": 200,
    "experience": 1.0,
    "ingredients": [
      {
        "tag":"c:gems/certus_quartz"
      }
    ],
    "recipe_book_tab": "meals",
    "result": {
      "id": "ae2:capacity_card"
    }
})
event.remove({output:"ae2:basic_card"})
event.custom({
  "type": "farmersdelight:cooking",
  "container": {
    "count": 1,
    "id": "ae2:calculation_processor"
    },
    "cookingtime": 200,
    "experience": 1.0,
    "ingredients": [
      {
        "item":"minecraft:iron_ingot"
      },
      {
        "item":"minecraft:iron_ingot"
      },
      {
        "item":"minecraft:iron_ingot"
      },
      {
        "item":"minecraft:gold_ingot"
      },
      {
        "item":"minecraft:redstone"
      },
      {
        "item":"minecraft:gold_ingot"
      }
    ],
    "recipe_book_tab": "meals",
    "result": {
      "id": "ae2:basic_card"
    }
})
event.remove({output:"ae2:equal_distribution_card"}) //上級カード
event.custom({
  "type": "farmersdelight:cooking",
  "container": {
    "count": 1,
    "id": "ae2:advanced_card"
    },
    "cookingtime": 200,
    "experience": 1.0,
    "ingredients": [
      {
        "item":"ae2:calculation_processor"
      }
    ],
    "recipe_book_tab": "meals",
    "result": {
      "id": "ae2:equal_distribution_card"
    }
})
event.remove({output:"ae2:inverter_card"})
event.custom({
  "type": "farmersdelight:cooking",
  "container": {
    "count": 1,
    "id": "ae2:advanced_card"
    },
    "cookingtime": 200,
    "experience": 1.0,
    "ingredients": [
      {
        "item":"minecraft:redstone_torch"
      }
    ],
    "recipe_book_tab": "meals",
    "result": {
      "id": "ae2:inverter_card"
    }
})
event.remove({output:"ae2:speed_card"})
event.custom({
  "type": "farmersdelight:cooking",
  "container": {
    "count": 1,
    "id": "ae2:advanced_card"
    },
    "cookingtime": 200,
    "experience": 1.0,
    "ingredients": [
      {
        "item":"ae2:fluix_crystal"
      }
    ],
    "recipe_book_tab": "meals",
    "result": {
      "id": "ae2:speed_card"
    }
})
event.remove({output:"ae2:fuzzy_card"})
event.custom({
  "type": "farmersdelight:cooking",
  "container": {
    "count": 1,
    "id": "ae2:advanced_card"
    },
    "cookingtime": 200,
    "experience": 1.0,
    "ingredients": [
      {
        "tag":"minecraft:wool"
      }
    ],
    "recipe_book_tab": "meals",
    "result": {
      "id": "ae2:fuzzy_card"
    }
})
event.remove({output:"ae2:energy_card"})
event.custom({
  "type": "farmersdelight:cooking",
  "container": {
    "count": 1,
    "id": "ae2:advanced_card"
    },
    "cookingtime": 200,
    "experience": 1.0,
    "ingredients": [
      {
        "item":"ae2:energy_cell"
      }
    ],
    "recipe_book_tab": "meals",
    "result": {
      "id": "ae2:energy_card"
    }
})
event.remove({output:"ae2:advanced_card"})
event.custom({
  "type": "farmersdelight:cooking",
  "container": {
    "count": 1,
    "id": "ae2:calculation_processor"
    },
    "cookingtime": 200,
    "experience": 1.0,
    "ingredients": [
      {
        "item":"minecraft:iron_ingot"
      },
      {
        "item":"minecraft:iron_ingot"
      },
      {
        "item":"minecraft:iron_ingot"
      },
      {
        "item":"minecraft:diamond"
      },
      {
        "item":"minecraft:redstone"
      },
      {
        "item":"minecraft:diamond"
      }
    ],
    "recipe_book_tab": "meals",
    "result": {
      "id": "ae2:advanced_card"
    }
})
event.remove({output:"ae2:wireless_receiver"}) //無線受信機
event.custom({
  "type": "farmersdelight:cooking",
  "container": {
    "count": 1,
    "id": "ae2:fluix_pearl"
    },
    "cookingtime": 200,
    "experience": 1.0,
    "ingredients": [
      {
        "item":"minecraft:iron_ingot"
      },
      {
        "item":"ae2:quartz_fiber"
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
      "id": "ae2:wireless_receiver"
    }
})
event.remove({output:"ae2:wireless_booster"}) //無線ブースター
event.custom({
  "type": "farmersdelight:cooking",
    "cookingtime": 200,
    "experience": 1.0,
    "ingredients": [
      {
        "item":"ae2:ender_dust"
      },
      {
        "tag":"c:gems/certus_quartz"
      },
      {
        "item":"ae2:fluix_dust"
      },
      {
        "item":"minecraft:iron_ingot"
      },
      {
        "item":"minecraft:iron_ingot"
      },
      {
        "item":"minecraft:iron_ingot"
      },
    ],
    "recipe_book_tab": "meals",
    "result": {
      "id": "ae2:wireless_booster"
    }
})
event.remove({output:"ae2:wireless_terminal"}) //無線ターミナル
event.custom({
  "type": "farmersdelight:cooking",
    "cookingtime": 200,
    "experience": 1.0,
    "ingredients": [
      {
        "item":"ae2:wireless_receiver"
      },
      {
        "item":"ae2:terminal"
      },
      {
        "item":"ae2:dense_energy_cell"
      }
    ],
    "recipe_book_tab": "meals",
    "result": {
      "id": "ae2:wireless_terminal"
    }
})
event.remove({output:"ae2:wireless_crafting_terminal"}) //無線クラフトターミナル
event.custom({
  "type": "farmersdelight:cooking",
    "cookingtime": 200,
    "experience": 1.0,
    "ingredients": [
      {
        "item":"ae2:wireless_terminal"
      },
      {
        "item":"minecraft:crafting_table"
      },
      {
        "item":"ae2:calculation_processor"
      }
    ],
    "recipe_book_tab": "meals",
    "result": {
      "id": "ae2:wireless_crafting_terminal"
    }
})
event.remove({output:"ae2:blank_pattern"}) //パターン
event.custom({
  "type": "farmersdelight:cooking",
  "container": {
    "count": 1,
    "id": "ae2:certus_quartz_crystal"
    },
    "cookingtime": 200,
    "experience": 1.0,
    "ingredients": [
      {
        "item":"ae2:quartz_glass"
      },
      {
        "item":"minecraft:glowstone_dust"
      },
      {
        "item":"ae2:quartz_glass"
      },
      {
        "item":"minecraft:iron_ingot"
      },
      {
        "item":"minecraft:copper_ingot"
      },
      {
        "item":"minecraft:iron_ingot"
      }
    ],
    "recipe_book_tab": "meals",
    "result": {
      "id": "ae2:blank_pattern"
    }
})
event.remove({output:"ae2:cell_workbench"}) //セルベンチワーク
event.custom({
  "type": "farmersdelight:cooking",
  "container": {
    "count": 1,
    "id": "ae2:calculation_processor"
    },
    "cookingtime": 200,
    "experience": 1.0,
    "ingredients": [
      {
        "tag":"minecraft:wool"
      },
      {
        "tag":"c:chests/wooden"
      },
      {
        "tag":"minecraft:wool"
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
      "id": "ae2:cell_workbench"
    }
})
})