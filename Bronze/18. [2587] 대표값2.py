import sys
number_list =[]
for i in range(5):
    N = int(sys.stdin.readline())
    number_list.append(N)

print((sum(number_list) // 5))
print(sorted(number_list)[2])

# TEST
# input 
# 10
# 40
# 30
# 60
# 30

# output
# 34
# 30