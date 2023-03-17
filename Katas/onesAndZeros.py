# Given an array of binary digits, convert their value into an integer.

arrayToNumber = lambda arr: int("".join(str(x) for x in arr), 2)

# Refactored

arrayToNumberV2 = lambda arr: int("".join(map(str, arr)), 2)