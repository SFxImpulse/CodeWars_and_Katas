# Write a function that converts a number into separate array indexes, and reverses them.

    # Converts a number into a string, then iterates over the string values and splits them into an array, and reverses them.

digitize = lambda n: [int(i) for i in str(n)][::-1]

# Alternate solution

    # Converts a number into a string, iterates over the string values using the map object, and splits them into an array before reversing them.

digitizeV2 = lambda n: map(int, str(n))[::-1]