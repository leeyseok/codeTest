function solution(cards1, cards2, goal) {
    for ( const word of goal ) {
        if (word === cards1[0]) {
            cards1.shift()
        } else        if (word === cards2[0]) {
            cards2.shift()
        } else {
            return 'No'
        }
        
    }

    return 'Yes';
}
// var a= solution(["i", "drink", "water"],["want", "to"],["i", "want", "to", "drink", "water"])
var a= solution(["i", "water", "drink"]	,["want", "to"],	["i", "want", "to", "drink", "water"])

console.log(a)
