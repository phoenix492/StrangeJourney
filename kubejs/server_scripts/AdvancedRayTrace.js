const $ClipContext = Java.loadClass('net.minecraft.world.level.ClipContext')
const $ProjectileUtil = Java.loadClass('net.minecraft.world.entity.projectile.ProjectileUtil')

/**
 * 
 * @param {Internal.LivingEntity} entity 
 * @param {Internal.ServerLevel} level 
 * @param {number} distance
 * @returns {Object}
 * Returns the block and/or entity that the entity is looking at.
 * Ignores non-solid blocks and spectators.
 */
global.advancedRayTrace = (entity, level, distance) => {
    let eyePos = entity.eyePosition;
    let viewVec = entity.getViewVector(1)
    let endPos = eyePos.add(viewVec.x() * distance, viewVec.y() * distance, viewVec.z() * distance)
    let aabb = AABB.of(eyePos.x(), eyePos.y(), eyePos.z(), endPos.x(), endPos.y(), endPos.z())

    let ray = $ProjectileUtil.getEntityHitResult(level, entity, eyePos, endPos, aabb, (e) => {
        return !e.isSpectator()
    }, 0)

    let clip = new $ClipContext(
        entity.getEyePosition(1), 
        entity.getEyePosition(1).add(entity.getLookAngle().scale(distance)), 
        'collider', 'none', 
        entity
    )
    let hit = level.clip(clip)
    if (ray == null) {
        return {
            block: hit.getBlockPos() ? level.getBlock(hit.getBlockPos()) : null,
            entity: null
        }
    }
    return {
        block: level.getBlock(hit.getBlockPos()),
        entity: ray.entity
    }
}
