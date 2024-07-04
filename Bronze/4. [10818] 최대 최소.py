import sys

N = int(sys.stdin.readline())

numbers = list(map(int,sys.stdin.readline().split()))
if(len(numbers) != N):
    print("입력된 숫자의 개수가 틀립니다.")
else:
    print(min((numbers)),max((numbers)))

# TEST

# input 
# 5
# 1 2 3 4 5

# output 
# 1 5

# input 
# 5
# 1 2 3 4 5 6

# output 
# 입력된 숫자의 개수가 틀립니다.

