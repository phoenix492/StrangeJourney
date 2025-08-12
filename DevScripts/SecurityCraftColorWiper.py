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
    with open(f"{datapackMinecraftDir}/recipes/{color}_lens.json", 'w') as file:
        file.write("{}") 

