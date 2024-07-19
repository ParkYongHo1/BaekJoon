import sys
N = int(sys.stdin.readline())
# 투포인터 방식
# 사용이유 시간복잡도를 O(n)으로 하기위해 
sum = 1
count = 1
start_index= 1
end_index = 1

while end_index != N:
    if(sum == N):
        count +=1
        end_index +=1
        sum += end_index
    elif (sum > N):
        sum -= start_index
        start_index +=1
    else:
        end_index +=1
        sum +=end_index
print(count)

# TEST

# input
# 10

# outout
# 2 