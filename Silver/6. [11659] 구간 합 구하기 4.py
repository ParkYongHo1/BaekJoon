import sys
M,T = list(map(int, sys.stdin.readline().split()))
num_list = list(map(int,sys.stdin.readline().split()))
sum_list = []

sum_list.append(num_list[0])
res_list = []
for i in range(1,len(num_list)):
    # num_list의 합배열 만들기
    sum_list.append(sum_list[i-1] + num_list[i])
# 구간이 1부터 시작하여 0번쨰 인덱스에 0을 추가
sum_list.reverse()
sum_list.append(0)
sum_list.reverse()
# 구간합 구하기 
for _ in range(T):
    start,end = map(int,sys.stdin.readline().split())
    print(sum_list[end] - sum_list[start-1])

# TEST
# input
# 5 3
# 5 4 3 2 1
# 1 3
# 2 4
# 5 5

# output
# 12
# 9
# 1