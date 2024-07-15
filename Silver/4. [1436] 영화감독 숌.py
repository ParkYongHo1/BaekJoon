import sys

N = int(sys.stdin.readline())
count = 0
result=0
start =666
while(True ):
    # 만약 문자열로 바꾼 start에 666이 없으면 카운트 증가
    if(str(start).find('666') !=-1):
        count+=1
    # 카운트랑 N랑 같아지면 break 
    if(count == N):
        result = start
        break
    start += 1
print(result)

# TEST
# input
# 500

# output
# 166699
