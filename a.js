function solution(n) {
    if (n === 1) return "*";

    let prev = solution(n / 3).split("\n")
    console.log(prev)
    let length = prev.length;
    let result = []
    for (let i = 0; i < 3; i++) {
        for (let j = 0; j < length; j++) {
            if (i === 1) {
                // 중간에 공백 그전까진 기존
                result.push(prev[j] + " ".repeat(length) + prev[j]); 
            } else {
                // 나머지 기존반복
                result.push(prev[j].repeat(3))
            }
        }
    }
    return result.join("\n")
}
console.log(solution(3))
console.log('-----------')
console.log(solution(9))
console.log('-----------')
console.log(solution(27))
