import sys
input = sys.stdin.readline

n = int(input())

office = {}

for _  in range(n):
    name, log = map(str, input().split())
    if log == 'enter':
        office[name] = True
    else:
        del office[name]

names = sorted(office, reverse=True)

for name in names:
    print(name)

# TEST
# input
# 4
# Baha enter
# Askar enter
# Baha leave
# Artem enter

# output
# Askar
# Artem