import sys

N,M = map(int,sys.stdin.readline().split())
# 2차원 숫자 배열
num_list = [[0] * (N + 1)]
# 2차원 합배열 초기화
sum_list = [[0] * (N + 1) for _ in range(N + 1)]

# 구간합을 위해 0번째 인덱스에 0을 넣고 숫자 입력받기
for i in range(N):
    rows = [0] + [int(x) for x in input().split()]
    num_list.append(rows)
# 합배열 구하기
for i in range(1,N+1):
    for j in range(1, N+1):
        #  합배열 = 현재행의 이전 열까지의 합 + 현재열의 이전 행까지의 합 - 중복되어 두번 더해지는 부분 + 현재위치의 값
        sum_list[i][j] = sum_list[i][j-1] + sum_list[i-1][j] - sum_list[i-1][j-1] + num_list[i][j]
for _ in range(M):
    # 구간 입력 받기
    x1,y1,x2,y2 = map(int,sys.stdin.readline().split())
    # 구간 합 = 전체 합 - 윗부분 - 왼쪽부분 + 중복되어 두번 빠지는 부분
    res = sum_list[x2][y2] - sum_list[x1-1][y2] - sum_list[x2][y1-1] + sum_list[x1-1][y1-1]
    print(res)

# TEST 

# input
# 2 4
# 1 2
# 3 4
# 1 1 1 1
# 1 2 1 2
# 2 1 2 1
# 2 2 2 2

# output
# 1
# 2
# 3
# 4
