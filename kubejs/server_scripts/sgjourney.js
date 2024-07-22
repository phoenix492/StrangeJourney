ServerEvents.recipes(event => {
	event.remove({ output: 'sgjourney:archeology_table' })
	event.shaped(
		Item.of('sgjourney:archeology_table', 1),
		[
			'A B',
			'CCC',
			'D D'
		],
		{
			A: 'minecraft:cartography_table',
			B: 'minecraft:brush',
			C: 'kubejs:wooden_panel',
			D: '#forge:rods/wooden'
		}
	)
	event.shaped(
		Item.of('sgjourney:golden_idol', 1),
		[
			' A ',
			'BBB',
			' B '
		],
		{
			A: 'minecraft:gold_block',
			B: 'minecraft:gold_ingot'
		}
	)
})
