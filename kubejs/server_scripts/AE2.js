ServerEvents.recipes(event => {
event.remove({output:'ae2:network_tool'})
event.custom({
        "type": "farmersdelight:cooking",
        "cookingtime": 0,
        "experience": 1.0,
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
        "cookingtime": 0,
        "experience": 1.0,
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
  "cookingtime": 0,
  "experience": 1.0,
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
        "cookingtime": 0,
        "experience": 1.0,
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
        "cookingtime": 0,
        "experience": 1.0,
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
event.remove({output:"ae2:chest"}) //MEチェスト
event.custom({
  "type": "farmersdelight:cooking",
  "container": {
    "count": 1,
    "id": "ae2:terminal"
    },
    "cookingtime": 200,
    "experience": 1.0,
    "ingredients": [
      {
        "item":"ae2:fluix_glass_cable"
      },
      {
        "tag":"c:glass_blocks"
      },
      {
        "item":"ae2:fluix_glass_cable"
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
      "id": "ae2:chest"
    }
})
event.remove({output:"ae2:interface"}) //MEインターフェース
event.custom({
  "type": "farmersdelight:cooking",
    "cookingtime": 200,
    "experience": 1.0,
    "ingredients": [
      {
        "item":"ae2:annihilation_core"
      },
      {
        "tag":"c:glass_blocks"
      },
      {
        "item":"ae2:formation_core"
      },
      {
        "item":"minecraft:iron_ingot"
      },
      {
        "tag":"c:glass_blocks"
      },
      {
        "item":"minecraft:iron_ingot"
      }
    ],
    "recipe_book_tab": "meals",
    "result": {
      "id": "ae2:interface"
    }
})
event.remove({output:"ae2:io_port"}) //ME入出力ポート
event.custom({
  "type": "farmersdelight:cooking",
    "cookingtime": 200,
    "experience": 1.0,
    "ingredients": [
      {
        "item":"ae2:drive"
      },
      {
        "item":"ae2:fluix_glass_cable"
      },
      {
        "item":"ae2:drive"
      },
      {
        "item":"minecraft:iron_ingot"
      },
      {
        "item":"ae2:logic_processor"
      },
      {
        "item":"minecraft:iron_ingot"
      }
    ],
    "recipe_book_tab": "meals",
    "result": {
      "id": "ae2:io_port"
    }
})
event.remove({output:"ae2:vibration_chamber"}) //火力発電機
event.custom({
  "type": "farmersdelight:cooking",
  "container": {
    "count": 1,
    "id": "ae2:fluix_crystal"
    },
    "cookingtime": 200,
    "experience": 1.0,
    "ingredients": [
      {
        "item":"minecraft:copper_ingot"
      },
      {
        "item":"minecraft:furnace"
      },
      {
        "item":"minecraft:copper_ingot"
      },
      {
        "item":"minecraft:iron_ingot"
      },
      {
        "item":"ae2:energy_acceptor"
      },
      {
        "item":"minecraft:iron_ingot"
      }
    ],
    "recipe_book_tab": "meals",
    "result": {
      "id": "ae2:vibration_chamber"
    }
})
event.remove({output:"ae2:drive"}) //MEドライブ
event.custom({
  "type": "farmersdelight:cooking",
    "cookingtime": 200,
    "experience": 1.0,
    "ingredients": [
      {
        "item":"ae2:fluix_glass_cable"
      },
      {
        "item":"ae2:engineering_processor"
      },
      {
        "item":"ae2:fluix_glass_cable"
      },
      {
        "item":"minecraft:iron_ingot"
      },
      {
        "item":"ae2:engineering_processor"
      },
      {
        "item":"minecraft:iron_ingot"
      }
    ],
    "recipe_book_tab": "meals",
    "result": {
      "id": "ae2:drive"
    }
})
event.remove({output:"ae2:quantum_link"}) //クァンタムリンクチェンバー
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
        "item":"ae2:quartz_glass"
      },
      {
        "item":"ae2:fluix_pearl"
      },
      {
        "item":"ae2:quartz_glass"
      },
      {
        "item":"ae2:fluix_pearl"
      },
      {
        "item":"ae2:quartz_glass"
      },
      {
        "item":"ae2:fluix_pearl"
      }
    ],
    "recipe_book_tab": "meals",
    "result": {
      "id": "ae2:quantum_link"
    }
})
event.remove({output:"ae2:quantum_ring"}) //クァンタムリング
event.custom({
  "type": "farmersdelight:cooking",
  "container": {
    "count": 1,
    "id": "ae2:logic_processor"
    },
    "cookingtime": 200,
    "experience": 1.0,
    "ingredients": [
      {
        "item":"minecraft:iron_ingot"
      },
      {
        "item":"ae2:logic_processor"
      },
      {
        "item":"minecraft:iron_ingot"
      },
      {
        "item":"ae2:engineering_processor"
      },
      {
        "item":"ae2:energy_cell"
      },
      {
        "tag":"ae2:smart_dense_cable"
      }
    ],
    "recipe_book_tab": "meals",
    "result": {
      "id": "ae2:quantum_ring"
    }
})
event.remove({output:"ae2:crystal_resonance_generator"}) //クリスタルレゾナンスジェネレーター
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
        "item":"minecraft:copper_ingot"
      },
      {
        "item":"ae2:fluix_block"
      },
      {
        "item":"minecraft:copper_ingot"
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
      "id": "ae2:crystal_resonance_generator"
    }
})
event.remove({output:"ae2:crank"}) //木のクランク
event.custom({
  "type": "farmersdelight:cooking",
    "cookingtime": 200,
    "experience": 1.0,
    "ingredients": [
      {
        "item":"minecraft:stick"
      },
      {
        "item":"minecraft:stick"
      },
      {
        "item":"minecraft:stick"
      },
      {
        "item":"minecraft:copper_ingot"
      }
    ],
    "recipe_book_tab": "meals",
    "result": {
      "id": "ae2:crank"
    }
})
event.remove({output:"ae2:spatial_anchor"}) //空間アンカー
event.custom({
  "type": "farmersdelight:cooking",
  "container": {
    "count": 1,
    "id": "ae2:engineering_processor"
    },
    "cookingtime": 200,
    "experience": 1.0,
    "ingredients": [
      {
        "item":"ae2:spatial_pylon"
      },
      {
        "item":"ae2:spatial_pylon"
      },
      {
        "item":"ae2:spatial_pylon"
      },
      {
        "item":"ae2:fluix_glass_cable"
      },
      {
        "item":"ae2:spatial_cell_component_128"
      },
      {
        "item":"ae2:fluix_glass_cable"
      }
    ],
    "recipe_book_tab": "meals",
    "result": {
      "id": "ae2:spatial_anchor"
    }
})
event.remove({output:"ae2:molecular_assembler"}) //分子組立機
event.custom({
  "type": "farmersdelight:cooking",
    "cookingtime": 200,
    "experience": 1.0,
    "ingredients": [
      {
        "item":"minecraft:iron_ingot"
      },
      {
        "item":"ae2:quartz_glass"
      },
      {
        "item":"minecraft:iron_ingot"
      },
      {
        "item":"ae2:annihilation_core"
      },
      {
        "item":"minecraft:crafting_table"
      },
      {
        "item":"ae2:formation_core"
      }
    ],
    "recipe_book_tab": "meals",
    "result": {
      "id": "ae2:molecular_assembler"
    }
})
event.remove({output:"ae2:pattern_provider"}) //MEパターンブロバイダー
event.custom({
  "type": "farmersdelight:cooking",
    "cookingtime": 200,
    "experience": 1.0,
    "ingredients": [
      {
        "item":"minecraft:iron_ingot"
      },
      {
        "item":"minecraft:crafting_table"
      },
      {
        "item":"minecraft:iron_ingot"
      },
      {
        "item":"ae2:annihilation_core"
      },
      {
        "item":"minecraft:crafting_table"
      },
      {
        "item":"ae2:formation_core"
      }
    ],
    "recipe_book_tab": "meals",
    "result": {
      "id": "ae2:pattern_provider"
    }
})
event.remove({output:"ae2:crafting_unit"}) //クラフトユニット
event.custom({
  "type": "farmersdelight:cooking",
    "cookingtime": 200,
    "experience": 1.0,
    "ingredients": [
      {
        "item":"minecraft:iron_ingot"
      },
      {
        "item":"ae2:calculation_processor"
      },
      {
        "item":"minecraft:iron_ingot"
      },
      {
        "item":"ae2:fluix_glass_cable"
      },
      {
        "item":"ae2:logic_processor"
      },
      {
        "item":"ae2:fluix_glass_cable"
      }
    ],
    "recipe_book_tab": "meals",
    "result": {
      "id": "ae2:crafting_unit"
    }
})
event.remove({output:"ae2:crafting_accelerator"}) //並列クラフトユニット
event.custom({
  "type": "farmersdelight:cooking",
  "container": {
    "count": 1,
    "id": "ae2:crafting_unit"
    },
    "cookingtime": 200,
    "experience": 1.0,
    "ingredients": [
      {
        "item":"ae2:engineering_processor"
      },
    ],
    "recipe_book_tab": "meals",
    "result": {
      "id": "ae2:crafting_accelerator"
    }
})
event.remove({output:"ae2:1k_crafting_storage"}) //クラフトストレージ
event.custom({
  "type": "farmersdelight:cooking",
  "container": {
    "count": 1,
    "id": "ae2:crafting_unit"
    },
    "cookingtime": 200,
    "experience": 1.0,
    "ingredients": [
      {
        "item":"ae2:cell_component_1k"
      },
    ],
    "recipe_book_tab": "meals",
    "result": {
      "id": "ae2:1k_crafting_storage"
    }
})
event.remove({output:"ae2:4k_crafting_storage"})
event.custom({
  "type": "farmersdelight:cooking",
  "container": {
    "count": 1,
    "id": "ae2:crafting_unit"
    },
    "cookingtime": 200,
    "experience": 1.0,
    "ingredients": [
      {
        "item":"ae2:cell_component_4k"
      },
    ],
    "recipe_book_tab": "meals",
    "result": {
      "id": "ae2:4k_crafting_storage"
    }
})
event.remove({output:"ae2:16k_crafting_storage"})
event.custom({
  "type": "farmersdelight:cooking",
  "container": {
    "count": 1,
    "id": "ae2:crafting_unit"
    },
    "cookingtime": 200,
    "experience": 1.0,
    "ingredients": [
      {
        "item":"ae2:cell_component_16k"
      },
    ],
    "recipe_book_tab": "meals",
    "result": {
      "id": "ae2:16k_crafting_storage"
    }
})
event.remove({output:"ae2:64k_crafting_storage"})
event.custom({
  "type": "farmersdelight:cooking",
  "container": {
    "count": 1,
    "id": "ae2:crafting_unit"
    },
    "cookingtime": 200,
    "experience": 1.0,
    "ingredients": [
      {
        "item":"ae2:cell_component_64k"
      },
    ],
    "recipe_book_tab": "meals",
    "result": {
      "id": "ae2:64k_crafting_storage"
    }
})
event.remove({output:"ae2:256k_crafting_storage"})
event.custom({
  "type": "farmersdelight:cooking",
  "container": {
    "count": 1,
    "id": "ae2:crafting_unit"
    },
    "cookingtime": 200,
    "experience": 1.0,
    "ingredients": [
      {
        "item":"ae2:cell_component_256k"
      },
    ],
    "recipe_book_tab": "meals",
    "result": {
      "id": "ae2:256k_crafting_storage"
    }
})
event.remove({output:"ae2:crafting_monitor"})
event.custom({
  "type": "farmersdelight:cooking",
  "container": {
    "count": 1,
    "id": "ae2:crafting_unit"
    },
    "cookingtime": 200,
    "experience": 1.0,
    "ingredients": [
      {
        "item":"ae2:storage_monitor"
      },
    ],
    "recipe_book_tab": "meals",
    "result": {
      "id": "ae2:crafting_monitor"
    }
})
event.remove({output:"ae2:tiny_tnt"}) //極小TNT
event.custom({
  "type": "farmersdelight:cooking",
  "container": {
    "count": 1,
    "id": "ae2:crafting_unit"
    },
    "cookingtime": 200,
    "experience": 1.0,
    "ingredients": [
      {
        "item":"ae2:certus_quartz_dust"
      },
      {
        "item":"minecraft:gunpowder"
      },
      {
        "item":"minecraft:gunpowder"
      },
      {
        "item":"ae2:certus_quartz_dust"
      }
    ],
    "recipe_book_tab": "meals",
    "result": {
      "id": "ae2:tiny_tnt"
    }
})
event.remove({output:"ae2:inscriber"}) //刻印機
event.custom({
  "type": "farmersdelight:cooking",
  "container": {
    "count": 1,
    "id": "minecraft:copper_ingot"
    },
    "cookingtime": 200,
    "experience": 1.0,
    "ingredients": [
      {
        "item":"minecraft:iron_ingot"
      },
      {
        "item":"minecraft:piston"
      },
      {
        "item":"minecraft:iron_ingot"
      },
      {
        "item":"minecraft:iron_ingot"
      },
      {
        "item":"minecraft:piston"
      },
      {
        "item":"minecraft:iron_ingot"
      },
    ],
    "recipe_book_tab": "meals",
    "result": {
      "id": "ae2:inscriber"
    }
})
event.remove({output:"ae2:wireless_access_point"}) //ME無線アクセスポイント
event.custom({
  "type": "farmersdelight:cooking",
    "cookingtime": 200,
    "experience": 1.0,
    "ingredients": [
      {
        "item":"ae2:wireless_receiver"
      },
      {
        "item":"ae2:calculation_processor"
      },
      {
        "item":"ae2:fluix_glass_cable"
      },
    ],
    "recipe_book_tab": "meals",
    "result": {
      "id": "ae2:wireless_access_point"
    }
})
event.remove({output:"ae2:charger"}) //チャージャー
event.custom({
  "type": "farmersdelight:cooking",
    "cookingtime": 200,
    "experience": 1.0,
    "ingredients": [
      {
        "item":"minecraft:iron_ingot"
      },
      {
        "item":"minecraft:copper_ingot"
      },
      {
        "item":"minecraft:iron_ingot"
      },
      {
        "item":"minecraft:iron_ingot"
      },
      {
        "item":"minecraft:copper_ingot"
      },
      {
        "item":"minecraft:iron_ingot"
      },
    ],
    "recipe_book_tab": "meals",
    "result": {
      "id": "ae2:charger"
    }
})
event.remove({output:"ae2:dense_energy_cell"}) //濃縮エナジーセル
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
        "item":"ae2:energy_cell"
      },
      {
        "item":"ae2:energy_cell"
      },
      {
        "item":"ae2:energy_cell"
      },
      {
        "item":"ae2:energy_cell"
      },
      {
        "item":"ae2:energy_cell"
      },
      {
        "item":"ae2:energy_cell"
      }
    ],
    "recipe_book_tab": "meals",
    "result": {
      "id": "ae2:dense_energy_cell"
    }
})
event.remove({output:"ae2:energy_cell"}) //エナジーセル
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
        "tag":"c:gems/certus_quartz"
      },
      {
        "item":"ae2:fluix_dust"
      },
      {
        "item":"ae2:quartz_glass"
      },
      {
        "item":"ae2:fluix_dust"
      }
    ],
    "recipe_book_tab": "meals",
    "result": {
      "id": "ae2:energy_cell"
    }
})
event.remove({output:"ae2:spatial_io_port"}) //空間入出力ポート
event.custom({
  "type": "farmersdelight:cooking",
    "cookingtime": 200,
    "experience": 1.0,
    "ingredients": [
      {
        "tag":"c:glass_blocks"
      },
      {
        "tag":"c:glass_blocks"
      },
      {
        "tag":"c:glass_blocks"
      },
      {
        "item":"ae2:fluix_glass_cable"
      },
      {
        "item":"ae2:io_port"
      },
      {
        "item":"ae2:fluix_glass_cable"
      }
    ],
    "recipe_book_tab": "meals",
    "result": {
      "id": "ae2:spatial_io_port"
    }
})
event.remove({output:"ae2:energy_acceptor"}) //エナジーアクセプター
event.custom({
  "type": "farmersdelight:cooking",
  "container": {
    "count": 1,
    "id": "minecraft:copper_ingot"
    },
    "cookingtime": 200,
    "experience": 1.0,
    "ingredients": [
      {
        "item":"minecraft:iron_ingot"
      },
      {
        "item":"ae2:quartz_glass"
      },
      {
        "item":"minecraft:iron_ingot"
      },
      {
        "item":"ae2:quartz_glass"
      },
      {
        "item":"minecraft:iron_ingot"
      },
      {
        "item":"ae2:quartz_glass"
      }
    ],
    "recipe_book_tab": "meals",
    "result": {
      "id": "ae2:energy_acceptor"
    }
})
event.remove({output:"ae2:condenser"}) //マターコンデンサー
event.custom({
  "type": "farmersdelight:cooking",
  "container": {
    "count": 1,
    "id": "ae2:fluix_dust"
    },
    "cookingtime": 200,
    "experience": 1.0,
    "ingredients": [
      {
        "item":"minecraft:iron_ingot"
      },
      {
        "tag":"c:glass_blocks"
      },
      {
        "item":"minecraft:iron_ingot"
      },
      {
        "tag":"c:glass_blocks"
      },
      {
        "item":"minecraft:iron_ingot"
      },
      {
        "tag":"c:glass_blocks"
      }
    ],
    "recipe_book_tab": "meals",
    "result": {
      "id": "ae2:condenser"
    }
})
event.remove({output:"ae2:quartz_fiber"}) //クォーツファイバー
event.custom({
  "type": "farmersdelight:cooking",
    "cookingtime": 200,
    "experience": 1.0,
    "ingredients": [
      {
        "tag":"c:glass_blocks"
      },
      {
        "tag":"c:glass_blocks"
      },
      {
        "tag":"c:glass_blocks"
      },
      {
        "item":"ae2:certus_quartz_dust"
      },
      {
        "item":"ae2:certus_quartz_dust"
      },
      {
        "item":"ae2:certus_quartz_dust"
      }
    ],
    "recipe_book_tab": "meals",
    "result": {
      "count": 3,
      "id": "ae2:quartz_fiber"
    }
})
event.remove({output:"ae2:cable_anchor"}) //ケーブルアンカー
event.custom({
  "type": "farmersdelight:cooking",
    "cookingtime": 200,
    "experience": 1.0,
    "ingredients": [
      {
        "tag":"ae2:knife"
      },
      {
        "tag":"ae2:metal_ingots"
      },
    ],
    "recipe_book_tab": "meals",
    "result": {
      "count": 3,
      "id": "ae2:cable_anchor"
    }
})
event.remove({output:"ae2:level_emitter"}) //MEレベルエミッター
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
        "item":"minecraft:redstone_torch"
      }
    ],
    "recipe_book_tab": "meals",
    "result": {
      "id": "ae2:level_emitter"
    }
})
event.remove({output:"ae2:energy_level_emitter"}) //MEエネルギーレベルエミッター
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
        "item":"minecraft:redstone_torch"
      },
      {
        "item":"ae2:charged_certus_quartz_crystal"
      }
    ],
    "recipe_book_tab": "meals",
    "result": {
      "id": "ae2:energy_level_emitter"
    }
})
event.remove({output:"ae2:terminal"}) //MEターミナル
event.custom({
  "type": "farmersdelight:cooking",
    "cookingtime": 200,
    "experience": 1.0,
    "ingredients": [
      {
        "item":"ae2:formation_core"
      },
      {
        "tag":"ae2:illuminated_panel"
      },
      {
        "item":"ae2:logic_processor"
      },
      {
        "item":"ae2:annihilation_core"
      },
    ],
    "recipe_book_tab": "meals",
    "result": {
      "id": "ae2:terminal"
    }
})
event.remove({output:"ae2:pattern_access_terminal"}) //MEパターンアクセスターミナル
event.custom({
  "type": "farmersdelight:cooking",
    "cookingtime": 200,
    "experience": 1.0,
    "ingredients": [
      {
        "tag":"ae2:illuminated_panel"
      },
      {
        "item":"ae2:engineering_processor"
      },
      {
        "tag":"ae2:pattern_provider"
      },
    ],
    "recipe_book_tab": "meals",
    "result": {
      "id": "ae2:pattern_access_terminal"
    }
})
event.remove({output:"ae2:crafting_terminal"}) //MEクラフトターミナル
event.custom({
  "type": "farmersdelight:cooking",
    "cookingtime": 200,
    "experience": 1.0,
    "ingredients": [
      {
        "item":"ae2:terminal"
      },
      {
        "item":"minecraft:crafting_table"
      },
      {
        "item":"ae2:calculation_processor"
      },
    ],
    "recipe_book_tab": "meals",
    "result": {
      "id": "ae2:crafting_terminal"
    }
})
event.remove({output:"ae2:pattern_encoding_terminal"}) //MEパターンエンコーディングターミナル
event.custom({
  "type": "farmersdelight:cooking",
    "cookingtime": 200,
    "experience": 1.0,
    "ingredients": [
      {
        "item":"ae2:engineering_processor"
      },
      {
        "item":"ae2:crafting_terminal"
      }
    ],
    "recipe_book_tab": "meals",
    "result": {
      "id": "ae2:pattern_encoding_terminal"
    }
})
event.remove({output:"ae2:me_p2p_tunnel"}) //ME P2Pトンネル
event.custom({
  "type": "farmersdelight:cooking",
  "container": {
    "count": 1,
    "id": "ae2:engineering_processor"
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
        "item":"ae2:fluix_crystal"
      },
      {
        "item":"ae2:fluix_crystal"
      },
      {
        "item":"ae2:fluix_crystal"
      },
    ],
    "recipe_book_tab": "meals",
    "result": {
      "id": "ae2:me_p2p_tunnel"
    }
})
event.remove({output:"ae2:cable_energy_acceptor"}) //エネジーアクセプター
event.custom({
  "type": "farmersdelight:cooking",
    "cookingtime": 200,
    "experience": 1.0,
    "ingredients": [
      {
        "item":"ae2:energy_acceptor"
      }
    ],
    "recipe_book_tab": "meals",
    "result": {
      "id": "ae2:cable_energy_acceptor"
    }
})
event.remove({output:"ae2:export_bus"}) //ME出力バス
event.custom({
  "type": "farmersdelight:cooking",
  "container": {
    "count": 1,
    "id": "ae2:formation_core"
    },
    "cookingtime": 200,
    "experience": 1.0,
    "ingredients": [
      {
        "item":"minecraft:iron_ingot"
      },
      {
        "item":"minecraft:piston"
      },
      {
        "item":"minecraft:iron_ingot"
      }
    ],
    "recipe_book_tab": "meals",
    "result": {
      "id": "ae2:export_bus"
    }
})
event.remove({output:"ae2:import_bus"}) //MEインポートバス
event.custom({
  "type": "farmersdelight:cooking",
  "container": {
    "count": 1,
    "id": "ae2:annihilation_core"
    },
    "cookingtime": 200,
    "experience": 1.0,
    "ingredients": [
      {
        "item":"minecraft:iron_ingot"
      },
      {
        "item":"minecraft:piston"
      },
      {
        "item":"minecraft:iron_ingot"
      }
    ],
    "recipe_book_tab": "meals",
    "result": {
      "id": "ae2:import_bus"
    }
})
event.remove({output:"ae2:cable_pattern_provider"}) //MEパターンブロバイダー
event.custom({
  "type": "farmersdelight:cooking",
    "cookingtime": 200,
    "experience": 1.0,
    "ingredients": [
      {
        "item":"ae2:pattern_provider"
      },
    ],
    "recipe_book_tab": "meals",
    "result": {
      "id": "ae2:cable_pattern_provider"
    }
})
event.remove({output:"ae2:storage_monitor"}) //MEストレージモニター
event.custom({
  "type": "farmersdelight:cooking",
    "cookingtime": 200,
    "experience": 1.0,
    "ingredients": [
      {
        "item":"ae2:level_emitter"
      },
      {
        "tag":"ae2:illuminated_panel"
      }
    ],
    "recipe_book_tab": "meals",
    "result": {
      "id": "ae2:storage_monitor"
    }
})
event.remove({output:"ae2:conversion_monitor"}) //ME変換モニター
event.custom({
  "type": "farmersdelight:cooking",
    "cookingtime": 200,
    "experience": 1.0,
    "ingredients": [
      {
        "item":"ae2:formation_core"
      },
      {
        "item":"ae2:storage_monitor"
      },
      {
        "item":"ae2:annihilation_core"
      },
    ],
    "recipe_book_tab": "meals",
    "result": {
      "id": "ae2:conversion_monitor"
    }
})
event.remove({output:"ae2:formation_plane"}) //ME形成プレーン
event.custom({
  "type": "farmersdelight:cooking",
    "cookingtime": 200,
    "experience": 1.0,
    "ingredients": [
      {
        "item":"minecraft:iron_ingot"
      },
      {
        "item":"ae2:formation_core"
      },
      {
        "item":"minecraft:iron_ingot"
      },
      {
        "item":"ae2:fluix_crystal"
      },
      {
        "item":"ae2:fluix_crystal"
      },
      {
        "item":"ae2:fluix_crystal"
      },
    ],
    "recipe_book_tab": "meals",
    "result": {
      "id": "ae2:formation_plane"
    }
})
event.remove({output:"ae2:annihilation_plane"}) //ME消滅プレーン
event.custom({
  "type": "farmersdelight:cooking",
    "cookingtime": 200,
    "experience": 1.0,
    "ingredients": [
      {
        "item":"minecraft:iron_ingot"
      },
      {
        "item":"ae2:annihilation_core"
      },
      {
        "item":"minecraft:iron_ingot"
      },
      {
        "item":"ae2:fluix_crystal"
      },
      {
        "item":"ae2:fluix_crystal"
      },
      {
        "item":"ae2:fluix_crystal"
      },
    ],
    "recipe_book_tab": "meals",
    "result": {
      "id": "ae2:annihilation_plane"
    }
})
event.remove({output:"ae2:storage_bus"}) //MEストレージバス
event.custom({
  "type": "farmersdelight:cooking",
    "cookingtime": 200,
    "experience": 1.0,
    "ingredients": [
      {
        "item":"minecraft:piston"
      },
      {
        "tag":"ae2:interface"
      },
      {
        "item":"minecraft:piston"
      },
    ],
    "recipe_book_tab": "meals",
    "result": {
      "id": "ae2:storage_bus"
    }
})
})