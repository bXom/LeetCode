'use strict';
let i = 100;
const condition = () => {
    console.log('1', i);
    return i > 98;
};
while (condition()) {
    console.log('2', i);
    // i--;
    --i;
    console.log('3', i);
}
;