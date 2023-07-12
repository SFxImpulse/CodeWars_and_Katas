# Given two integers, return true if one integer is even and the other odd, and false other wise.

lovefunc = lambda flower1, flower2: True if (flower1 % 2 == 0) ^ (flower2 % 2 == 0) else False

# Refactored:

lovefuncV2 = lambda flower1, flower2: (flower1 + flower2) % 2