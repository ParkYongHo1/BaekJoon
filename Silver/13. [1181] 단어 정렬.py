import sys
N = int(sys.stdin.readline())
str_array = []
for _ in range(N):
    # 공백제거
    string = sys.stdin.readline().strip()
    str_array.append(string)
#중복값 제거
set_array = set(str_array)
str_array = list(set_array)
str_array.sort()
# 길이순 정렬
str_array.sort(key=len)
for i in range(len(str_array)):
    print(str_array[i])    

# TEST

# input
# 13
# but
# i
# wont
# hesitate
# no
# more
# no
# more
# it
# cannot
# wait
# im
# yours

# ouput
# i
# im
# it
# no
# but
# more
# wait
# wont
# yours
# cannot
# hesitate
