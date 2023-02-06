# Write a program that finds the summation of every number from 1 to num. The number will always be a positive integer greater than 0.

summation = lambda n: n * (n + 1) / 2

# DRYer solutions (Built-in Functions are more useful):

summation_2 = lambda n: sum(range(1, n+1))

print(summation(n=10), summation_2(n=10))