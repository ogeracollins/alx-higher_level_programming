#!/usr/bin/python3
import random
number = random.randint(-10000, 10000)
if number > 0:
    rem = number % 10
    if rem > 5:
        print(f"Last digit of {number} is {rem} and is greater than 5")
    elif rem == 0:
        print(f"Last digit of {number} is {rem} and is 0")
    else:
        print(f"Last digit of {number} is {rem} and is less than 6 and not 0")
elif number == 0:
    print(f"Last digit of {number} is 0 and is 0")
else:
    rem = ((number * -1) % 10) * -1
    print(f"Last digit of {number} is {rem} and is less than 6 and not 0")
