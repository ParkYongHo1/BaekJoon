import sys

n, m = map(int, sys.stdin.readline().split())

n_list = [sys.stdin.readline().strip() for _ in range(n)]

n_set = set(n_list)

cnt = 0

# m개의 문자열을 입력받아 존재 여부를 n_set에서 확인
for _ in range(m):
    m_str = sys.stdin.readline().strip()
    if m_str in n_set:
        cnt += 1

print(cnt)

# TEST

# input 
# 5 11
# baekjoononlinejudge
# startlink
# codeplus
# sundaycoding
# codingsh
# baekjoon
# codeplus
# codeminus
# startlink
# starlink
# sundaycoding
# codingsh
# codinghs
# sondaycoding
# startrink
# icerink

# output 
# 4