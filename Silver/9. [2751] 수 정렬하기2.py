import sys

N = int(sys.stdin.readline())
number_list =[]
for _ in range(N):
    number = int(sys.stdin.readline())
    number_list.append(number)
    
number_list.sort()
for i in range(N):
    print(number_list[i])