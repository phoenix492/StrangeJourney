// Most things are handled by the block/item tag unifiers, these
// are for new tags and items that are missing both
let banisterIds = [
	'twilightforest:twilight_oak_banister',
	'twilightforest:canopy_banister',
	'twilightforest:mangrove_banister',
	'twilightforest:dark_banister',
	'twilightforest:time_banister',
	'twilightforest:transformation_banister',
	'twilightforest:mining_banister',
	'twilightforest:sorting_banister',
	'twilightforest:oak_banister',
	'twilightforest:spruce_banister',
	'twilightforest:birch_banister',
	'twilightforest:jungle_banister',
	'twilightforest:acacia_banister',
	'twilightforest:dark_oak_banister',
	'twilightforest:crimson_banister',
	'twilightforest:warped_banister',
	'twilightforest:vangrove_banister',
	'twilightforest:bamboo_banister',
	'twilightforest:cherry_banister'
]

let chuteIds = [
	'immersiveengineering:chute_iron',
	'immersiveengineering:chute_steel',
	'immersiveengineering:chute_aluminum',
	'immersiveengineering:chute_copper'
]

let boardwalkIds = [
	'tropicraft:bamboo_boardwalk',
	'tropicraft:palm_boardwalk',
	'tropicraft:mahogany_boardwalk',
	'tropicraft:mangrove_boardwalk'
]

let fenceGateIds = [
	'#forge:fence_gates',	
	'witherstormmod:tainted_fence_gate'
]	

