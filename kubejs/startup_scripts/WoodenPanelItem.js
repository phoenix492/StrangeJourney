StartupEvents.registry('item', event=> {
	event.create('wooden_panel')
			 .maxStackSize(64)
			 .burnTime(150)
			 .tooltip('\u00a7aTakes the place of wooden variant blocks in crafting recipes!')
			 .tag('strangejourney:ingredient_replacements')
			 .translationKey('item.strangejourney.wooden_panel')
			 .displayName('Wooden Panel')
})
