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
            item.setArmorToughness(3)
            item.setArmorKnockbackResistance(0.1)
        })
    }
    function netheritePlus1(i) {
        event.modify( i, item => {
            item.setArmorToughness(4)
            item.setArmorKnockbackResistance(0.15)
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
            item.setArmorProtection(3)
        })
        event.modify(tier + '_boots', item => {
            item.setArmorProtection(3)
        })
        event.modify(tier + '_chest', item => {
            item.setArmorProtection(8)
        })
        event.modify(tier + '_legs', item => {
            item.setArmorProtection(6)
        })
    })

    // Now Astral
    event.modify('voidscape:astral_helmet', item => {
        item.setArmorProtection(4)
    })
    event.modify('voidscape:astral_chest', item => {
        item.setArmorProtection(9)
    })
    event.modify('voidscape:astral_legs', item => {
        item.setArmorProtection(7)
    })
    event.modify('voidscape:astral_helm', item => {
        item.setArmorProtection(4)
    })

})
