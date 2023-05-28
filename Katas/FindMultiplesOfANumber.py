# Given two integers, return multiples of the first integer up to a limit defined by the second integer:

def find_multiples(integer, limit):
    output = [integer]

    sum = integer

    while sum < limit:
        output.append(sum)
        sum += integer

# Refactored with the range method:

def find_multiplesV2(integer, limit):
  return list(range(integer, limit + 1, integer))