import _ from '../lib/index';

const arr = [1, 2, 3, 5, 4];
console.log('_______REVERSE_______');
console.log('before: ', arr);
console.log('after: ', _.array.reverse(arr));


console.log('\n\n_________JOIN_________');
console.log('array: ', arr);
console.log('join with ",": ', _.array.join(arr));
console.log('join with " ~": ', _.array.join(arr, ' ~'));
