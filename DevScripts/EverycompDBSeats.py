import json
import sys
from pathlib import Path

datapackEverycompDir = sys.argv[1]

def get_planks(seat_id):
    seat_id = seat_id.strip()
    _, modid, block = seat_id.split('/')
    block = block.removesuffix("_seat")
    return f"{modid}:{block}_planks"

with open("MiscItemLists/EverycompSeats.txt", 'r') as seatsFile:
    lines = seatsFile.readlines()
    planks = [get_planks(line) for line in lines]
    for plank in planks:
        modid,block = plank.split(':')
        woodtype = block.removesuffix('_planks')
        recipe = {
            "type": "minecraft:crafting_shaped",
            "pattern": ["PPP", "S S"],
            "key": {
                "S": {
                    "tag": "forge:rods/wooden"
                },
                "P": {
                    "item": f"{plank}"
                },
            },
            "result": {
                "item": f"everycomp:db/{modid}/{woodtype}_seat",
                "count": 1
            } 
        }
        recipe_file = Path(f"{datapackEverycompDir}/recipes/db/{modid}/{woodtype}_seat.json")
        recipe_file.parent.mkdir(exist_ok=True, parents=True) 
        with recipe_file.open('w') as f:
            f.write(json.dumps(recipe, indent=4))
