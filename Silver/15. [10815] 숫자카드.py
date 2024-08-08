import sys 
N = int(sys.stdin.readline())
# set 사용이유 
# list로 제출시 시간초과 에러가 발생 O(M*N)
# set으로 변경시 시간복잡도가 O(1)이기 때문에 총 시간복잡도는 O(M*1)이 된다.
n_list = set(map(int,sys.stdin.readline().split()))

M = int(sys.stdin.readline())
m_list = list(map(int,sys.stdin.readline().split()))

res_list = [1 if x in n_list else 0 for x in m_list]
print(*res_list)

# TEST

# input
# 5
# 6 3 2 10 -10
# 8
# 10 9 -5 2 3 4 5 -10

# output
# 1 0 0 1 1 0 0 1