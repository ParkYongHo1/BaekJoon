function solution(a, b) {
    let num1 = String(a) + String(b);
    let num2 = 2 * a * b;
    return Number(num1) > num2 ? Number(num1) : num2;
}