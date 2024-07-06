import sys
first,second = map(int,sys.stdin.readline().split())
fisrtGCD=[]
secondGCD=[]

# 최대 공약수 구하기
for i in range(1,first+1):
    if(first % i == 0):
        fisrtGCD.append(i)
for i in range(1,second+1):
    if(second % i == 0):
        secondGCD.append(i)
# 파이썬 컴프리헨션 firstGCD의 인덱스 값을 돌면서 secondeGCD에 같은 값이 있으면 x에 추가
resGCD = [x for x in fisrtGCD if  x in secondGCD]

# 최소 공배수 구하는 공식 
resLCM =(first * second) // max(resGCD)

print(max(resGCD))
print(resLCM)

# TEST
# input
# 24 18

# output 
# 6
# 72