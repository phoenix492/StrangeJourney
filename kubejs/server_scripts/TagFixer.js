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
	'create:waxed_oxidized_copper_tile_stairs'
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
	'create:waxed_oxidized_copper_tile_slab'
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
	'quark:bamboo_mat_carpet'
]

let carpetIds = [
	'alexsmobs:bison_carpet'
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
	'hexerei:waxed_stone_window_pane'
]

ServerEvents.tags('item', event => {

	function tagBanisters(id) {
		event.add('twilightforest:banisters', id)
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

	// Corrections not handled by unifiers
	fenceGateIds.forEach( id => { tagFenceGates(id) })
	stairIds.forEach( id => {tagStairs(id) })
	slabIds.forEach( id => {tagSlabs(id) })
	paneIds.forEach( id => {tagPanes(id) })
	carpetIds.forEach( id => {tagCarpets(id) })

})
