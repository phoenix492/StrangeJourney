let removedSeeds = [
    "occultism:datura_seeds",
    "immersiveengineering:seed",
    "hexerei:sage_seed"
]
LootJS.modifiers(event => {
    removedSeeds.forEach(seed => {
        event.addBlockLootModifier("minecraft:grass").removeLoot(seed)
        event.addBlockLootModifier("minecraft:tall_grass").removeLoot(seed)
    })
})
