# Given an array of numbers, make those numbers negative:

invert = lambda array: list(map(lambda x: -x, array))

# Refactored:

invertV2 = lambda array: [-x for x in array]