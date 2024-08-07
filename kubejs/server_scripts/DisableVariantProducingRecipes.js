let disableRecipeIds = [	
	'alexsmobs:bison_carpet',
	'hexerei:infused_fabric_carpet_ornate',
	'hexerei:waxed_infused_fabric_carpet_ornate',
	'hexerei:infused_fabric_carpet',
	'hexerei:waxed_infused_fabric_carpet',
	'deep_aether:roseroot_stairs',
	'deep_aether:yagroot_stairs',
	'deep_aether:cruderoot_stairs',
	'deep_aether:conberry_stairs',
	'deep_aether:sunroot_stairs',
	'deep_aether:roseroot_slab',
	'deep_aether:yagroot_slab',
	'deep_aether:cruderoot_slab',
	'deep_aether:conberry_slab',
	'deep_aether:sunroot_slab',
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
	'deep_aether:aseterite_bricks_stairs',
	'deep_aether:raw_clorite_stairs',
	'deep_aether:clorite_stairs',
	'deep_aether:polished_clorite_stairs',
	'deep_aether:aether_mud_bricks_stairs',
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
	'deep_aether:aseterite_bricks_slab',
	'deep_aether:raw_clorite_slab',
	'deep_aether:clorite_slab',
	'deep_aether:polished_clorite_slab',
	'deep_aether:aether_mud_bricks_slab'
]
let disableRecipeTags = [
	'#minecraft:stairs',
	'#minecraft:slabs',
	'#minecraft:slab',
	'#quark:vertical_slabs',
	'#minecraft:fence_gates',
	'#minecraft:fences',
	'#minecraft:walls',
	'#quark:hollow_logs',
	'#forge:glass_panes',
	'#twilightforest:banisters',
	'#strangejourney:foliage_carpets',
	'#quark:posts'
]

let enabledRecipeTags = [
	'#minecraft:wool_carpets'
]

let strippedDisableRecipeTags = disableRecipeTags.map(tag => {
	return tag.replace(/#/g, '')
})

let strippedEnabledRecipeTags = enabledRecipeTags.map(tag => {
	return tag.replace(/#/g, '')
})

ServerEvents.tags('item', event => {

	disableRecipeIds.forEach(id => {
		event.add('strangejourney:variant_crafting_disabled', id)
	})

	strippedDisableRecipeTags.forEach(tag => {
		var taggedBlocks = Block.getTaggedIds(tag).toArray().filter(item => {
			if( Item.of(item).getMod().equals('framedblocks') ||
					item.toString().includes('mogmoss_rug') ||
					item.toString().includes('mesh_fence')
			) {
				return false
			}
			return true
		})
		event.add('strangejourney:variant_crafting_disabled', taggedBlocks)
	})

	enabledRecipeTags.forEach(tag => {
		event.add('strangejourney:variant_crafting_enabled', tag)
	})

})

ServerEvents.recipes(event => {
	event.remove({output:'#strangejourney:variant_crafting_disabled'})	
})

