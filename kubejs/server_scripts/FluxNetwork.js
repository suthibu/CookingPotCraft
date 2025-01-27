ServerEvents.recipes(event => {
event.remove({output:"fluxnetworks:flux_point"}) //フラックスポイント
event.recipes.actuallyadditions.empowering(Item.of("fluxnetworks:flux_point"), "minecraft:redstone_block", [
    "fluxnetworks:flux_core",
    "fluxnetworks:flux_core",
    "fluxnetworks:flux_core",
    "fluxnetworks:flux_core",
])
.energy(10000)
.color(Color.RED.argb)
.time(60)
event.remove({output:"fluxnetworks:flux_plug"}) //フラックスプラグ
event.recipes.actuallyadditions.empowering(Item.of("fluxnetworks:flux_plug"), "fluxnetworks:flux_block", [
    "fluxnetworks:flux_core",
    "fluxnetworks:flux_core",
    "fluxnetworks:flux_core",
    "fluxnetworks:flux_core",
])
.energy(10000)
.color(Color.BLUE.argb)
.time(60)
})