let stairIds = [
	'absentbydesign:stairs_smooth_stone',
	'absentbydesign:stairs_concrete_purple',
	'absentbydesign:stairs_wool_purple',
	'sgjourney:naquadah_stairs',
	'sgjourney:cut_naquadah_stairs',
	'undergarden:depthrock_stairs',
	'undergarden:polished_depthrock_stairs',
	'undergarden:depthrock_brick_stairs',
	'undergarden:depthrock_tile_stairs',
	'undergarden:shiverstone_stairs',
	'undergarden:shiverstone_brick_stairs',
	'undergarden:cloggrum_tile_stairs',
	'create:copper_shingle_stairs',
	'create:exposed_copper_shingle_stairs',
	'create:weathered_copper_shingle_stairs',
	'create:oxidized_copper_shingle_stairs',
	'create:waxed_copper_shingle_stairs',
	'create:waxed_exposed_copper_shingle_stairs',
	'create:waxed_weathered_copper_shingle_stairs',
	'create:waxed_oxidized_copper_shingle_stairs',
	'create:copper_tile_stairs',
	'create:exposed_copper_tile_stairs',
	'create:weathered_copper_tile_stairs',
	'create:oxidized_copper_tile_stairs',
	'create:waxed_copper_tile_stairs',
	'create:waxed_exposed_copper_tile_stairs',
	'create:waxed_weathered_copper_tile_stairs',
	'create:waxed_oxidized_copper_tile_stairs',
	'betterarcheology:rotten_stairs',
	'betterarcheology:cracked_mud_brick_stairs',
	'createdieselgenerators:chip_wood_stairs',
	'createdieselgenerators:asphalt_stairs',
	'ae2:sky_stone_stairs',
	'ae2:smooth_sky_stone_stairs',
	'ae2:sky_stone_brick_stairs',
	'ae2:sky_stone_small_brick_stairs',
	'ae2:fluix_stairs',
	'ae2:quartz_stairs',
	'ae2:cut_quartz_stairs',
	'ae2:smooth_quartz_stairs',
	'ae2:quartz_brick_stairs',
	'ae2:chiseled_quartz_stairs',
	'ae2:quartz_pillar_stairs',
	'createdeco:andesite_catwalk_stairs',
	'createdeco:brass_catwalk_stairs',
	'createdeco:iron_catwalk_stairs',
	'createdeco:industrial_iron_catwalk_stairs',
	'createdeco:copper_catwalk_stairs',
	'createdeco:zinc_catwalk_stairs',
	'createdeco:umber_brick_stairs',
	'createdeco:short_umber_brick_stairs',
	'createdeco:tiled_umber_brick_stairs',
	'createdeco:long_umber_brick_stairs',
	'createdeco:corner_umber_brick_stairs',
	'createdeco:cracked_umber_brick_stairs',
	'createdeco:mossy_umber_brick_stairs',
	'createdeco:red_brick_stairs',
	'createdeco:short_red_brick_stairs',
	'createdeco:tiled_red_brick_stairs',
	'createdeco:long_red_brick_stairs',
	'createdeco:corner_red_brick_stairs',
	'createdeco:cracked_red_brick_stairs',
	'createdeco:mossy_red_brick_stairs',
	'createdeco:scarlet_brick_stairs',
	'createdeco:short_scarlet_brick_stairs',
	'createdeco:tiled_scarlet_brick_stairs',
	'createdeco:long_scarlet_brick_stairs',
	'createdeco:corner_scarlet_brick_stairs',
	'createdeco:cracked_scarlet_brick_stairs',
	'createdeco:mossy_scarlet_brick_stairs',
	'createdeco:blue_brick_stairs',
	'createdeco:short_blue_brick_stairs',
	'createdeco:tiled_blue_brick_stairs',
	'createdeco:long_blue_brick_stairs',
	'createdeco:corner_blue_brick_stairs',
	'createdeco:cracked_blue_brick_stairs',
	'createdeco:mossy_blue_brick_stairs',
	'createdeco:pearl_brick_stairs',
	'createdeco:short_pearl_brick_stairs',
	'createdeco:tiled_pearl_brick_stairs',
	'createdeco:long_pearl_brick_stairs',
	'createdeco:corner_pearl_brick_stairs',
	'createdeco:cracked_pearl_brick_stairs',
	'createdeco:mossy_pearl_brick_stairs',
	'createdeco:dusk_brick_stairs',
	'createdeco:short_dusk_brick_stairs',
	'createdeco:tiled_dusk_brick_stairs',
	'createdeco:long_dusk_brick_stairs',
	'createdeco:corner_dusk_brick_stairs',
	'createdeco:cracked_dusk_brick_stairs',
	'createdeco:mossy_dusk_brick_stairs',
	'createdeco:verdant_brick_stairs',
	'createdeco:short_verdant_brick_stairs',
	'createdeco:tiled_verdant_brick_stairs',
	'createdeco:long_verdant_brick_stairs',
	'createdeco:corner_verdant_brick_stairs',
	'createdeco:cracked_verdant_brick_stairs',
	'createdeco:mossy_verdant_brick_stairs',
	'createdeco:dean_brick_stairs',
	'createdeco:short_dean_brick_stairs',
	'createdeco:tiled_dean_brick_stairs',
	'createdeco:long_dean_brick_stairs',
	'createdeco:corner_dean_brick_stairs',
	'createdeco:cracked_dean_brick_stairs',
	'createdeco:mossy_dean_brick_stairs',
	'deep_aether:roseroot_stairs',
	'deep_aether:yagroot_stairs',
	'deep_aether:cruderoot_stairs',
	'deep_aether:conberry_stairs',
	'deep_aether:sunroot_stairs',
	'deep_aether:mossy_holystone_brick_stairs',
	'deep_aether:mossy_holystone_tile_stairs',
	'deep_aether:gilded_holystone_brick_stairs',
	'deep_aether:gilded_holystone_tile_stairs',
	'deep_aether:blightmoss_holystone_brick_stairs',
	'deep_aether:blightmoss_holystone_tile_stairs',
	'deep_aether:holystone_tile_stairs',
	'deep_aether:big_holystone_bricks_stairs',
	'deep_aether:cobbled_aseterite_stairs',
	'deep_aether:aseterite_stairs',
	'deep_aether:polished_aseterite_stairs',
	'deep_aether:asterite_bricks_stairs',
	'deep_aether:raw_clorite_stairs',
	'deep_aether:clorite_stairs',
	'deep_aether:polished_clorite_stairs',
	'deep_aether:aether_mud_bricks_stairs'
]

