ServerEvents.recipes(event => {
    function woolFix(color) {
        event.remove({id: 'minecraft:' + color + '_carpet'})
        event.shaped(
            Item.of('minecraft:' + color + '_carpet', 2),
            [
                'WW'
            ],
            {
                W: 'minecraft:' + color + '_wool'
            }
        )
    }
    woolFix('white')
    woolFix('light_gray')
    woolFix('gray')
    woolFix('black')
    woolFix('brown')
    woolFix('red')
    woolFix('orange')
    woolFix('yellow')
    woolFix('lime')
    woolFix('green')
    woolFix('cyan')
    woolFix('light_blue')
    woolFix('blue')
    woolFix('purple')
    woolFix('magenta')
    woolFix('pink')
})
