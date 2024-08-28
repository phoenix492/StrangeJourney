ServerEvents.recipes( event => {
    event.shaped(
        Item.of('create_new_age:magnetite_block', 1),
        [
            'ISI',
            'SIS',
            'ISI'
        ],
        {
            I: 'minecraft:iron_nugget',
            S: 'minecraft:stone'
        }
    )
})

ServerEvents.tags( 'item', event => {
    event.add('forge:ores/thorium', 'create_new_age:thorium_ore')
    event.add('forge:raw_materials/thorium', 'create_new_age:thorium')
})
