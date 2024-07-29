let disabledMessage = "\u00a7cCrafting disabled! Please use Quark's Variant Selector."
let disabledInstructions = "\u00a7cConvert this to its parent block by dropping it in the world."
let enabledMessage = "\u00a7cCrafting of this variant has been left enabled to preserve functionality."
let enabledWarning = "\u00a7cDropping it in the world will result in it being converted to its parent block!"
let quarkOverlapMessage = "\u00a7cDisabled to avoid overlap with Quark."
let chippedTableMessage = "\u00a7aVariant block display has been disabled in EMI, but the tables still work!"
<<<<<<< Updated upstream
let balanceDisabledMessage = "\u00a7cCrafting disabled for balance purposes."
let sophisticatedStorageWoodMessage = "\u00a7aWood used affects resulting color."
let sophisticatedStorageDyeMessage = "\u00a7aCan be dyed!"
=======
>>>>>>> Stashed changes

ItemEvents.tooltip(event => {
	event.add('#strangejourney:chipped_table', chippedTableMessage)	
	event.add('#strangejourney:quark_overlap', quarkOverlapMessage)
	event.add('#strangejourney:variant_crafting_disabled', disabledMessage)
	event.add('#strangejourney:variant_crafting_disabled', disabledInstructions)
	event.add('#strangejourney:variant_crafting_enabled', enabledMessage)
	event.add('#strangejourney:variant_crafting_enabled', enabledWarning)
	event.add('#strangejourney:sophisticatedstorage_balance_disabled', balanceDisabledMessage)
	event.add('#strangejourney:sophisticatedstorage_wood_dye', sophisticatedStorageWoodMessage)
	event.add('#strangejourney:sophisticatedstorage_wood_dye', sophisticatedStorageDyeMessage)

})
