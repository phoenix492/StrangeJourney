import json
import sys
from pathlib import Path

datapackEverycompDir = sys.argv[1]

def get_planks(clock_id):
    clock_id = clock_id.strip()
    _, modid, block = clock_id.split('/')
    block = block.removesuffix("_chess_timer")
    return f"{modid}:{block}_planks"

with open("MiscItemLists/EverycompChestTimers.txt", 'r') as chessTimersFile:
    lines = chessTimersFile.readlines()
    planks = [get_planks(line) for line in lines]
    for plank in planks:
        modid,block = plank.split(':')
        woodtype = block.removesuffix('_planks')
        recipe = {
            "type": "minecraft:crafting_shaped",
            "pattern": ["BPB","GCI","RPR"],
            "key": {
                "B": {
                    "tag": "minecraft:buttons"
                },
                "P": {
                    "item": f"{plank}"
                },
                "G": {
                    "item": "minecraft:glass"
                },
                "C": {
                    "item": "minecraft:clock"
                },
                "I": {
                    "item": "minecraft:iron_ingot"
                },
                "R": {
                    "item": "minecraft:comparator"
                }
            },
            "result": {
                "item": f"everycomp:ttc/{modid}/{woodtype}_chess_timer",
                "count": 1
            } 
        }
        recipe_file = Path(f"{datapackEverycompDir}/recipes/ttc/{modid}/{woodtype}_chess_timer.json")
        recipe_file.parent.mkdir(exist_ok=True, parents=True) 
        with recipe_file.open('x') as f:
            f.write(json.dumps(recipe, indent=4))
