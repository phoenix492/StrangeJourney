let needsInfo = [
	'sophisticatedstorage:chest',
	'sophisticatedstorage:iron_chest',
	'sophisticatedstorage:gold_chest',
	'sophisticatedstorage:diamond_chest',
	'sophisticatedstorage:netherite_chest',
	'sophisticatedstorage:barrel',
	'sophisticatedstorage:iron_barrel',
	'sophisticatedstorage:gold_barrel',
	'sophisticatedstorage:diamond_barrel',
	'sophisticatedstorage:netherite_barrel',
	'sophisticatedstorage:limited_barrel_1',
	'sophisticatedstorage:limited_iron_barrel_1',
	'sophisticatedstorage:limited_gold_barrel_1',
	'sophisticatedstorage:limited_diamond_barrel_1',
	'sophisticatedstorage:limited_netherite_barrel_1',
	'sophisticatedstorage:limited_barrel_2',
	'sophisticatedstorage:limited_iron_barrel_2',
	'sophisticatedstorage:limited_gold_barrel_2',
	'sophisticatedstorage:limited_diamond_barrel_2',
	'sophisticatedstorage:limited_netherite_barrel_2',
	'sophisticatedstorage:limited_barrel_3',
	'sophisticatedstorage:limited_iron_barrel_3',
	'sophisticatedstorage:limited_gold_barrel_3',
	'sophisticatedstorage:limited_diamond_barrel_3',
	'sophisticatedstorage:limited_netherite_barrel_3',
	'sophisticatedstorage:limited_barrel_4',
	'sophisticatedstorage:limited_iron_barrel_4',
	'sophisticatedstorage:limited_gold_barrel_4',
	'sophisticatedstorage:limited_diamond_barrel_4',
	'sophisticatedstorage:limited_netherite_barrel_4'
]
let disabled = [
	'sophisticatedbackpacks:copper_backpack',
	'sophisticatedstorage:copper_barrel',
	'sophisticatedstorage:copper_chest',
	'sophisticatedstorage:limited_copper_barrel_1',
	'sophisticatedstorage:limited_copper_barrel_2',
	'sophisticatedstorage:limited_copper_barrel_3',
	'sophisticatedstorage:limited_copper_barrel_4',
	'sophisticatedstorage:shulker_box',
	'sophisticatedstorage:iron_shulker_box',
	'sophisticatedstorage:copper_shulker_box',
	'sophisticatedstorage:gold_shulker_box',
	'sophisticatedstorage:diamond_shulker_box',
	'sophisticatedstorage:netherite_shulker_box'
]

let storageUpgrades = [
	'sophisticatedstorage:pickup_upgrade',
	'sophisticatedstorage:advanced_pickup_upgrade',
	'sophisticatedstorage:filter_upgrade',
	'sophisticatedstorage:advanced_filter_upgrade',
	'sophisticatedstorage:magnet_upgrade',
	'sophisticatedstorage:advanced_magnet_upgrade',
	'sophisticatedstorage:feeding_upgrade',
	'sophisticatedstorage:advanced_feeding_upgrade',
	'sophisticatedstorage:compacting_upgrade',
	'sophisticatedstorage:advanced_compacting_upgrade',
	'sophisticatedstorage:void_upgrade',
	'sophisticatedstorage:advanced_void_upgrade',
	'sophisticatedstorage:smelting_upgrade',
	'sophisticatedstorage:auto_smelting_upgrade',
	'sophisticatedstorage:smoking_upgrade',
	'sophisticatedstorage:auto_smoking_upgrade',
	'sophisticatedstorage:blasting_upgrade',
	'sophisticatedstorage:auto_blasting_upgrade',
	'sophisticatedstorage:crafting_upgrade',
	'sophisticatedstorage:stonecutter_upgrade',
	'sophisticatedstorage:stack_upgrade_tier_1',
	'sophisticatedstorage:stack_upgrade_tier_1_plus',
	'sophisticatedstorage:stack_upgrade_tier_2',
	'sophisticatedstorage:stack_upgrade_tier_3',
	'sophisticatedstorage:stack_upgrade_tier_4',
	'sophisticatedstorage:stack_upgrade_tier_5',
	'sophisticatedstorage:jukebox_upgrade',
	'sophisticatedstorage:pump_upgrade',
	'sophisticatedstorage:advanced_pump_upgrade',
	'sophisticatedstorage:xp_pump_upgrade',
	'sophisticatedstorage:compression_upgrade',
	'sophisticatedstorage:hopper_upgrade',
	'sophisticatedstorage:advanced_hopper_upgrade',
	'sophisticatedstorage:chipped/botanist_workbench_upgrade',
	'sophisticatedstorage:chipped/glassblower_upgrade',
	'sophisticatedstorage:chipped/carpenters_table_upgrade',
	'sophisticatedstorage:chipped/loom_table_upgrade',
	'sophisticatedstorage:chipped/mason_table_upgrade',
	'sophisticatedstorage:chipped/alchemy_bench_upgrade',
	'sophisticatedstorage:chipped/tinkering_table_upgrade'
]
ServerEvents.tags('item', event => {
	needsInfo.forEach( id => {
		event.add('strangejourney:sophisticatedstorage_wood_dye', id)
	})
	disabled.forEach( id => {
		event.add('strangejourney:sophisticatedstorage_balance_disabled', id)
	})
	storageUpgrades.forEach( id => {
		event.add('strangejourney:sophisticatedstorage_balance_disabled', id)
		event.add('strangejourney:sophisticatedstorage_upgrade', id)
	})
})
ServerEvents.recipes(event => {
	event.remove({ output: 'sophisticatedbackpacks:backpack'})
	event.remove({ output: '#strangejourney:sophisticatedstorage_balance_disabled'})
	event.remove({ id: 'sophisticatedbackpacks:iron_backpack_from_copper' })
	
	event.custom({
		type: 'sophisticatedbackpacks:basic_backpack',
		pattern: [
			'SRS',
			'SCS',
			'LLL'
		],
		key: {
			"S": { "tag": "forge:string", },
			"R": { "item": "quark:ravager_hide", },
			"C": { "tag": "forge:chests/wooden", },
			"L": { "tag": "forge:leather" }
		},
		result: { "item": "sophisticatedbackpacks:backpack" }
	}).id("strangejourney:sophisticatedstorage_backpack")
})
