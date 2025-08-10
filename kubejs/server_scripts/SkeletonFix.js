// Hacky workaround for Caverns & Chasms stupid, undocumented, and unconfigurable change to skeleton health.
EntityEvents.spawned(event => {
	if(event.entity.type === "minecraft:skeleton" && event.entity.getAttributeValue('minecraft:generic.max_health') == 10) {
		event.entity.setAttributeBaseValue('minecraft:generic.max_health', 20)
		event.entity.health = event.entity.maxHealth
	}
})
