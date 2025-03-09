---
navigation:
  title: ボイラー
  icon: "mekanism:boiler_valve"
  parent: mekanism:multiblocks.md
  position: 2
item_ids:
  - mekanism:boiler_valve
---

# ボイラー
## ボイラー
<Column alignItems="center">
<GameScene interactive={true} zoom="2">
  <ImportStructure src="../assets/machines/boiler.snbt" />
</GameScene>
</Column>
<Row>
<RecipeFor id="mekanism:boiler_valve"/>
<RecipeFor id="mekanism:boiler_casing"/>
</Row>
<Row>
<RecipeFor id="mekanism:superheating_element"/>
<RecipeFor id="mekanism:pressure_disperser"/>
</Row>
<RecipeFor id="mekanism:structural_glass"/>

ボイラーは熱を移動させられるマルチブロックです。
最大**18x18x18**までの大きさにすることが可能です。

---

例:  
→搬入  
←搬出  

---

過熱されたナトリウム→  
水→  
ナトリウム←  
水蒸気←  

---

