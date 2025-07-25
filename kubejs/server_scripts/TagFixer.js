ServerEvents.tags('item', event => {
	// Forge fights with vanilla over a tag here, quickly unify them
	event.add('minecraft:fence_gates', 'forge:fence_gates')
	// Tag unifiers
	event.add('minecraft:stairs', Block.getTaggedIds('minecraft:stairs').toArray())
	event.add('minecraft:slabs', Block.getTaggedIds('minecraft:slabs').toArray())
	event.add('minecraft:fences', Block.getTaggedIds('minecraft:fences').toArray())
	event.add('minecraft:walls', Block.getTaggedIds('minecraft:walls').toArray())
	event.add('minecraft:fence_gates', Block.getTaggedIds('minecraft:fence_gates').toArray())
	event.add('minecraft:wool_carpets', Block.getTaggedIds('minecraft:wool_carpets').toArray())
	event.add('twilightforest:hollow_logs', Block.getTaggedIds('twilightforest:hollow_logs').toArray())

})