let slabIds = [
	'absentbydesign:slab_concrete_yellow',
	'sgjourney:naquadah_slab',
	'sgjourney:cut_naquadah_slab',
	'undergarden:depthrock_slab',
	'undergarden:polished_depthrock_slab',
	'undergarden:depthrock_brick_slab',
	'undergarden:depthrock_tile_slab',
	'undergarden:shiverstone_slab',
	'undergarden:shiverstone_brick_slab',
	'undergarden:cloggrum_tile_slab',
	'create:copper_shingle_slab',
	'create:exposed_copper_shingle_slab',
	'create:weathered_copper_shingle_slab',
	'create:oxidized_copper_shingle_slab',
	'create:waxed_copper_shingle_slab',
	'create:waxed_exposed_copper_shingle_slab',
	'create:waxed_weathered_copper_shingle_slab',
	'create:waxed_oxidized_copper_shingle_slab',
	'create:copper_tile_slab',
	'create:exposed_copper_tile_slab',
	'create:weathered_copper_tile_slab',
	'create:oxidized_copper_tile_slab',
	'create:waxed_copper_tile_slab',
	'create:waxed_exposed_copper_tile_slab',
	'create:waxed_weathered_copper_tile_slab',
	'create:waxed_oxidized_copper_tile_slab',
	'betterarcheology:cracked_mud_brick_slab',
	'bloodmagic:dungeon_brick_slab',
	'bloodmagic:dungeon_tile_slab',
	'integrateddynamics:crystalized_menril_block_slab',
	'integrateddynamics:crystalized_menril_brick_slab',
	'integrateddynamics:crystalized_chorus_block_slab',
	'integrateddynamics:crystalized_chorus_brick_slab',
	'createdieselgenerators:chip_wood_slab',
	'createdieselgenerators:asphalt_slab',
	'ae2:sky_stone_slab',
	'ae2:smooth_sky_stone_slab',
	'ae2:sky_stone_brick_slab',
	'ae2:sky_stone_small_brick_slab',
	'ae2:fluix_slab',
	'ae2:quartz_slab',
	'ae2:cut_quartz_slab',
	'ae2:smooth_quartz_slab',
	'ae2:quartz_brick_slab',
	'ae2:chiseled_quartz_slab',
	'ae2:quartz_pillar_slab',
	'createdeco:umber_brick_slab',
	'createdeco:short_umber_brick_slab',
	'createdeco:tiled_umber_brick_slab',
	'createdeco:long_umber_brick_slab',
	'createdeco:corner_umber_brick_slab',
	'createdeco:cracked_umber_brick_slab',
	'createdeco:mossy_umber_brick_slab',
	'createdeco:red_brick_slab',
	'createdeco:short_red_brick_slab',
	'createdeco:tiled_red_brick_slab',
	'createdeco:long_red_brick_slab',
	'createdeco:corner_red_brick_slab',
	'createdeco:cracked_red_brick_slab',
	'createdeco:mossy_red_brick_slab',
	'createdeco:scarlet_brick_slab',
	'createdeco:short_scarlet_brick_slab',
	'createdeco:tiled_scarlet_brick_slab',
	'createdeco:long_scarlet_brick_slab',
	'createdeco:corner_scarlet_brick_slab',
	'createdeco:cracked_scarlet_brick_slab',
	'createdeco:mossy_scarlet_brick_slab',
	'createdeco:blue_brick_slab',
	'createdeco:short_blue_brick_slab',
	'createdeco:tiled_blue_brick_slab',
	'createdeco:long_blue_brick_slab',
	'createdeco:corner_blue_brick_slab',
	'createdeco:cracked_blue_brick_slab',
	'createdeco:mossy_blue_brick_slab',
	'createdeco:pearl_brick_slab',
	'createdeco:short_pearl_brick_slab',
	'createdeco:tiled_pearl_brick_slab',
	'createdeco:long_pearl_brick_slab',
	'createdeco:corner_pearl_brick_slab',
	'createdeco:cracked_pearl_brick_slab',
	'createdeco:mossy_pearl_brick_slab',
	'createdeco:dusk_brick_slab',
	'createdeco:short_dusk_brick_slab',
	'createdeco:tiled_dusk_brick_slab',
	'createdeco:long_dusk_brick_slab',
	'createdeco:corner_dusk_brick_slab',
	'createdeco:cracked_dusk_brick_slab',
	'createdeco:mossy_dusk_brick_slab',
	'createdeco:verdant_brick_slab',
	'createdeco:short_verdant_brick_slab',
	'createdeco:tiled_verdant_brick_slab',
	'createdeco:long_verdant_brick_slab',
	'createdeco:corner_verdant_brick_slab',
	'createdeco:cracked_verdant_brick_slab',
	'createdeco:mossy_verdant_brick_slab',
	'createdeco:dean_brick_slab',
	'createdeco:short_dean_brick_slab',
	'createdeco:tiled_dean_brick_slab',
	'createdeco:long_dean_brick_slab',
	'createdeco:corner_dean_brick_slab',
	'createdeco:cracked_dean_brick_slab',
	'createdeco:mossy_dean_brick_slab',
	'deep_aether:mossy_holystone_brick_slab',
	'deep_aether:mossy_holystone_tile_slab',
	'deep_aether:gilded_holystone_brick_slab',
	'deep_aether:gilded_holystone_tile_slab',
	'deep_aether:blightmoss_holystone_brick_slab',
	'deep_aether:blightmoss_holystone_tile_slab',
	'deep_aether:holystone_tile_slab',
	'deep_aether:big_holystone_bricks_slab',
	'deep_aether:cobbled_aseterite_slab',
	'deep_aether:aseterite_slab',
	'deep_aether:polished_aseterite_slab',
	'deep_aether:asterite_bricks_slab',
	'deep_aether:raw_clorite_slab',
	'deep_aether:clorite_slab',
	'deep_aether:polished_clorite_slab',
	'deep_aether:aether_mud_bricks_slab',
	'occultism:otherstone_slab'
]

