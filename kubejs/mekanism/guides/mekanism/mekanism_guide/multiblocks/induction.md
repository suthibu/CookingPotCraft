---
navigation:
  title: インダクションマトリックス
  icon: "mekanism:induction_port"
  parent: mekanism:multiblocks.md
  position: 8
item_ids:
  - mekanism:induction_casing
  - mekanism:induction_port
---

# インダクションマトリックス
## インダクションマトリックス
<GameScene interactive={true} zoom="2">
  <ImportStructure src="../assets/machines/induction.snbt" />
</GameScene>
<Row>
<RecipeFor id="mekanism:induction_casing"/>
<RecipeFor id="mekanism:induction_port"/>
</Row>

たくさんの電力をためることのできるマルチブロックです。 
インダクションセルやインダクションプロバイダを使うことで容量や電力の入出力の速度を変えることができます。  

## インダクションセル
インダクションマトリックスの蓄電容量を増やすのに使います。
||基本インダクションセル|発展インダクションセル|精鋭インダクションセル|究極インダクションセル|
|-|-|-|-|-|
|容量|3.2 GFE|25.6 GFE|204.8 GFE|1.6 TFE|

<Row>
<ItemImage id="mekanism:basic_induction_cell" scale="2" />
<ItemImage id="mekanism:advanced_induction_cell" scale="2" />
<ItemImage id="mekanism:elite_induction_cell" scale="2" />
<ItemImage id="mekanism:ultimate_induction_cell" scale="2" />
</Row>

## インダクションプロバイダ
インダクションマトリックスのエネルギーの入出力上限を増やすのに使います。 
||基本インダクションプロバイダ|発展インダクションプロバイダ|精鋭インダクションプロバイダ|究極インダクションプロバイダ|
|-|-|-|-|-|
|出力レート|102.4 kFE|819.2 kFE|6.55 MFE|52.42 MFE|

<Row>
<ItemImage id="mekanism:basic_induction_provider" scale="2" />
<ItemImage id="mekanism:advanced_induction_provider" scale="2" />
<ItemImage id="mekanism:elite_induction_provider" scale="2" />
<ItemImage id="mekanism:ultimate_induction_provider" scale="2" />
</Row>

最大 **18x18x18**までの大きさにすることが可能です。


