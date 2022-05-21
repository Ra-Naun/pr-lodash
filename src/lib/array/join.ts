export default (array: any[any], separator: string = ','): string => {
  const strFromArr = array.slice(1).reduce((acc, ell) => `${acc}${separator} ${ell}`, +array[0]);
  return strFromArr;
}
