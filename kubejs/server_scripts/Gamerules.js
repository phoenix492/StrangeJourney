ServerEvents.loaded(event => {
    event.server.gameRules.set("doTraderSpawning", false)
    event.server.gameRules.set("playersSleepingPercentage", 51)
		event.server.gameRules.set("announceAdvancements", false)
		event.server.gameRules.set("commandBlockOutput", false)
		event.server.gameRules.set("maxEntityCramming", 48)
})
