export default (array: any[any]): any[any] => {
  const revArr = [];
  for (let index = array.length - 1; index >= 0; index--) {
    revArr.push(array[index]);
  }
  // OR:
  // array.forEach(ell => revArr.push(array.pop()));
  return revArr;
}
