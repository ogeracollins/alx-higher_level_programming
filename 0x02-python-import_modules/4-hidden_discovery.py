#!/usr/bin/python3
import hidden 4
fun = dir(hidden_4)

if __name__ == "__main__":
    for f in fun:
        if '__' not in f:
            print(f)
