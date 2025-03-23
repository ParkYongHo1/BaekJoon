function isPrime(num) {
    if (num < 2) return false;
    for (let i = 2; i <= Math.sqrt(num); i++) {
        if (num % i === 0) return false;
    }
    return true;
}

function getAllPermutations(arr) {
    const result = [];

    const permute = (current, remaining) => {
        if (current.length > 0) {
            
            result.push(parseInt(current));
        }
        for (let i = 0; i < remaining.length; i++) {
            permute(current + remaining[i], remaining.slice(0, i).concat(remaining.slice(i + 1)));
        }
    };

    permute('', arr);
    return result;
}

function solution(numbers) {
    const digits = numbers.split('');
    const uniquePrimes = new Set();

    const permutations = getAllPermutations(digits);
    permutations.forEach(num => {
        if (isPrime(num)) {
            uniquePrimes.add(num);
        }
    });

    return uniquePrimes.size;
}

