// Feature overlap with quark.
let hollowLogOverlapIds = [
	'twilightforest:hollow_oak_log',
	'twilightforest:hollow_spruce_log',
	'twilightforest:hollow_dark_oak_log',
	'twilightforest:hollow_acacia_log',
	'twilightforest:hollow_birch_log',
	'twilightforest:hollow_jungle_log',
	'twilightforest:hollow_crimson_stem',
	'twilightforest:hollow_warped_stem',
	'twilightforest:hollow_vangrove_log',
	'twilightforest:hollow_cherry_log',
]

ServerEvents.recipes(event => {
	hollowLogOverlapIds.forEach(id => {
		event.remove({ output: id })
	})
})

ServerEvents.tags('item', event => {
	hollowLogOverlapIds.forEach(id => {
		event.add('strangejourney:quark_overlap', id)
	})
})
