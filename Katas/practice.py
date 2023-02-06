# Built in Functions:

print("Hello World")

print(2 + 3)

print("5 + 5")

greeting = "What's up?"

print(greeting)

greeting += " Gorp?"

print(greeting)

# Different Data Types

array_1 = ["gorp"]
array_1 *= 3

print(array_1)

print("gorp " "shlorp " * 5)

# Defining Functions

def say_hello(name):
  print(f"Hello {name}")

say_hello(name="David & Rae")

def sum_two_numbers(num_1, num_2):
  return num_1 + num_2

print(sum_two_numbers(num_1=5, num_2=7))

# Lambda Functions

add = lambda x, y: x + y

print(add(x=1, y=2))

# Nested Functions with Lambda

def make_adder(n):
  return lambda x: x + n

plus_3 = make_adder(3)
plus_5 = make_adder(5)

print(plus_3(5), plus_5(6))