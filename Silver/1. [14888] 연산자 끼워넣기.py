import sys
input = sys.stdin.readline
N = int(input())
num = list(map(int, input().split()))
op = list(map(int, input().split())) # +, -, *, //

maximum = -1e9
minimum = 1e9

def dfs(depth, total, plus, minus, multiply, divide):
    global maximum, minimum
    # 모든 숫자를 사용하여 연산이 완료됐을때
    if depth == N:
        maximum = max(total, maximum)
        minimum = min(total, minimum)
        return
    # plus부터 차례로 0이 될때까지 재귀함수 호출 만약 연산자가 1 1 0 0 이면 plus 리턴후 minus 함수로 리턴됨(호출스택에 의해)
    if plus:
        dfs(depth + 1, total + num[depth], plus - 1, minus, multiply, divide)
    if minus:
        dfs(depth + 1, total - num[depth], plus, minus - 1, multiply, divide)
    if multiply:
        dfs(depth + 1, total * num[depth], plus, minus, multiply - 1, divide)
    if divide:
        dfs(depth + 1, int(total / num[depth]), plus, minus, multiply, divide - 1)
# 초기 함수 실행
dfs(1, num[0], op[0], op[1], op[2], op[3])
print(maximum)
print(minimum)

# TEST
# input 
# 3
# 3 5 7
# 1 1 0 0

# output
# 5
# 1

# 2024-07-10 풀이실패 다음에 한번 더 풀어보기