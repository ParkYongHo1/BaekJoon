import sys
A,B = map(int, sys.stdin.readline().split())
number_list = []
res_list =[]
cnt=0
while(True):
    cnt+=1
    # 1부터 1000까지 현재 숫자의 숫자만큼 배열에 넣기
    for i in range(cnt):
        number_list.append(cnt)
    # 1000이면 멈추기
    if(cnt==1000):
        break
# 인덱스 0 부터 B까지 의 수 더하기
for i in range(A-1,B):
    res_list.append(number_list[i])
print(sum(res_list))

# TEST

# input 
# 3 7

# output
# 15