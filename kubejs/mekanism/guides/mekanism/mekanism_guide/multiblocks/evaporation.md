---
navigation:
  title: 加温蒸発濃縮プラント
  icon: "mekanism:thermal_evaporation_controller"
  parent: mekanism:multiblocks.md
  position: 5
item_ids:
  - mekanism:thermal_evaporation_controller
  - mekanism:thermal_evaporation_block
  - mekanism:thermal_evaporation_valve
---

# 加温蒸発濃縮プラント
## 加温蒸発濃縮プラント
<GameScene interactive={true} zoom="2">
  <ImportStructure src="../assets/machines/evaporation.snbt" />
</GameScene>
<Row>
<RecipeFor id="mekanism:thermal_evaporation_controller"/>
<RecipeFor id="mekanism:thermal_evaporation_block"/>
</Row>
<RecipeFor id="mekanism:thermal_evaporation_valve"/>
加温蒸発濃縮プラントは液体を濃縮させることができる機械です。  
[抵抗型発熱機]()を加温蒸発濃縮バルブにつけて加熱させたり、[発展型太陽光発電機]()をつけることで加熱することもできます。  
<GameScene interactive={true} zoom="2">
  <ImportStructure src="../assets/machines/evaporation_solar.snbt" />
</GameScene>

最大サイズは横縦4x4/上は18ブロックが最大です。  
最大 **4x18x4**までの大きさにすることが可能です。