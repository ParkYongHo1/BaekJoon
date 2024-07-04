import sys

N = 10
list = []
res = []
# 10개의 수 입력받고 list배열에 이번역 탑승인원(승차인원-하차인원) 넣기
for i in range(N):
    ride,out = map(int, sys.stdin.readline().split()) 
    list.append(out-ride)
# 
for i in range(len(list)):
    # 1번역에서 하차인원이 0이기 때문에 0 + 이번역 탑승인원(0은 생략가능)
    # res = 현재 탑승인원
    if(i == 0):
        res.append(0 + list[i])
    # 2번역~9번역   res = 이전역 탑승인원 + 이번역 탑승인원
    elif (i != N-1):
        res.append(res[i-1] + list[i])
    # 10번역은 탑승인원이 0이기 때문에 이번역 탑승인원 + 0(0은 생략가능)
    elif(i == N-1):
        res.append(list[i]+ 0)
# 최대 값 출력
print(max(res))

# TEST

# input
# 0 32
# 3 13
# 28 25
# 17 5
# 21 20
# 11 0
# 12 12
# 4 2
# 0 8
# 21 0

# output
# 42

