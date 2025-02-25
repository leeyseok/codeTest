function solution(n, w, num) {
    let boxes = [];
    let f = 0;
    let d = 'r';
    for (let i = 1; i <= n; i++) {
        if (!boxes[f]) boxes[f] = [];

        if (d === 'r') {
            boxes[f].push(i);
        } else {
            boxes[f].unshift(i);
        }

        if (i % w === 0) {
            d = d === 'r' ? 'l' : 'r';
            f++;
        }
    }
    console.log('boxes', boxes.length);
    if ( boxes[boxes.length- 1].length < w) {
        for ( let j = boxes[boxes.length- 1].length; j < w; j++) {
            if (d === 'l' ) {
                boxes[boxes.length- 1].unshift(0);
            } else {
                boxes[boxes.length- 1].push(0);

            } 
        }
    }
    console.log('boxes', boxes);
    const tf = boxes.findIndex(box => box.includes(num));
    console.log('tf', tf);
    const idx = boxes[tf].indexOf(num);
    console.log('idx', idx);
    // const maxH = boxes.length;
    const maxH = (boxes[boxes.length - 1][idx]) !== 0 ? boxes.length : boxes.length - 1;
    console.log('boxes[boxes.length - 1][idx]', boxes[boxes.length - 1][idx]);
    console.log('boxes.length', boxes.length);
    console.log('maxH', maxH);
    console.log( maxH - tf);
    return maxH - tf;
}

// Example usage:
let n = 22;
let w = 6;
// solution(	22, 6, 8);
solution(13, 3, 10);
