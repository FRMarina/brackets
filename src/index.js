module.exports = function check(str, bracketsConfig) {
   let map = new Map(bracketsConfig);
  let array = [];

  for (let element of str) {
      if (element === map.get(array[array.length - 1])){
        array.pop();
      }else array.push(element);
  }

  return !array.length;
}
