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
})



