let tameQuestMap = new Map()
tameQuestMap.set('minecraft:wolf'.toString(), '65886D41D0B29522')

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
