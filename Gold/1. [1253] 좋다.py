import sys
N = int(sys.stdin.readline())
number_list = list(map(int,sys.stdin.readline().split()))
number_list.sort()

sum = 0
count = 0
for i in range(N):
    K = number_list[i]
    start = 0
    end = len(number_list) - 1
    while(start < end):
        sum = number_list[start] + number_list[end]
        if(sum == K):
            if( start != i and end != i):
                count += 1
                break
            # 배열을 다돌았을 경우 즉 자기 자신인 경우
            elif(start == i):
                start += 1
            elif(end == i):
                end -= 1
        elif(sum < K):
            start += 1
        elif(sum > K):
            end -= 1
print(count)

# TEST 
# input
# 10
# 1 2 3 4 5 6 7 8 9 10

# output
# 8