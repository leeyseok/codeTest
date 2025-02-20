function solution(today, terms, privacies) {
    const endDay = 28
    var answer = [];
    const [ year, month, day ] = today.split('.').map(Number)
    const todayDays = (year * 12 * 28) + (28 * month) + day
    const termsInfo = {}
    terms.forEach((term) => {
        const [key, value] = term.split(' ')
        termsInfo[key] = value
    })
    privacies.forEach((privacy, index) => {
        const [startDay, type] = privacy.split(' ')
        const [sy, sm, sd] = startDay.split('.').map(Number)
        const expiredDate = (sy * 12 * 28) + (28 * sm) + sd + (28 * termsInfo[type]) - 1
        if (expiredDate < todayDays) {
            console.log(todayDays)
            console.log(expiredDate)
            answer.push(index + 1);
        }
    });

    console.log(answer)
    return answer;
}

solution("2022.05.19",["A 6", "B 12", "C 3"], ["2021.05.02 A", "2021.07.01 B", "2022.02.19 C", "2022.02.20 C"])