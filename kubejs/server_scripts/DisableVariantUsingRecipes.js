ServerEvents.recipes(event => {

	// Glass Panes -> Glass Blocks
	event.replaceInput(
		{ input: '#forge:glass_panes' },
		'#forge:glass_panes',
		'#forge:glass'
	)

	/* Immersive Engineering gets special treatment swapping its treated wood 
	 * variants with treated wood planks instead of just panels, since treated 
	 * wood is restricted behind a coke oven.
	*/ 
	event.replaceInput(
		{ input: '#forge:treated_wood_slab' },
		'#forge:treated_wood_slab',
		'#forge:treated_wood'
	)
	event.replaceInput(
		{ input: 'immersiveengineering:treated_fence' },
		'immersiveengineering:treated_fence',
		'immersiveengineering:stick_treated'
	)
	
	// Fences -> Sticks
	event.replaceInput(
		{ input: '#minecraft:fences' },
		'#minecraft:fences',
		'#forge:rods/wooden'
	)

	//	Remaining Variants -> Wooden Panels 
	event.replaceInput(
		{ input: '#minecraft:wooden_slabs' },
		'#minecraft:wooden_slabs',
		'kubejs:wooden_panel'
	)
	event.replaceInput(
		{ input: '#minecraft:wooden_stairs' },
		'#minecraft:wooden_stairs',
		'kubejs:wooden_panel'
	)
	// This tag technically also includes non-wooden items, but all of them are
	// from compat/completeness mods so there should be none in recipes.
	// The only recipe I've seen use these are Dark Utilites filters actually.
	event.replaceInput(
		{ input: '#minecraft:fence_gates' },
		'#minecraft:fence_gates',
		'kubejs:wooden_panel'
	)
	
	/* Most stone slab recipes are of the variety 2 slabs -> orante block, 
	 * or similar things you can just get with a stonecutter. Any slabs that have
	 * special recipes are swapped out here before the blanket removal
	 * taking care of the former
	 */
	function stoneSwap(stone_slab) {
		event.replaceInput(
			{ input: stone_slab },
			stone_slab,
			'kubejs:stone_panel'
		)
	}
	stoneSwap('minecraft:stone_slab')
	stoneSwap('minecraft:smooth_stone_slab')
	stoneSwap('minecraft:polished_andesite_stairs')
	stoneSwap('create:polished_cut_andesite_stairs')
	stoneSwap('minecraft:polished_granite_stairs')
	stoneSwap('create:polished_cut_granite_stairs')
	stoneSwap('minecraft:polished_diorite_stairs')
	stoneSwap('create:polished_cut_diorite_stairs')
	stoneSwap('minecraft:polished_deepslate_stairs')
	stoneSwap('create:polished_cut_deepslate_stairs')
	stoneSwap('create:polished_cut_dripstone_stairs')
	stoneSwap('create:polished_cut_tuff_stairs')
	stoneSwap('create:polished_cut_calcite_stairs')
	stoneSwap('create:polished_cut_limestone_stairs')
	stoneSwap('create:polished_cut_scoria_stairs')
	stoneSwap('create:polished_cut_scorchia_stairs')
	stoneSwap('create:polished_cut_crimsite_stairs')
	stoneSwap('create:polished_cut_ochrum_stairs')
	stoneSwap('create:polished_cut_veridium_stairs')
	stoneSwap('create:polished_cut_asurine_stairs')

	// This is the final blanket removal that just nukes anything unworthy of saving.
	event.remove({ input: Ingredient.of( '#strangejourney:variant_crafting_disabled' ) })
})

