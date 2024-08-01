import sys
N = int(sys.stdin.readline())
people_list = []
for _ in range(N):
    age, name = sys.stdin.readline().split()
    people_list.append([int(age),name])
 
people_list.sort(key = lambda x : int(x[0]))

for i in people_list:
    print(i[0],i[1])