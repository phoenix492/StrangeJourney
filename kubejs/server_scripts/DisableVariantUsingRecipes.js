ServerEvents.recipes(event => {
	function stoneSlabSwap(stone_slab) {
		event.replaceInput(
			{input: stone_slab},
			stone_slab,
			'kubejs:stone_panel'
		)
	}
	// IE gets special treatment before the blanket wood replacement
	// for balance preservation
	event.replaceInput(
		{input: '#forge:treated_wood_slab' },
		'#forge:treated_wood_slab',
		'#forge:treated_wood'
	)
	event.replaceInput(
		{ input: '#minecraft:wooden_slabs' },
		'#minecraft:wooden_slabs',
		'kubejs:wooden_panel'
	)
	event.replaceInput(
		{ input: '#minecraft:fences' },
		'#minecraft:fences',
		'#forge:rods/wooden'
	)
	event.shaped(
		Item.of('kubejs:wooden_panel', 6),
		[
			'PPP'
		],
		{
			P: '#minecraft:planks'
		}
	)
	event.shaped(
		Item.of('kubejs:stone_panel', 6),
		[
			'CCC'
		],
		{
			C: '#minecraft:stone_crafting_materials'
		}
	)
	stoneSlabSwap('minecraft:stone_slab')
	stoneSlabSwap('minecraft:smooth_stone_slab')
	stoneSlabSwap('minecraft:polished_andesite_stairs')
	stoneSlabSwap('create:polished_cut_andesite_stairs')
	stoneSlabSwap('minecraft:polished_granite_stairs')
	stoneSlabSwap('create:polished_cut_granite_stairs')
	stoneSlabSwap('minecraft:polished_diorite_stairs')
	stoneSlabSwap('create:polished_cut_diorite_stairs')
	stoneSlabSwap('minecraft:polished_deepslate_stairs')
	stoneSlabSwap('create:polished_cut_deepslate_stairs')
	stoneSlabSwap('create:polished_cut_dripstone_stairs')
	stoneSlabSwap('create:polished_cut_tuff_stairs')
	stoneSlabSwap('create:polished_cut_calcite_stairs')
	stoneSlabSwap('create:polished_cut_limestone_stairs')
	stoneSlabSwap('create:polished_cut_scoria_stairs')
	stoneSlabSwap('create:polished_cut_scorchia_stairs')
	stoneSlabSwap('create:polished_cut_crimsite_stairs')
	stoneSlabSwap('create:polished_cut_ochrum_stairs')
	stoneSlabSwap('create:polished_cut_veridium_stairs')
	stoneSlabSwap('create:polished_cut_asurine_stairs')

	//Once we've adjusted any recipes that use slabs that we need, we can just 
	//blanket remove any that are left
	event.remove({ input: '#minecraft:slabs' })

	// Leftover "slab combo" recipes
	event.remove({ id: 'mowziesmobs:painted_acacia_block_from_slab' })
	event.remove({ id: 'minecraft:bamboo_mosaic' })
	event.shaped(
		Item.of('minecraft:bamboo_mosaic', 4),
		[
			' P ',
			'P P',
			' P '
		],
		{
			P: 'minecraft:bamboo_planks'
		}
	)
})

