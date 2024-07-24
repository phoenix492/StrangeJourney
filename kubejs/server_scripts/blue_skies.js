ServerEvents.recipes(event => {
    event.shaped(
        Item.of('blue_skies:blue_journal', 1),
        [
            ' C ',
            'CBC',
            ' C '
        ],
        {
            C: '#blue_skies:cobblestone',
            B: 'minecraft:book'
        }
    )
})
