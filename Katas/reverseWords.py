# Write a function that accepts a string and returns the string with each word reversed but in the same order as the original string.

def reverse_words(text):
  text_list = text.split(" ")
  return " ".join([i[::-1] for i in text_list])

# Refactored

reverse_wordsV2 = lambda text: " ".join(i[::-1] for i in text.split(" "))