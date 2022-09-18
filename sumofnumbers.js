console.log(1);
const data = [1, 2, 3];
function sumFor(list) {
  let sum = 0;
  for (let i = 0; i < list.length; i++) {
    sum += list[i];
  }
  return sum;
}
console.log(sumFor([1, 2, 3]));

function sumWhile(list) {
  let sum = 0;
  let i = 0;
  while (i < list.length) {
    sum += list[i];
    i++;
  }
  return sum;
}
console.log(sumWhile(data));

function sumRecursion(list) {
  if (list < 1) {
    return 0;
  }
  return (list + sumRecursion(list - 1));
}
console.log(sumRecursion(data));

function sumTheSimpleWay(list) {
  return _.each(list, (memo, key) => memo + key);
}
console.log(sumTheSimpleWay(data));
