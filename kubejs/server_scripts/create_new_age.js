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
