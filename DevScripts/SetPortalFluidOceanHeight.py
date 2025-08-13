import sys
import json

oceanHeight = sys.argv[1]
feature_list = []

for i in range(int(oceanHeight)):
    placed_feature = {
        "feature": {
            "type": "minecraft:fill_layer",
            "config": {
                "state": {
                    "Name": "spelunkery:portal_fluid"
                },
                "height": i
            }
        },
        "placement": []
    }
    with open(f"../config/openloader/data/StrangeJourney/data/strangejourney/worldgen/placed_feature/portal_fluid_ocean/{i}.json", 'w') as file:
        file.write(json.dumps(placed_feature, indent=4))
    feature_list.append(f"strangejourney:portal_fluid_ocean/{i}")


with open("../config/openloader/data/StrangeJourney/data/strangejourney/forge/biome_modifier/portal_fluid_ocean.json", "r") as file:
    biome_modifier = json.load(file)
    biome_modifier["features"] = feature_list
with open("../config/openloader/data/StrangeJourney/data/strangejourney/forge/biome_modifier/portal_fluid_ocean.json", "w") as file:
    file.write(json.dumps(biome_modifier, indent=4))

