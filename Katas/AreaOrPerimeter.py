# Given a length and width, return the perimeter if the length and width are different, and return the area if the length and width are equal.

area_or_perimeter = lambda l, w: (l + w) * 2 if l != w else l * w

#  OR

area_or_perimeterv2 = lambda l, w: l * w if l == w else (l + w) * 2