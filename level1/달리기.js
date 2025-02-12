function solution(players, callings) {
    const rankMap = new Map();
    players.forEach((player, index) => {
        rankMap.set(player, index);
    });

    callings.forEach((calling) => {
        let currentIndex = rankMap.get(calling);
        if (currentIndex > 0) {
            let prevIndex = currentIndex - 1;
            let prevPlayer = players[prevIndex];
            players[prevIndex] = calling;
            players[currentIndex] = prevPlayer;

            rankMap.set(calling, prevIndex);
            rankMap.set(prevPlayer, currentIndex);
        }
    });

    // console.log(players)
    return players;
}


solution(["mumu", "soe", "poe", "kai", "mine"],	["kai", "kai", "mine", "mine"])
