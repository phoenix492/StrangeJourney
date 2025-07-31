from tomlkit.toml_file import TOMLFile

def transform_quark_mc_carpets(variant_id):
    variant_id = variant_id.strip()
    _,item = variant_id.split(':')
    woodtype = item.removesuffix("_leaf_carpet")
    return f"unique,minecraft:{woodtype}_leaves,{variant_id},"

def transform_quark_mc_hedges(variant_id):
    variant_id = variant_id.strip()
    _,item = variant_id.split(':')
    woodtype = item.removesuffix("_hedge")
    return f"unique2,minecraft:{woodtype}_leaves,{variant_id},"

def transform_quark_carpets(variant_id):
    variant_id = variant_id.strip()
    modid,item = variant_id.split(':')
    woodtype = item.removesuffix("_leaf_carpet")
    return f"unique,{modid}:{woodtype}_leaves,{variant_id},"

def transform_quark_hedges(variant_id):
    variant_id = variant_id.strip()
    modid,item = variant_id.split(':')
    woodtype = item.removesuffix("_hedge")
    return f"unique2,{modid}:{woodtype}_leaves,{variant_id},"

def transform_everycomp_carpets(variant_id):
    variant_id = variant_id.strip()
    _, modid, block = variant_id.removeprefix("everycomp:").split('/')
    block = block.removesuffix("_leaf_carpet") 
    return f"unique,{modid}:{block}_leaves,{variant_id},"

def transform_everycomp_hedges(variant_id):
    variant_id = variant_id.strip()
    _, modid, block = variant_id.removeprefix("everycomp:").split('/')
    block = block.removesuffix("_hedge") 
    return f"unique2,{modid}:{block}_leaves,{variant_id},"

def transform_everycomp_hollow_logs(variant_id):
    variant_id = variant_id.strip()
    _, modid, block = variant_id.removeprefix("everycomp:").split('/')
    block = block.removeprefix("hollow_") 
    return f"unique2,{modid}:{block},{variant_id},"

def transform_everycomp_posts(variant_id):
    variant_id = variant_id.strip()
    _, modid, block = variant_id.removeprefix("everycomp:").split('/')
    block = block.removesuffix("_post") 
    return f"unique,{modid}:{block}_log,{variant_id},"

def transform_everycomp_boardwalks(variant_id):
    variant_id = variant_id.strip()
    _, modid, block = variant_id.removeprefix("everycomp:").split('/')
    block = block.removesuffix("_boardwalk") 
    return f"unique3,{modid}:{block}_planks,{variant_id},"

def transform_everycomp_banisters(variant_id):
    variant_id = variant_id.strip()
    _, modid, block = variant_id.removeprefix("everycomp:").split('/')
    block = block.removesuffix("_banister") 
    return f"unique2,{modid}:{block}_planks,{variant_id},"

def transform_everycomp_log_fences(variant_id):
    variant_id = variant_id.strip()
    _, modid, block = variant_id.removeprefix("everycomp:").split('/')
    block = block.removeprefix("fence_log_") 
    return f"fence,{modid}:{block}_log,{variant_id},"

def transform_everycomp_log_walls(variant_id):
    variant_id = variant_id.strip()
    _, modid, block = variant_id.removeprefix("everycomp:").split('/')
    block = block.removeprefix("wall_stripped_").removeprefix("wall_")
    return f"wall,{modid}:{block}_log,{variant_id},"

def transform_everycomp_plank_walls(variant_id):
    variant_id = variant_id.strip()
    _, modid, block = variant_id.removeprefix("everycomp:").split('/')
    block = block.removeprefix("wall_") 
    return f"wall,{modid}:{block},{variant_id},"

def transform_noop(variant_id):
    variant_id = variant_id.strip()
    return variant_id

def process(filepath, transformation_function):
    with open(filepath, 'r') as file:
        lines = file.readlines()
    transformed_lines = [transformation_function(line) for line in lines]
    transformed_lines = [line for line in transformed_lines if line] 

    return transformed_lines

    

if __name__ == "__main__":
    variants = []
    variants += process("VariantLists/QuarkCarpetsMC.txt", transform_quark_mc_carpets)
    variants += process("VariantLists/QuarkHedgesMC.txt", transform_quark_mc_hedges)
    variants += process("VariantLists/QuarkHedges.txt", transform_quark_hedges)
    variants += process("VariantLists/QuarkCarpets.txt", transform_quark_carpets)
    variants += process("VariantLists/EverycompCarpets.txt", transform_everycomp_carpets)
    variants += process("VariantLists/EverycompHedges.txt", transform_everycomp_hedges)
    variants += process("VariantLists/EverycompQuarkHollowLogs.txt", transform_everycomp_hollow_logs)
    variants += process("VariantLists/EverycompPosts.txt", transform_everycomp_posts)
    variants += process("VariantLists/EverycompBoardwalks.txt", transform_everycomp_boardwalks)
    variants += process("VariantLists/EverycompBanisters.txt", transform_everycomp_banisters)
    variants += process("VariantLists/EverycompLogFences.txt", transform_everycomp_log_fences)
    variants += process("VariantLists/EverycompLogWalls.txt", transform_everycomp_log_walls)
    variants += process("VariantLists/EverycompPlankWalls.txt", transform_everycomp_plank_walls)
    variants += process("ManualVariantEntries.txt", transform_noop)
    
    quark_config = TOMLFile("../config/quark-common.toml")
    quark_config_read = quark_config.read()
    quark_config_read["experimental"]["variant_selector"]["variants"]["Manual Variants"] = variants
    quark_config.write(quark_config_read)
