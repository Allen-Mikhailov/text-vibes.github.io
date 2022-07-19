import math


angle = 255
distance = 120

# Converting to radians
angle = angle/180 * math.pi

stretch = -distance / math.sin(angle)




print(stretch)
print(stretch* math.cos(angle))

print(stretch* math.sin(angle))