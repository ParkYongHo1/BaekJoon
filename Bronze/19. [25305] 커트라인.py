import sys
N,K = map(int, sys.stdin.readline().split())

score_list = list(map(int, sys.stdin.readline().split()))
score_list.sort(reverse=True)
print(score_list[K-1])

# TEST
# input 
# 5 2
# 100 76 85 93 98

# output
# 98