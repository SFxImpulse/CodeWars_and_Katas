# Write a function that returns that average of three numbers and returns a letter grade based on the score.

def getGrade(s1, s2, s3):
  avg = (s1 + s2 + s3) / 3
  return 'F' if avg >= 0 and avg < 60 else 'D' if avg >= 60 and avg < 70 else 'C' if avg >= 70 and avg < 80 else 'B' if avg >= 80 and avg < 90 else 'A' if avg >= 91 and avg <= 100 else 'S'

# Without the long ternary operator

def getGrade(s1, s2, s3):
  avg = sum([s1, s2, s3]) / 3
  if 90 <= avg <= 100:
    return 'A'
  elif 80 <= avg < 90:
    return 'B'
  elif 70 <= avg < 80:
    return 'C'
  elif 60 <= avg < 70:
    return 'D'
  return 'F'