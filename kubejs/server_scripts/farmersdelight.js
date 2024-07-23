// Feature overlap with quark.
let produceCrateOverlapIds = [
	'farmersdelight:potato_crate',
	'farmersdelight:beetroot_crate',
	'farmersdelight:carrot_crate',
]

ServerEvents.recipes(event => {
	produceCrateOverlapIds.forEach(id => {
		event.remove({ output: id })
	})
})

ServerEvents.tags('item', event => {
	produceCrateOverlapIds.forEach(id => {
		event.add('strangejourney:quark_overlap', id)
	})
})
