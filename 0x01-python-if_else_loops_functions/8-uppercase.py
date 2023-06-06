#!/usr/bin/python3
def uppercase(str):
    strA = list()
    for i in str:
        if ord(i) >= 97 and ord(i) <= 122:
            strA.append(chr(ord(i) - 32))
        else:
            strA.append(i)
    print('{}'.format("".join(strA)), end="")
    print()