let foliageCarpetIds = [
	'minecraft:moss_carpet',
	'quark:oak_leaf_carpet',
	'quark:spruce_leaf_carpet',
	'quark:birch_leaf_carpet',
	'quark:jungle_leaf_carpet',
	'quark:acacia_leaf_carpet',
	'quark:dark_oak_leaf_carpet',
	'quark:mangrove_leaf_carpet',
	'quark:cherry_leaf_carpet',
	'quark:azalea_leaf_carpet',
	'quark:flowering_azalea_leaf_carpet',
	'quark:ancient_leaf_carpet',
	'quark:blue_blossom_leaf_carpet',
	'quark:lavender_blossom_leaf_carpet',
	'quark:orange_blossom_leaf_carpet',
	'quark:yellow_blossom_leaf_carpet',
	'quark:red_blossom_leaf_carpet',
	'blue_skies:sea_moss_carpet',
	'quark:bamboo_mat_carpet',
	'aether_redux:blightmoss_carpet',
	'deep_aether:aether_moss_carpet',
	'aether_redux:fungal_carpet'
]

let carpetIds = [
]

let paneIds = [
	'witherstormmod:tainted_glass_pane',
	'quark:red_corundum_pane',
	'quark:orange_corundum_pane',
	'quark:yellow_corundum_pane',
	'quark:green_corundum_pane',
	'quark:blue_corundum_pane',
	'quark:indigo_corundum_pane',
	'quark:violet_corundum_pane',
	'quark:white_corundum_pane',
	'quark:black_corundum_pane',
	'hexerei:stone_window_pane',
	'hexerei:waxed_stone_window_pane',
	'forbidden_arcanus:deorum_glass_pane'
]

