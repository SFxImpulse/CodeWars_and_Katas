# Clock shows h hours, m minutes and s seconds after midnight. Your task is to write a function which returns the time since midnight in milliseconds.

past = lambda h, m, s: (h * 3600000) + (m * 60000) + (s * 1000)

# DRYer Solution (Try and multiply with as small a number as possible):

past_v2 = lambda h, m, s: ((h * 60 + m) * 60 + s) * 1000