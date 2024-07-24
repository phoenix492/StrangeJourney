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
ServerEvents.tags('item', event => {
	needsInfo.forEach( id => {
		event.add('strangejourney:sophisticatedstorage_wood_dye', id)
	})
	disabled.forEach( id => {
		event.add('strangejourney:sophisticatedstorage_balance_disabled', id)
	})
})
ServerEvents.recipes(event => {
	event.replaceInput(
		{ mod: 'sophisticatedbackpacks' },
		'minecraft:leather',
		'quark:ravager_hide'
	)
	event.remove({ output: 'sophisticatedbackpacks:backpack'})
	event.remove({ output: '#strangejourney:sophisticatedstorage_balance_disabled'})
	
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
	})
})
