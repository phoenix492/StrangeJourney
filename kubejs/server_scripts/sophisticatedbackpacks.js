ServerEvents.recipes(event => {
	event.replaceInput(
		{ mod: 'sophisticatedbackpacks' },
		'minecraft:leather',
		'quark:ravager_hide'
	)
	event.remove({ output: 'sophisticatedbackpacks:backpack'})
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
