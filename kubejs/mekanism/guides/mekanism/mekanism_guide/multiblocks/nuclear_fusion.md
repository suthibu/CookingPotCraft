---
navigation:
  title: 核融合炉
  icon: "mekanismgenerators:fusion_reactor_port"
  parent: mekanism:multiblocks.md
  position: 3
item_ids:
  - mekanismgenerators:fusion_reactor_port
---

# 核融合炉
## 核融合炉
<Column alignItems="center">
<GameScene interactive={true} zoom="2">
  <ImportStructure src="../assets/machines/nuclear_fusion.snbt" />
</GameScene>
</Column>
<Row>
<RecipeFor id="mekanismgenerators:fusion_reactor_port"/>
<RecipeFor id="mekanismgenerators:fusion_reactor_frame"/>
</Row>
<Row>
<RecipeFor id="mekanismgenerators:laser_focus_matrix"/>
<RecipeFor id="mekanismgenerators:reactor_glass"/>
</Row>
<RecipeFor id="mekanismgenerators:fusion_reactor_controller"/>
核融合炉は重水素と三重水素を核融合させ熱を生み出すマルチブロックです。
これ単体でも発電できますが[ボイラー](boiler.md)で熱を蒸気に変換し、[タービン](turbine.md)で発電すると効率よく発電できます。
ちなみにD-T燃料を入れれば燃焼レートを無視してどんどん効率を上げることができます。
