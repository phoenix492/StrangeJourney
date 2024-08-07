let tameQuestMap = new Map()
tameQuestMap.set('minecraft:wolf'.toString(), '65886D41D0B29522')
tameQuestMap.set('minecraft:cat'.toString(), '70785DE84EC74A4B')
tameQuestMap.set('minecraft:horse'.toString(), '2CA79DEC5DD3289D')
tameQuestMap.set('minecraft:donkey'.toString(), '48AD009FA55E986A')
tameQuestMap.set('minecraft:mule'.toString(), '538A47257DB562C9')
tameQuestMap.set('minecraft:llama'.toString(), '0ED82086165D967D')
tameQuestMap.set('minecraft:parrot'.toString(), '5F65FD80C274540B')
tameQuestMap.set('minecraft:zombie_horse'.toString(), '1548A64A3E43585D')
tameQuestMap.set('minecraft:skeleton_horse'.toString(), '536F93176C52E4A5')

PlayerEvents.tick(event => {
	let ray = global.advancedRayTrace(event.player, event.level, 4)
	if (!ray.entity) return false
	if (!ray.entity.getOwner) return false
	if (ray.entity.getOwner() == event.player) {
		let mobKey = ray.entity.type + ''
		FTBQuests.getServerDataFromPlayer(event.player).complete(tameQuestMap.get(mobKey))
	}
})

ServerEvents.recipes(event => {
	event.remove({ mod: 'ftbquests' })
})
