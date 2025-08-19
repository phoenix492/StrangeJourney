import json
import sys
import Typelists

for arrayColor in Typelists.colors:
    print(sys.argv[1].format(color=arrayColor))
