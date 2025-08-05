EntityEvents.hurt(event => {
	/* The goal is to return as fast as possible if our conditions aren't matched,
	 * so we aren't wasting execution time. 
	 */ 
	if (event.source.type().msgId() !== "outOfWorld" || !event.entity.isPlayer() || event.entity.isFake()) {
		return
	}
	event.server.runCommandSilent(`execute in dimdoors:limbo run tp ${event.entity.getUsername()} ~ 500 ~`)
	event.cancel()
})
