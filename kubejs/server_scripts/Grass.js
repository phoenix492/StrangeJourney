let removedSeeds = [
    "occultism:datura_seeds",
    "immersiveengineering:seed",
    "hexerei:sage_seed",
    "actuallyadditions:rice_seeds",
    "actuallyadditions:canola_seeds",
    "actuallyadditions:flax_seeds"
]
LootJS.modifiers(event => {
    removedSeeds.forEach(seed => {
        event.addBlockLootModifier("minecraft:grass").removeLoot(seed)
        event.addBlockLootModifier("minecraft:tall_grass").removeLoot(seed)
    })
})
