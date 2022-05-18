export default (array: any[any]): any[any] => {
  const revArr = [];
  const { length } = array;
  for (let index = length - 1; index >= 0; index--) {
    revArr.push(array[index]);
  }
  // OR:
  // for (let index = 0; index < length; index++) {
  //   revArr.push(array.pop());
  // };
  return revArr;
}
