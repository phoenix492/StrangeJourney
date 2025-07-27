EntityEvents.spawned(event => {
	if(event.entity.type == "midnight:rift") {
		event.cancel()
	}
})

