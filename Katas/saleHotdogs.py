# Write a function that returns the total price of a cutsomer's order for hotdogswith varying prices based on the number of hotdogs (n) they bought.

saleHotdogs = lambda n: n * 100 if n < 5 else n * 95 if 5 <= n < 10 else n * 90

# Refactored for DRYer code.

saleHotdogsV2 = lambda n: n * (100 if n < 5 else 95 if 5 <= n < 10 else 90)