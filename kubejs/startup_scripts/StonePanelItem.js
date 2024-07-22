StartupEvents.registry('item', event=> {
	event.create('stone_panel')
			 .maxStackSize(64)
			 .tooltip('\u00a7aTakes the place of stone variant blocks in crafting recipes!')
			 .tag('strangejourney:ingredient_replacements')
})
