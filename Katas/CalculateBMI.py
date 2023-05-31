# Given 2 integers, return a string based on the result of dividing the two integers:

def bmi(weight, height):
    if weight / (height * height) <= 18.5:
        return "Underweight"
    elif weight / (height * height) > 18.5 and weight / (height * height) <= 25:
        return "Average Weight"
    elif weight / (height * height) > 25 and weight / (height * height) <= 30:
        return "Overweight"
    else:
        return "Obese"
    
# Refactored:

def bmiV2(weight, height):
    bmi = weight / height ** 2
    return ["Underweight", "Normal", "Overweight", "Obese"][(bmi > 30) + (bmi > 25) + (bmi > 18.5)]