ServerEvents.loaded(event => {
    event.server.gameRules.set("doTraderSpawning", false)
    event.server.gameRules.set("playersSleepingPercentage", 51)
		event.server.gameRules.set("announce_advancements", false)
		event.server.gameRules.set("commandBlockOutput", false)
		event.server.gameRules.set("max_entity_cramming", 48)
})
