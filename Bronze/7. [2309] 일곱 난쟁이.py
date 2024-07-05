import sys

N = 9
height_list = []

for i in range(N):
    people = int(sys.stdin.readline())
    height_list.append(people)
    
height_list = sorted(height_list)
# 마지막 인덱스부터 비교(기준)
for i in range(N-1,-1,-1):
    # 처음 인덱스 부터 차례로 비교
    for j in range(9):
        # 9명의 몸무게를 합한후 100을 빼면 타겟을 찾을 수 있음
        if(sum(height_list)-100 == height_list[i]+height_list[j]):
            #res 배열에 두명의 몸무게를 넣음
            res = [height_list[i],height_list[j]]

# 리스트 컴브리헨션
# [표현식 for 항목 in 반복가능한 객체 if 조건]
# 표현식-> 조건 만족시 리스트에 추가되는 값
# height_list를 돌면서 res에 없는 값이라면 filterList에 추가
filterList = [x for x in height_list if x not in res]

# N-2인 이유 -> 2명이 빠졌기때문에 
for i in range(len(filterList)):
    print(filterList[i])

# TEST

# input
# 1
# 2
# 3
# 4
# 5
# 6
# 79
# 10
# 15

# output
# 1
# 2
# 3
# 4
# 5
# 6
# 79