let variantDisabledMessage = "\u00a7cCrafting disabled! Please use Quark's Variant Selector."
let variantDisabledInstructions = "\u00a7cConvert this to its parent block by dropping it in the world."
let variantEnabledMessage = "\u00a7cCrafting of this variant has been left \u00a7aenabled \u00a7cto preserve functionality."
let variantEnabledWarning = "\u00a7cDropping it in the world will result in it being converted to its parent block!"
let hiddenMessage = "\u00a7cThis item has been hidden from EMI."
let overlapMessage = "\u00a7cDisabled to avoid cross-mod overlap."
let chippedTableMessage = "\u00a7aChipped blocks have been hidden in EMI, but the tables still work!"
let balanceDisabledMessage = "\u00a7cCrafting disabled for balance purposes."
let sophisticatedStorageWoodMessage = "\u00a7aWood used affects resulting color."
let sophisticatedStorageDyeMessage = "\u00a7aCan be dyed!"
let portalDisabledMessage = "\u00a7cDisabled as part of disabling non-stargate travel."

ItemEvents.tooltip(event => {
	event.add('#strangejourney:chipped_table', chippedTableMessage)	
	event.add('#strangejourney:mod_overlap', overlapMessage)
	event.add('#strangejourney:variant_crafting_disabled', variantDisabledMessage)
	event.add('#strangejourney:variant_crafting_disabled', variantDisabledInstructions)
	event.add('#strangejourney:variant_crafting_enabled', variantEnabledMessage)
	event.add('#strangejourney:variant_crafting_enabled', variantEnabledWarning)
	event.add('#strangejourney:sophisticatedstorage_balance_disabled', balanceDisabledMessage)
	event.add('#strangejourney:sophisticatedstorage_wood_dye', sophisticatedStorageWoodMessage)
	event.add('#strangejourney:sophisticatedstorage_wood_dye', sophisticatedStorageDyeMessage)
	event.add('tropicraft:pina_colada', portalDisabledMessage) 
	event.add('undergarden:catalyst', portalDisabledMessage)
	event.add('#c:hidden_from_recipe_viewers', hiddenMessage)
})
