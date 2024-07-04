
import sys
# 입력받기
a = int(sys.stdin.readline())
b = int(sys.stdin.readline())

first = a * (b % 10)   # 일의 자리 구해서 a랑 곱하기
second = a * ((b%100)//10) # 십의 자리 구해서 a랑 곱하기
third = a * (b//100) # 백의 자리 구해서 a랑 곱하기
fourth = a * b

# sys.stdout.write() -> 속도가 빨라짐
sys.stdout.write(str(first)+'\n')
sys.stdout.write(str(second )+ '\n')
sys.stdout.write(str(third) + '\n')
sys.stdout.write(str(fourth) +'\n')

# TEST
# input
# a = 472
# b = 385

# output
# first = 2360
# second = 3776
# third = 1416
# fourth = 181720