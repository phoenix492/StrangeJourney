ServerEvents.recipes(event => {
	event.remove({ output: '#witherstormmod:command_block_tools' })
	event.smithing(
		'witherstormmod:command_block_sword',
		'minecraft:nether_star',
		'minecraft:diamond_sword',
		'witherstormmod:command_block_book'
	)
})
