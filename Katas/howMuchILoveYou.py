# Write a function that outputs a specific string from a selection of six strings based on a value (n).

howMuchILoveYou = lambda n: 'I love you' if n % 6 == 1 else 'a little' if n % 6 == 2 else 'a lot' if n % 6 == 3 else 'passionately' if n % 6 == 4 else 'madly' if n % 6 == 5 else 'not at all'

# Alternate Solution.

howMuchILoveYouV2 = lambda n: ["I love you", "a little", "a lot", "passionately", "madly", "not at all"][n % 6 - 1]