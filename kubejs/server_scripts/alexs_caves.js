ServerEvents.tags('item', event => {
    event.remove('forge:raw_materials/uranium', 'alexscaves:uranium')
    event.remove('forge:storage_blocks/uranium', 'alexscaves:block_of_uranium')
    event.add('forge:ores/redstone', 'alexscaves:guanostone_redstone_ore')
    event.add('forge:ores/coal', 'alexscaves:coprolith_coal_ore')
})

ServerEvents.tags('block', event => {
    event.remove('forge:storage_blocks/uranium', 'alexscaves:block_of_uranium')
    event.remove('forge:ores/uranium', 'alexscaves:radrock_uranium_ore')
    event.add('forge:ores/redstone', 'alexscaves:guanostone_redstone_ore')
    event.add('forge:ores/coal', 'alexscaves:coprolith_coal_ore')
})
