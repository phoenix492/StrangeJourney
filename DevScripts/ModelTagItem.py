#!/usr/bin/env python
from pathlib import Path
import json
import sys

tag_namespace, tag_path = sys.argv[1].removeprefix("#").split(':')
item_namespace, item_path = sys.argv[2].split(':')

resourcepackMinecraftDir = f"{Path.home()}/StrangeJourneyResourcepack/assets"

model = {
    "parent": "minecraft:item/generated",
    "textures": {
        "layer0": f"{item_namespace}:item/{item_path.split('/')[-1]}"
    }
}

output_file = Path(f"{resourcepackMinecraftDir}/{tag_namespace}/models/tag/item/{tag_path}.json")
output_file.parent.mkdir(exist_ok=True, parents=True)
with open(output_file, 'w') as file:
    file.write(json.dumps(model, indent=4)) 

