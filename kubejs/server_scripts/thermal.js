// Feature overlap with quark.
let crateOverlapIds = [
	'thermal:apple_block',
	'thermal:carrot_block',
	'thermal:potato_block',
	'thermal:beetroot_block'
]

ServerEvents.recipes(event => {
	crateOverlapIds.forEach(id => {
		event.remove({ output: id })
		event.remove({ input: id})
	})
})

ServerEvents.tags('item', event => {
	crateOverlapIds.forEach(id => {
		event.add('strangejourney:quark_overlap', id)
	})
})