ServerEvents.tags('item', event => {

	function tagBanisters(id) {
		event.add('twilightforest:banisters', id)
	}
	function tagChutes(id) {
		event.add('immersiveengineering:chutes', id)
	}
	function tagBoardwalks(id) {
		event.add('tropicraft:boardwalks', id)
	}
	function tagFenceGates(id) {
		event.add('minecraft:fence_gates', id)
	}	
	function tagFoliageCarpets(id) {
		event.add('strangejourney:foliage_carpets', id)
	}
	function tagStairs(id) {
		event.add('minecraft:stairs', id)
	}
	function tagSlabs(id) {
		event.add('minecraft:slabs', id)
	}

	function tagPanes(id) {
		event.add('forge:glass_panes', id)
	}

	function tagCarpets(id) {
		event.add('minecraft:wool_carpets', id)
	}
	

	// New tags
	banisterIds.forEach( id => { tagBanisters(id) })
	foliageCarpetIds.forEach(id => { tagFoliageCarpets(id) })
	chuteIds.forEach( id => { tagChutes(id) })
	boardwalkIds.forEach ( id => { tagBoardwalks(id) })

	// Corrections not handled by unifiers
	fenceGateIds.forEach( id => { tagFenceGates(id) })
	stairIds.forEach( id => {tagStairs(id) })
	slabIds.forEach( id => {tagSlabs(id) })
	paneIds.forEach( id => {tagPanes(id) })
	carpetIds.forEach( id => {tagCarpets(id) })

	// Tag unifiers
	event.add('minecraft:stairs', Block.getTaggedIds('minecraft:stairs').toArray())
	event.add('minecraft:slabs', Block.getTaggedIds('minecraft:slabs').toArray())
	event.add('minecraft:fences', Block.getTaggedIds('minecraft:fences').toArray())
	event.add('minecraft:walls', Block.getTaggedIds('minecraft:walls').toArray())
	event.add('minecraft:fence_gates', Block.getTaggedIds('minecraft:fence_gates').toArray())
	event.add('minecraft:wool_carpets', Block.getTaggedIds('minecraft:wool_carpets').toArray())
	event.add('twilightforest:hollow_logs', Block.getTaggedIds('twilightforest:hollow_logs').toArray())

	// Single entries

})

// Duplicates of new tags 
ServerEvents.tags('block', event=> {

	function tagBanisters(id) {
		event.add('twilightforest:banisters', id)
	}
	function tagChutes(id) {
		event.add('immersiveengineering:chutes', id)
	}
	function tagBoardwalks(id) {
		event.add('tropicraft:boardwalks', id)
	}
	function tagFenceGates(id) {
		event.add('minecraft:fence_gates', id)
	}	
	function tagFoliageCarpets(id) {
		event.add('strangejourney:foliage_carpets', id)
	}
	function tagStairs(id) {
		event.add('minecraft:stairs', id)
	}
	function tagSlabs(id) {
		event.add('minecraft:slabs', id)
	}

	function tagPanes(id) {
		event.add('forge:glass_panes', id)
	}

	function tagCarpets(id) {
		event.add('minecraft:wool_carpets', id)
	}
	

	// New tags
	banisterIds.forEach( id => { tagBanisters(id) })
	foliageCarpetIds.forEach(id => { tagFoliageCarpets(id) })
	chuteIds.forEach( id => { tagChutes(id) })
	boardwalkIds.forEach ( id => { tagBoardwalks(id) })

	// Corrections not handled by unifiers
	fenceGateIds.forEach( id => { tagFenceGates(id) })
	stairIds.forEach( id => {tagStairs(id) })
	slabIds.forEach( id => {tagSlabs(id) })
	paneIds.forEach( id => {tagPanes(id) })
	carpetIds.forEach( id => {tagCarpets(id) })

})
