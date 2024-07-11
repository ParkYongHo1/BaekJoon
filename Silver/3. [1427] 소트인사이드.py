import sys
N = list(map(str,sys.stdin.readline().strip()))
N.sort(reverse=True)
print(*N ,sep="")