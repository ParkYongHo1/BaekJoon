import sys

N = int(sys.stdin.readline())

cnt=0
res_list = []
number_list = list(map(int,sys.stdin.readline().split()))
#
if(len(number_list) != N):
    print("입력한 숫자의 개수가 틀립니다.")
else:
    # 배열의 n번째 수
    for i in range(N):
        # 1부터 n번째 배열값까지 검사해서 1과 자기 자신으로만 나누어 떨어지는 값(소수)를 구함 
        for j in range(1,number_list[i]+1):
            if(number_list[i] % j == 0):
                cnt+=1
        # 2인 이유 자기 자신과 1뿐 
        if(cnt == 2):
            res_list.append(number_list[i])
        cnt=0

print(len(res_list))

# TEST
# input
# 4
# 1 3 5 7

# output 
# 3