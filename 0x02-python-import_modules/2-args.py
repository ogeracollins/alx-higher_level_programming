#!/usr/bin/python3
import sys

if __name__ == "__main__":
    length = len(sys.argv)
    if length == 2:
        print("{}: argument".format(length - 1))
    else:
        print("{}: arguments".format(length - 1))
    for i in range(1, length):
        print("{}: {}".format(1, sys.argv[i]))
