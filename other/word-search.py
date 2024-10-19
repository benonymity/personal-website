import random

words = open("words.txt").readlines()
grid_size = 20
num_grids = 10

def place_word_in_grid(grid, word):
    direction_options = [(0, 1), (1, 0), (1, 1), (-1, 1)]
    while True:
        direction = random.choice(direction_options)
        start_row = random.randint(0, grid_size - 1)
        start_col = random.randint(0, grid_size - 1)
        if can_place_word(grid, word, start_row, start_col, direction):
            for i in range(len(word)):
                row = start_row + i * direction[0]
                col = start_col + i * direction[1]
                grid[row][col] = word[i]
            break

def can_place_word(grid, word, start_row, start_col, direction):
    for i in range(len(word)):
        row = start_row + i * direction[0]
        col = start_col + i * direction[1]
        if not (0 <= row < grid_size and 0 <= col < grid_size):
            return False
        if grid[row][col] != '' and grid[row][col] != word[i]:
            return False
    return True

def fill_grid_with_random_letters(grid):
    alphabet = "ABCDEFGHIJKLMNOPQRSTUVWXYZ"
    for row in range(grid_size):
        for col in range(grid_size):
            if grid[row][col] == '':
                grid[row][col] = random.choice(alphabet)

def create_word_search():
    grid = [['' for _ in range(grid_size)] for _ in range(grid_size)]
    words_to_place = random.sample(words, random.randint(1, len(words)))
    for word in words_to_place:
        place_word_in_grid(grid, word)
    fill_grid_with_random_letters(grid)
    return grid

def main():
    grids = [create_word_search() for _ in range(num_grids)]
    for grid in grids:
        print(f"\"{''.join(''.join(row) for row in grid)}\",")

if __name__ == "__main__":
    main()