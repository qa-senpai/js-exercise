// Write a JavaScript function to chop a string into chunks of a given length.

// First version
function string_chop(str, num) {
  const arrToReturn = [];

  if (!num) {
    arrToReturn.push(str);
    return arrToReturn;
  }

  let strNew = String(str);
  let iterationLength = 0;

  for (let i = 0; i < strNew.length; i += num) {
    iterationLength = iterationLength + num;

    str = strNew.slice(i, iterationLength);
    arrToReturn.push(str);
  }

  return arrToReturn;
}

console.log(string_chop("w3resource"));
console.log(string_chop("w3resource", 2));
console.log(string_chop("w3resource", 3));

// Expected Output:
// ["w3resource"]
// ["w3", "re", "so", "ur", "ce"]
// ["w3r", "eso", "urc", "e"]

// Second version
function stringChop(str, num) {
  if (!num) return [str];

  const arrToReturn = [];

  for (let i = 0; i < str.length; i += num) {
    arrToReturn.push(str.slice(i, i + num));
  }

  return arrToReturn;
}

console.log(stringChop("w3resource"));
console.log(stringChop("w3resource", 2));
console.log(stringChop("w3resource", 3));

//using regexp
function stringChopR(str, num) {
  if (!num) return [str];

  const regex = new RegExp(`.{1,${num}}`, "g");
  return str.match(regex) || [];
}

console.log(stringChopR("w3resource"));
console.log(stringChopR("w3resource", 5));
console.log(stringChopR("w3resource", 3));
