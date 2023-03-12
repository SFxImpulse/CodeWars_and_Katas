# Given a non-negative integer, return a string that uses the integer and the string " sheep..." afterwards.

def countSheep(n):
  if n == 0:
    return ""
  
  i = 1

  str = ""

  while i <= n:
    str += f"{i} sheep..."
    i += 1

  return str

# Alternate Solution, this one needed a refactor...

countSheepV2 = lambda n: "".join(f"{i} sheep..." for i in range(1, n + 1))