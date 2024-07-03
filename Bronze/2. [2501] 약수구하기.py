import sys

N,K = map(int, sys.stdin.readline().split()) # map 사용해서 한줄에 입력받기

list = []
for i in range(1,N+1): # 1부터 N까지 for문 돌려서 값 비교하기
    if(N % i == 0): # 약수일때 list배열에 값 추가
        list.append(i)
if(len(list)< K): # K 값이 더 크면 0 대입
    res = 0
else:
    res = list[K-1]

sys.stdout.write(str(res))

# TEST
# input : 6 3
# output : 3