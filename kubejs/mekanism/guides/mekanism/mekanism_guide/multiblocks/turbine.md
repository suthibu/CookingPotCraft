---
navigation:
  title: タービン
  icon: "mekanismgenerators:turbine_valve"
  parent: mekanism:multiblocks.md
  position: 1
item_ids:
  - mekanismgenerators:turbine_valve
---

# タービン
## タービン
<Column alignItems="center">
<GameScene interactive={true} zoom="0.5">
  <ImportStructure src="../assets/machines/turbine.snbt" />
</GameScene>
</Column>
<Row>
<RecipeFor id="mekanism:pressure_disperser"/>
<RecipeFor id="mekanismgenerators:turbine_casing"/>
</Row>
<Row>
<RecipeFor id="mekanismgenerators:turbine_valve"/>
<RecipeFor id="mekanismgenerators:turbine_vent"/>
</Row>
<Row>
<RecipeFor id="mekanismgenerators:saturating_condenser"/>
<RecipeFor id="mekanismgenerators:electromagnetic_coil"/>
</Row>
<Row>
<RecipeFor id="mekanismgenerators:turbine_rotor"/>
<RecipeFor id="mekanismgenerators:turbine_blade"/>
</Row>
<RecipeFor id="mekanism:structural_glass"/>
タービンは蒸気を使って発電できるマルチブロックです。
発電量は電磁コイルで決まります。電磁コイルのところを飽和凝縮機に変えると蒸気排出口から水を復水できます。
マルチブロックを組み立てるときはタービーンローターが真ん中にないといけないのでヨコxタテの大きさは奇数にしてください。
