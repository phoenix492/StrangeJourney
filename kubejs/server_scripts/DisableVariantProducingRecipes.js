let disableRecipeIds = [	
	'alexsmobs:bison_carpet',
	'hexerei:infused_fabric_carpet_ornate',
	'hexerei:waxed_infused_fabric_carpet_ornate',
	'hexerei:infused_fabric_carpet',
	'hexerei:waxed_infused_fabric_carpet'
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
				item.toString().includes('mogmoss_rug') 
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

