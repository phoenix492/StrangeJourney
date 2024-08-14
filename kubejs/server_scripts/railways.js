// ModID, wood name (no 'planks')
let plankTracks = [
    ['minecraft', 'acacia'],
    ['minecraft', 'birch'],
    ['minecraft', 'dark_oak'],
    ['minecraft', 'jungle'],
    ['minecraft', 'oak'],
    ['minecraft', 'spruce'],
    ['minecraft', 'mangrove'],
    ['minecraft', 'cherry'],
    ['blue_skies', 'bluebright'],
    ['blue_skies', 'dusk'],
    ['blue_skies', 'frostbright'],
    ['blue_skies', 'lunar'],
    ['blue_skies', 'maple'],
    ['blue_skies', 'starlit'],
    ['twilightforest', 'canopy'],
    ['twilightforest', 'mangrove'],
    ['twilightforest', 'twilight_oak'],
    ['quark', 'blossom'],
    ['quark', 'ancient'],
    ['quark', 'azalea']
]
ServerEvents.recipes( event => {

    function fixTrackIron(mod, block, type) {
        // First we need to get the sort of "identifying part" of the name of
        // the track. It's different for vanilla woods and modded woods.
        let identifier = ''
        if ((mod+'').equals('minecraft')) {
            identifier = block
        } else {
            identifier = mod+'_'+block
        }

        // Now we remove the old recipes
        event.remove({id: 'railways:sequenced_assembly/track_' + identifier})
        event.remove({id: 'railways:sequenced_assembly/track_' + identifier + '_wide'})
        event.remove({id: 'railways:sequenced_assembly/track_' + identifier + '_narrow'})

        // Now we readd the recipes this time using correct components.
        // First, the normal rail
        
        // Variable to store transition item 
        let inter = 'railways:track_incomplete_' + identifier
        event.recipes.create.sequenced_assembly(
            // Output 
            Item.of('railways:track_' + identifier),
            // Input
            mod + ':' +block+ '_' + type,
            // Sequence steps
            [
                // Step 1
                event.recipes.create.deploying(inter, [inter, ['minecraft:iron_nugget','#forge:nuggets/zinc']]),
                // Step 2
                event.recipes.create.deploying(inter, [inter, ['minecraft:iron_nugget','#forge:nuggets/zinc']]),
                // Step 3
                event.recipes.create.pressing(inter, inter)
            ]
            // Finally set the transition item.
        ).transitionalItem(inter).loops(1)

        // Now the wide rail
        inter = 'railways:track_incomplete_' + identifier + '_wide'
        event.recipes.create.sequenced_assembly(
            Item.of('railways:track_'+identifier+'_wide'),
            'railways:track_'+identifier,
            [
                event.recipes.create.cutting(inter, inter),
                event.recipes.create.deploying(inter, [inter, [mod+':'+block+'_'+type]]),
                event.recipes.create.pressing(inter, inter)
            ]
        ).transitionalItem(inter).loops(1)

        // Finally the narrow rail
        inter = 'railways:track_incomplete_' + identifier + '_narrow'
        event.recipes.create.sequenced_assembly(
            Item.of('railways:track_'+identifier+'_narrow'),
            mod + ':' + block+ '_'+type,
            [
                event.recipes.create.cutting(inter, inter),
                event.recipes.create.deploying(inter, [inter, ['minecraft:iron_nugget','#forge:nuggets/zinc']]),
                event.recipes.create.pressing(inter, inter)
            ]
        ).transitionalItem(inter).loops(1)
    }
    // The exact same function but with gold nuggets instead of iron/zinc
    function fixTrackGold(mod, block, type) {
        let identifier = ''
        if ((mod+'').equals('minecraft')) {
            identifier = block
        } else {
            identifier = mod+'_'+block
        }
        event.remove({id: 'railways:sequenced_assembly/track_' + identifier})
        event.remove({id: 'railways:sequenced_assembly/track_' + identifier + '_wide'})
        event.remove({id: 'railways:sequenced_assembly/track_' + identifier + '_narrow'})
        let inter = 'railways:track_incomplete_' + identifier
        event.recipes.create.sequenced_assembly(
            Item.of('railways:track_' + identifier),
            mod + ':' +block+ '_' + type,
            [
                event.recipes.create.deploying(inter, [inter, ['minecraft:gold_nugget']]),
                event.recipes.create.deploying(inter, [inter, ['minecraft:gold_nugget']]),
                event.recipes.create.pressing(inter, inter)
            ]
        ).transitionalItem(inter).loops(1)
        inter = 'railways:track_incomplete_' + identifier + '_wide'
        event.recipes.create.sequenced_assembly(
            Item.of('railways:track_'+identifier+'_wide'),
            'railways:track_'+identifier,
            [
                event.recipes.create.cutting(inter, inter),
                event.recipes.create.deploying(inter, [inter, [mod+':'+block+'_'+type]]),
                event.recipes.create.pressing(inter, inter)
            ]
        ).transitionalItem(inter).loops(1)
        inter = 'railways:track_incomplete_' + identifier + '_narrow'
        event.recipes.create.sequenced_assembly(
            Item.of('railways:track_'+identifier+'_narrow'),
            mod + ':' + block+ '_'+type,
            [
                event.recipes.create.cutting(inter, inter),
                event.recipes.create.deploying(inter, [inter, ['minecraft:gold_nugget']]),
                event.recipes.create.pressing(inter, inter)
            ]
        ).transitionalItem(inter).loops(1)
    }
    
    // Primary track listing
    plankTracks.forEach(blockType => {
        fixTrackIron(blockType[0], blockType[1], 'planks')
    })

    // Nether wood tracks
    fixTrackGold('minecraft', 'warped', 'planks')
    fixTrackGold('minecraft', 'crimson', 'planks')
    
    // Ender
    event.remove({id: 'railways:sequenced_assembly/track_ender'})
    event.remove({id: 'railways:sequenced_assembly/track_ender_narrow'})
    event.remove({id: 'railways:sequenced_assembly/track_ender_wide'})
    let interEnder = 'railways:track_incomplete_ender'
    event.recipes.create.sequenced_assembly(
        Item.of('railways:track_ender'),
        'minecraft:end_stone',
        [
            event.recipes.create.deploying(interEnder, [interEnder, ['minecraft:iron_nugget', '#forge:nuggets/zinc']]),
            event.recipes.create.deploying(interEnder, [interEnder, ['minecraft:iron_nugget', '#forge:nuggets/zinc']]),
            event.recipes.create.pressing(interEnder, interEnder)
        ]
    ).transitionalItem(interEnder).loops(1)
    interEnder = 'railways:track_incomplete_ender_wide'
    event.recipes.create.sequenced_assembly(
        Item.of('railways:track_ender_wide'),
        'railways:track_ender',
        [
            event.recipes.create.cutting(interEnder, interEnder),
            event.recipes.create.deploying(interEnder, [interEnder, ['minecraft:end_stone']]),
            event.recipes.create.pressing(interEnder, interEnder)
        ]
    ).transitionalItem(interEnder).loops(1)
    interEnder = 'railways:track_incomplete_ender_narrow'
    event.recipes.create.sequenced_assembly(
        Item.of('railways:track_ender_narrow'),
        'minecraft:end_stone',
        [
            event.recipes.create.cutting(interEnder, interEnder),
            event.recipes.create.deploying(interEnder, [interEnder, ['minecraft:iron_nugget', '#forge:nuggets/zinc']]),
            event.recipes.create.pressing(interEnder, interEnder)
        ]
    ).transitionalItem(interEnder).loops(1)

    // Tieless
    event.remove({id: 'railways:sequenced_assembly/track_tieless'})
    event.remove({id: 'railways:sequenced_assembly/track_tieless_narrow'})
    event.remove({id: 'railways:sequenced_assembly/track_tieless_wide'})
    let interTieless = 'railways:track_incomplete_tieless'
    event.recipes.create.sequenced_assembly(
        Item.of('railways:track_tieless'),
        'minecraft:glass',
        [
            event.recipes.create.deploying(interTieless, [interTieless, ['minecraft:iron_nugget', '#forge:nuggets/zinc']]),
            event.recipes.create.deploying(interTieless, [interTieless, ['minecraft:iron_nugget', '#forge:nuggets/zinc']]),
            event.recipes.create.pressing(interTieless, interTieless)
        ]
    ).transitionalItem(interTieless).loops(1)
    interTieless = 'railways:track_incomplete_tieless_wide'
    event.recipes.create.sequenced_assembly(
        Item.of('railways:track_tieless_wide'),
        'railways:track_tieless',
        [
            event.recipes.create.cutting(interTieless, interTieless),
            event.recipes.create.deploying(interTieless, [interTieless, ['minecraft:glass']]),
            event.recipes.create.pressing(interTieless, interTieless)
        ]
    ).transitionalItem(interTieless).loops(1)
    interTieless = 'railways:track_incomplete_tieless_narrow'
    event.recipes.create.sequenced_assembly(
        Item.of('railways:track_tieless_narrow'),
        'minecraft:glass',
        [
            event.recipes.create.cutting(interTieless, interTieless),
            event.recipes.create.deploying(interTieless, [interTieless, ['minecraft:iron_nugget', '#forge:nuggets/zinc']]),
            event.recipes.create.pressing(interTieless, interTieless)
        ]
    ).transitionalItem(interTieless).loops(1)
    
    // Bamboo planks
    event.remove({id: 'railways:sequenced_assembly/track_stripped_bamboo'})
    event.remove({id: 'railways:sequenced_assembly/track_stripped_bamboo_wide'})
    event.remove({id: 'railways:sequenced_assembly/track_stripped_bamboo_narrow'})
    let interBamboo = 'railways:track_incomplete_stripped_bamboo'
    event.recipes.create.sequenced_assembly(
        Item.of('railways:track_stripped_bamboo'),
        'minecraft:bamboo_planks',
        [
            event.recipes.create.deploying(interBamboo, [interBamboo, ['minecraft:iron_nugget', '#forge:nuggets/zinc']]),
            event.recipes.create.deploying(interBamboo, [interBamboo, ['minecraft:iron_nugget', '#forge:nuggets/zinc']]),
            event.recipes.create.pressing(interBamboo, interBamboo)
        ]
    ).transitionalItem(interBamboo).loops(1)
    interBamboo = 'railways:track_incomplete_stripped_bamboo_wide'
    event.recipes.create.sequenced_assembly(
        Item.of('railways:track_stripped_bamboo_wide'),
        'railways:track_stripped_bamboo',
        [
            event.recipes.create.cutting(interBamboo, interBamboo),
            event.recipes.create.deploying(interBamboo, [interBamboo, ['minecraft:bamboo_planks']]),
            event.recipes.create.pressing(interBamboo, interBamboo)
        ]
    ).transitionalItem(interBamboo).loops(1)
    interBamboo = 'railways:track_incomplete_stripped_bamboo_narrow'
    event.recipes.create.sequenced_assembly(
        Item.of('railways:track_stripped_bamboo_narrow'),
        'minecraft:bamboo_planks',
        [
            event.recipes.create.cutting(interBamboo, interBamboo),
            event.recipes.create.deploying(interBamboo, [interBamboo, ['minecraft:iron_nugget', '#forge:nuggets/zinc']]),
            event.recipes.create.pressing(interBamboo, interBamboo)
        ]
    ).transitionalItem(interTieless).loops(1)
    
    // Dark planks
    event.remove({id: 'railways:sequenced_assembly/track_twilightforest_darkwood'})
    event.remove({id: 'railways:sequenced_assembly/track_twilightforest_darkwood_wide'})
    event.remove({id: 'railways:sequenced_assembly/track_twilightforest_darkwood_narrow'})
    let interDark = 'railways:track_incomplete_twilightforest_darkwood'
    event.recipes.create.sequenced_assembly(
        Item.of('railways:track_twilightforest_darkwood'),
        'twilightforest:dark_planks',
        [
            event.recipes.create.deploying(interDark, [interDark, ['minecraft:iron_nugget', '#forge:nuggets/zinc']]),
            event.recipes.create.deploying(interDark, [interDark, ['minecraft:iron_nugget', '#forge:nuggets/zinc']]),
            event.recipes.create.pressing(interDark, interDark)
        ]
    ).transitionalItem(interDark).loops(1)
    interDark = 'railways:track_incomplete_twilightforest_darkwood_wide'
    event.recipes.create.sequenced_assembly(
        Item.of('railways:track_darkwood_wide'),
        'railways:track_twilightforest_darkwood',
        [
            event.recipes.create.cutting(interDark, interDark),
            event.recipes.create.deploying(interDark, [interDark, ['twilightforest:dark_planks']]),
            event.recipes.create.pressing(interDark, interDark)
        ]
    ).transitionalItem(interDark).loops(1)
    interDark = 'railways:track_incomplete_twilightforest_darkwood_narrow'
    event.recipes.create.sequenced_assembly(
        Item.of('railways:track_twilightforest_darkwood_narrow'),
        'twilightforest:dark_planks',
        [
            event.recipes.create.cutting(interDark, interDark),
            event.recipes.create.deploying(interDark, [interDark, ['minecraft:iron_nugget', '#forge:nuggets/zinc']]),
            event.recipes.create.pressing(interDark, interDark)
        ]
    ).transitionalItem(interDark).loops(1)
    
    // Andesite
    event.remove({id: 'create:sequenced_assembly/track'})
    event.remove({id: 'railways:sequenced_assembly/track_create_andesite_narrow'})
    event.remove({id: 'railways:sequenced_assembly/track_create_andesite_wide'})
    let interAndesite = 'create:incomplete_track'
    event.recipes.create.sequenced_assembly(
        Item.of('create:track'),
        'minecraft:andesite',
        [
            event.recipes.create.deploying(interAndesite, [interAndesite, ['minecraft:iron_nugget', '#forge:nuggets/zinc']]),
            event.recipes.create.deploying(interAndesite, [interAndesite, ['minecraft:iron_nugget', '#forge:nuggets/zinc']]),
            event.recipes.create.pressing(interAndesite, interAndesite)
        ]
    ).transitionalItem(interAndesite).loops(1)
    interAndesite = 'railways:track_incomplete_create_andesite_wide'
    event.recipes.create.sequenced_assembly(
        Item.of('railways:track_create_andesite_wide'),
        'create:track',
        [
            event.recipes.create.cutting(interAndesite, interAndesite),
            event.recipes.create.deploying(interAndesite, [interAndesite, ['minecraft:andesite']]),
            event.recipes.create.pressing(interAndesite, interAndesite)
        ]
    ).transitionalItem(interAndesite).loops(1)
    interAndesite = 'railways:track_incomplete_create_andesite_narrow'
    event.recipes.create.sequenced_assembly(
        Item.of('railways:track_create_andesite_narrow'),
        'minecraft:andesite',
        [
            event.recipes.create.cutting(interAndesite, interAndesite),
            event.recipes.create.deploying(interAndesite, [interAndesite, ['minecraft:iron_nugget', '#forge:nuggets/zinc']]),
            event.recipes.create.pressing(interAndesite, interAndesite)
        ]
    ).transitionalItem(interAndesite).loops(1)

    // Blackstone
    event.remove({id: 'railways:sequenced_assembly/track_blackstone'})
    event.remove({id: 'railways:sequenced_assembly/track_blackstone_wide'})
    event.remove({id: 'railways:sequenced_assembly/track_blackstone_narrow'})
    let interBlackstone = 'railways:track_incomplete_blackstone'
    event.recipes.create.sequenced_assembly(
        Item.of('railways:track_blackstone'),
        'minecraft:blackstone',
        [
            event.recipes.create.deploying(interBlackstone, [interBlackstone, ['minecraft:gold_nugget']]),
            event.recipes.create.deploying(interBlackstone, [interBlackstone, ['minecraft:gold_nugget']]),
            event.recipes.create.pressing(interBlackstone, interBlackstone)
        ]
    ).transitionalItem(interBlackstone).loops(1)
    interBlackstone = 'railways:track_incomplete_blackstone_wide'
    event.recipes.create.sequenced_assembly(
        Item.of('railways:track_blackstone_wide'),
        'railways:track_blackstone',
        [
            event.recipes.create.cutting(interBlackstone, interBlackstone),
            event.recipes.create.deploying(interBlackstone, [interBlackstone, ['minecraft:blackstone']]),
            event.recipes.create.pressing(interBlackstone, interBlackstone)
        ]
    ).transitionalItem(interBlackstone).loops(1)
    interBlackstone = 'railways:track_incomplete_blackstone_narrow'
    event.recipes.create.sequenced_assembly(
        Item.of('railways:track_create_blackstone_narrow'),
        'minecraft:blackstone',
        [
            event.recipes.create.cutting(interBlackstone, interBlackstone),
            event.recipes.create.deploying(interBlackstone, [interBlackstone, ['minecraft:gold_nugget']]),
            event.recipes.create.pressing(interBlackstone, interBlackstone)
        ]
    ).transitionalItem(interBlackstone).loops(1)

    // Timewood
    event.remove({id: 'railways:sequenced_assembly/track_twilightforest_timewood'})
    event.remove({id: 'railways:sequenced_assembly/track_twilightforest_timewood_wide'})
    event.remove({id: 'railways:sequenced_assembly/track_twilightforest_timewood_narrow'})
    let interTime = 'railways:track_incomplete_twilightforest_timewood'
    event.recipes.create.sequenced_assembly(
        Item.of('railways:track_twilightforest_timewood'),
        'twilightforest:time_planks',
        [
            event.recipes.create.deploying(interTime, [interTime, ['minecraft:iron_nugget', '#forge:nuggets/zinc']]),
            event.recipes.create.deploying(interTime, [interTime, ['minecraft:iron_nugget', '#forge:nuggets/zinc']]),
            event.recipes.create.pressing(interTime, interTime)
        ]
    ).transitionalItem(interTime).loops(1)
    interTime = 'railways:track_incomplete_twilightforest_timewood_wide'
    event.recipes.create.sequenced_assembly(
        Item.of('railways:track_twilightforest_timewood_wide'),
        'railways:track_twilightforest_timewood',
        [
            event.recipes.create.cutting(interTime, interTime),
            event.recipes.create.deploying(interTime, [interTime, ['twilightforest:time_planks']]),
            event.recipes.create.pressing(interTime, interTime)
        ]
    ).transitionalItem(interTime).loops(1)
    interTime = 'railways:track_incomplete_twilightforest_timewood_narrow'
    event.recipes.create.sequenced_assembly(
        Item.of('railways:track_twilightforest_timewood_narrow'),
        'twilightforest:time_planks',
        [
            event.recipes.create.cutting(interTime, interTime),
            event.recipes.create.deploying(interTime, [interTime, ['minecraft:iron_nugget', '#forge:nuggets/zinc']]),
            event.recipes.create.pressing(interTime, interTime)
        ]
    ).transitionalItem(interTime).loops(1)

    // Minewood
    event.remove({id: 'railways:sequenced_assembly/track_twilightforest_minewood'})
    event.remove({id: 'railways:sequenced_assembly/track_twilightforest_minewood_wide'})
    event.remove({id: 'railways:sequenced_assembly/track_twilightforest_minewood_narrow'})
    let interMine = 'railways:track_incomplete_twilightforest_minewood'
    event.recipes.create.sequenced_assembly(
        Item.of('railways:track_twilightforest_minewood'),
        'twilightforest:mining_planks',
        [
            event.recipes.create.deploying(interMine, [interMine, ['minecraft:iron_nugget', '#forge:nuggets/zinc']]),
            event.recipes.create.deploying(interMine, [interMine, ['minecraft:iron_nugget', '#forge:nuggets/zinc']]),
            event.recipes.create.pressing(interMine, interMine)
        ]
    ).transitionalItem(interMine).loops(1)
    interMine = 'railways:track_incomplete_twilightforest_minewood_wide'
    event.recipes.create.sequenced_assembly(
        Item.of('railways:track_twilightforest_minewood_wide'),
        'railways:track_twilightforest_minewood',
        [
            event.recipes.create.cutting(interMine, interMine),
            event.recipes.create.deploying(interMine, [interMine, ['twilightforest:mining_planks']]),
            event.recipes.create.pressing(interMine, interMine)
        ]
    ).transitionalItem(interMine).loops(1)
    interMine = 'railways:track_incomplete_twilightforest_minewood_narrow'
    event.recipes.create.sequenced_assembly(
        Item.of('railways:track_twilightforest_minewood_narrow'),
        'twilightforest:mining_planks',
        [
            event.recipes.create.cutting(interMine, interMine),
            event.recipes.create.deploying(interMine, [interMine, ['minecraft:iron_nugget', '#forge:nuggets/zinc']]),
            event.recipes.create.pressing(interMine, interMine)
        ]
    ).transitionalItem(interMine).loops(1)
    
    // Transwood
    event.remove({id: 'railways:sequenced_assembly/track_twilightforest_transwood'})
    event.remove({id: 'railways:sequenced_assembly/track_twilightforest_transwood_wide'})
    event.remove({id: 'railways:sequenced_assembly/track_twilightforest_transwood_narrow'})
    let interTrans = 'railways:track_incomplete_twilightforest_transwood'
    event.recipes.create.sequenced_assembly(
        Item.of('railways:track_twilightforest_transwood'),
        'twilightforest:transformation_planks',
        [
            event.recipes.create.deploying(interTrans, [interTrans, ['minecraft:iron_nugget', '#forge:nuggets/zinc']]),
            event.recipes.create.deploying(interTrans, [interTrans, ['minecraft:iron_nugget', '#forge:nuggets/zinc']]),
            event.recipes.create.pressing(interTrans, interTrans)
        ]
    ).transitionalItem(interTrans).loops(1)
    interTrans = 'railways:track_incomplete_twilightforest_transwood_wide'
    event.recipes.create.sequenced_assembly(
        Item.of('railways:track_twilightforest_transwood_wide'),
        'railways:track_twilightforest_transwood',
        [
            event.recipes.create.cutting(interTrans, interTrans),
            event.recipes.create.deploying(interTrans, [interTrans, ['twilightforest:transformation_planks']]),
            event.recipes.create.pressing(interTrans, interTrans)
        ]
    ).transitionalItem(interTrans).loops(1)
    interTrans = 'railways:track_incomplete_twilightforest_transwood_narrow'
    event.recipes.create.sequenced_assembly(
        Item.of('railways:track_twilightforest_transwood_narrow'),
        'twilightforest:transformation_planks',
        [
            event.recipes.create.cutting(interTrans, interTrans),
            event.recipes.create.deploying(interTrans, [interTrans, ['minecraft:iron_nugget', '#forge:nuggets/zinc']]),
            event.recipes.create.pressing(interTrans, interTrans)
        ]
    ).transitionalItem(interTrans).loops(1)
    
    // Sortingwood
    event.remove({id: 'railways:sequenced_assembly/track_twilightforest_sortingwood'})
    event.remove({id: 'railways:sequenced_assembly/track_twilightforest_sortingwood_wide'})
    event.remove({id: 'railways:sequenced_assembly/track_twilightforest_sortingwood_narrow'})
    let interSort = 'railways:track_incomplete_twilightforest_sortingwood'
    event.recipes.create.sequenced_assembly(
        Item.of('railways:track_twilightforest_sortingwood'),
        'twilightforest:sorting_planks',
        [
            event.recipes.create.deploying(interSort, [interSort, ['minecraft:iron_nugget', '#forge:nuggets/zinc']]),
            event.recipes.create.deploying(interSort, [interSort, ['minecraft:iron_nugget', '#forge:nuggets/zinc']]),
            event.recipes.create.pressing(interSort, interSort)
        ]
    ).transitionalItem(interSort).loops(1)
    interSort = 'railways:track_incomplete_twilightforest_sortingwood_wide'
    event.recipes.create.sequenced_assembly(
        Item.of('railways:track_twilightforest_sortingwood_wide'),
        'railways:track_twilightforest_sortingwood',
        [
            event.recipes.create.cutting(interSort, interSort),
            event.recipes.create.deploying(interSort, [interSort, ['twilightforest:sorting_planks']]),
            event.recipes.create.pressing(interSort, interSort)
        ]
    ).transitionalItem(interSort).loops(1)
    interSort = 'railways:track_incomplete_twilightforest_sortingwood_narrow'
    event.recipes.create.sequenced_assembly(
        Item.of('railways:track_twilightforest_sortingwood_narrow'),
        'twilightforest:sorting_planks',
        [
            event.recipes.create.cutting(interSort, interSort),
            event.recipes.create.deploying(interSort, [interSort, ['minecraft:iron_nugget', '#forge:nuggets/zinc']]),
            event.recipes.create.pressing(interSort, interSort)
        ]
    ).transitionalItem(interSort).loops(1)
})
