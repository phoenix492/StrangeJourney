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

for arrayColor in colors:
    print(sys.argv[1].format(color=arrayColor))
