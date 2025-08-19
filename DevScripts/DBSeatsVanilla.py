import json
import sys
import Typelists 
from pathlib import Path

datapackDecorativeBlocksDir = sys.argv[1]

for woodtype in Typelists.vanilla_woods:
    recipe = {
        "type": "minecraft:crafting_shaped",
        "pattern": ["PPP", "S S"],
        "key": {
            "S": {
                "tag": "forge:rods/wooden"
            },
            "P": {
                "item": f"minecraft:{woodtype}_planks"
            },
        },
        "result": {
            "item": f"decorative_blocks:{woodtype}_seat",
            "count": 1
        } 
    }
    recipe_file = Path(f"{datapackDecorativeBlocksDir}/recipes/{woodtype}_seat.json")
    recipe_file.parent.mkdir(exist_ok=True, parents=True) 
    with recipe_file.open('w') as f:
        f.write(json.dumps(recipe, indent=4))
