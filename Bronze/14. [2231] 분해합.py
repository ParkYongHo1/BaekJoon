import sys
N = int(sys.stdin.readline())
cnt=0
# 1부터 N까지의 숫자 넣을 배열
number_list =[]
# 생성자 값 넣을 배열
res_list=[]
for i in range(1,N+1):
    number_list.append(i)
    # 숫자를 하나씩 쪼개서 문자열로 넣음 ex) [216] -> ['2','1','6']
    str_num = str(i)
    res=list(map(str,str_num.strip()))
    # 숫자를 돌면서 분해합을 찾음
    for j in range(len(res)):
        cnt +=int(res[j])
    if(cnt +i ==N):
        res_list.append(i)
    cnt=0
# 만약 분해하이 없다면 0 출력
if(sum(res_list)==0):
    res_list.append(0) 
print(min(res_list))

# TEST 
# input
# 216

# output 
# 198