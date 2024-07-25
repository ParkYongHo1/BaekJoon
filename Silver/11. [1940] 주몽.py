import sys
N = int(sys.stdin.readline())
M = int(sys.stdin.readline())
number_list = list(map(int,sys.stdin.readline().split()))
number_list.sort()
start = 0
end = len(number_list) - 1
sum = 0
count = 0
# 투포인터로 양쪽 끝 비교
while(start < end):
    sum =  number_list[start] + number_list[end]
    if(sum > M):
        end -= 1
    if(sum < M):
        start += 1
    if(sum == M):
        start +=1
        end -=1
        count +=1
    
print(count)

# TEST
# input
# 6
# 9
# 2 7 4 1 5 3

# output
# 2