const $CuriosApi = Java.loadClass('top.theillusivec4.curios.api.CuriosApi');
const $TargetingConditions = Java.loadClass('net.minecraft.world.entity.ai.targeting.TargetingConditions')

function hasCurios(entity, itemStack) {
    let curiosInventory = $CuriosApi.getCuriosInventory(entity).resolve().get();
    return curiosInventory.equippedCurios.allItems.some((item) => item == itemStack);
}

EntityEvents.spawned(event => {
	if(event.entity.type == "cobblemon:pokemon") {
		let area = event.entity.getBoundingBox().inflate(64)
		let spawnPokemon = false
		event.level.getEntitiesWithin(area).forEach(e => {
			if (e.isPlayer()) {
				if (hasCurios(e, Item.of("kubejs:silph_scope"))) {
					spawnPokemon = true
				}
			}
		})
		/*
		let players = event.level.getNearbyPlayers($TargetingConditions.DEFAULT, null, area);
		console.log("Nearby players: " + players.length);
		players.forEach(p => {
			if (hasCurios(p, Item.of("kubejs:silph_scope"))) {
				spawnPokemon = true
			}
		})
		*/
		
		if (!spawnPokemon) {
			event.cancel()
		}
	}
})

