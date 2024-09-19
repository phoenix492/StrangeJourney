let matchNetheriteArmorTiers = [
    'voidscape:voidic_crystal',
    'voidscape:corrupt',
    'voidscape:titanite',
    'voidscape:ichor',
]

ItemEvents.modification(event => {

    // Functions to quickly set armor toughness and KB resistance
    function matchNetherite(i) {
        event.modify( i, item => {
            item.armorToughness = 3 
            item.armorKnockbackResistance = 0.1
        })
    }
    function netheritePlus1(i) {
        event.modify( i, item => {
            item.armorToughness = 4
            item.armorKnockbackResistance = 0.15
        })
    }
    
    matchNetheriteArmorTiers.forEach(tier => {
        matchNetherite(tier + '_helmet')
        matchNetherite(tier + '_chest')
        matchNetherite(tier + '_legs')
        matchNetherite(tier + '_boots')
    })
    
    netheritePlus1('voidscape:astral_helmet')
    netheritePlus1('voidscape:astral_chest')
    netheritePlus1('voidscape:astral_legs')
    netheritePlus1('voidscape:astral_boots')

    // Now the actual armor values, which is different for each piece
    matchNetheriteArmorTiers.forEach(tier => {
        event.modify(tier + '_helmet', item => {
            item.armorProtection = 3
        })
        event.modify(tier + '_boots', item => {
            item.armorProtection = 3
        })
        event.modify(tier + '_chest', item => {
            item.armorProtection = 8
        })
        event.modify(tier + '_legs', item => {
            item.armorProtection = 6
        })
    })

    // Now Astral
    event.modify('voidscape:astral_helmet', item => {
        item.armorProtection = 4
    })
    event.modify('voidscape:astral_chest', item => {
        item.armorProtection = 9
    })
    event.modify('voidscape:astral_legs', item => {
        item.armorProtection = 7
    })
    event.modify('voidscape:astral_helm', item => {
        item.armorProtection = 4
    })

})
