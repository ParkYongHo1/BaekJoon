import sys
T =int(sys.stdin.readline())

score = list(map(int,sys.stdin.readline().split()))
max_score = max(score)
new_score = []
for i in range(len(score)):
    new_score.append(score[i] / (max_score*0.01))

print(sum(new_score) / T)