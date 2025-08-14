const $CuriosApi = Java.loadClass('top.theillusivec4.curios.api.CuriosApi');
const $TargetingConditions = Java.loadClass('net.minecraft.world.entity.ai.targeting.TargetingConditions')
const $TagKey = Java.loadClass('net.minecraft.tags.TagKey')
const DISABLED_MOB = $TagKey.create(Utils.getRegistry('minecraft:entity_type').key, 'strangejourney:disabled')
/*
Targeting condition that always returns true. We only care that there's a 
player nearby, which is handled by calling getNearbyPlayers, we couldn't
care less if they're in creative or invulnerable or the game is in peaceful,
which most readily accessible selectors fail against.
*/
const PLAYER_CONDITION = $TargetingConditions.forNonCombat().selector(entity => {return true})

function hasCurios(entity, itemStack) {
    let curiosInventory = $CuriosApi.getCuriosInventory(entity).resolve().get();
    return curiosInventory.equippedCurios.allItems.some((item) => item == itemStack);
}

EntityEvents.spawned(event => {

	// Cobblemon contingent upon a nearby playing wearing a Silph Scope.
	// Second check only surpresses Wild pokemon spawns, leaving Pasture Blocks
	// and player pokemon in-tact.
	if (event.entity.type == "cobblemon:pokemon" && event.entity.getNbt().Pokemon.PokemonOriginalTrainerType == "NONE") {
		let area = event.entity.getBoundingBox().inflate(64)
		let spawnPokemon = false
		let players = event.level.getNearbyPlayers(PLAYER_CONDITION, null, area);
		players.forEach(p => {
			if (hasCurios(p, Item.of("kubejs:silph_scope"))) {
				spawnPokemon = true
			}
		})
		
		if (!spawnPokemon) {
			event.cancel()
		}
	}
	
	// Midnight rifts are disabled, stargates only.
	if(event.entity.type == "midnight:rift") {
		event.cancel()
	}

	// Midnight enderman things shouldn't spawn in the overworld
	if (event.entity.type == "midnight:nightshade") {
		if (event.entity.level.isOverworld()) {
			event.cancel()
		}
	}

	// Species mobs tend to overwhelm and dilute Alexs Caves
	if (event.entity.type.split(':')[0] == "species") {
		if (event.entity.block.biomeId.namespace == "alexscaves") {
			event.cancel()
		}
	}

	if (event.entity.entityType.is(DISABLED_MOB)) {
		event.cancel()
	}

})
