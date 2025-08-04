import json
import sys

colors = [ 
    "white",
    "light_gray",
    "gray",
    "black",
    "brown",
    "red",
    "orange",
    "yellow",
    "lime",
    "green",
    "cyan",
    "light_blue",
    "blue",
    "purple",
    "magenta",
    "pink"
]

datapackMinecraftDir = sys.argv[1]

for color in colors:
    recipe = {
        "type": "minecraft:crafting_shaped",
        "pattern": ["WW"],
        "key": {
            "W": {
                "item": f"minecraft:{color}_wool"
            }
        },
        "result": {
            "item": f"minecraft:{color}_carpet",
            "count": 2
        }
    }
    with open(f"{datapackMinecraftDir}/recipes/{color}_carpet.json", 'w') as file:
        file.write(json.dumps(recipe, indent=4)) 
    with open(f"{datapackMinecraftDir}/recipes/dye_{color}_carpet.json", 'w') as file:
        file.write("{}")

