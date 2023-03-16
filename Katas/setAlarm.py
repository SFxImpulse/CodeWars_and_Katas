# Write a function that returns a boolean based on two parameter booleans.

setAlarm = lambda e, v: False if e == True and v == True else False if e == False and v == True else False if e == False and v == False else True

# Alternative Solution.

setAlarmV2 = lambda e, v: e and not v