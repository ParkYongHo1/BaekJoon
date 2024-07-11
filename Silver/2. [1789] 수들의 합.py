import sys

S = int(sys.stdin.readline())
cnt = 0
res=0
while(S>0):

    cnt +=1
    S -= cnt
    # 1씩 뺴면서 카운트 세기
    if(S < cnt):
        res = cnt
        # S가 마이너스 일 경우 카운트 1빼기
        if(S < 0):
            res -= 1
        break
print(res)

# TEST
# input
# 200

# output
# 19