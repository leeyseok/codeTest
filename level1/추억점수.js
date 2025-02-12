// 문제푸는 곳
function solution(name, yearning, photo) {
    // 비교할곳
    const a  = {}
    name.forEach((ele, index) => {
        a[ele] = yearning[index]
    });
    let answer = Array(photo.length).fill(0)
    photo.forEach((arr, index) => {
        arr.forEach((asd) => {
            console.log(a[asd])
            if (a.hasOwnProperty(asd)) {

                answer[index] += a[asd]
            }
        })
    })
   console.log(answer)
    return answer;
}
solution(["may", "kein", "kain", "radi"],[5, 10, 1, 3],	[["may", "kein", "kain", "radi"],["may", "kein", "brin", "deny"], ["kon", "kain", "may", "coni"]])