import sys

def transform_meow(line):
    line = line.strip()
    
    path = line[len("everycomp:"):]
    parts = path.split('/')

    identifier, modid, block = parts
    block_name = block.removeprefix("hollow_")
    return f"{sys.argv[2]},{modid}:{block_name},{line}"

def process_meow(filepath):
    with open(filepath, 'r') as file:
        lines = file.readlines()

    transformed_lines = [transform_meow(line) for line in lines]
    transformed_lines = [line for line in transformed_lines if line] 

    return transformed_lines


if __name__ == "__main__":
    input_path = sys.argv[1]
    output = process_meow(input_path)

    for line in output:
        print(line)
