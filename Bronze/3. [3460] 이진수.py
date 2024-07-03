import sys
# 테스트 케이스 개수 입력
T = int(sys.stdin.readline())
result=[]
cnt=0
for _ in range(T):
    # 각 테스트 케이스의 입력값 받기
    N = int(input())
    while N != 0:
        mod = N % 2
        N //= 2
        cnt +=1
        # 1이면 배열에 넣기 배열은 0 부터 시작이니 cnt-1
        if(mod == 1):
            result.append(cnt-1)
    # [] 없애고 출력하기
    print(*result)
    # 각 테스트마다 배열 , 카운트 초기화
    result= []
    cnt=0
            
