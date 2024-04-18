// if a or b is an empty array, return a
// loop through a, adding to new array empty array elements that are not in b

function arrayDiff(a, b) {
  if (b.length === 0) {
    return a;
  } else if (a.length === 0) {
    return [];
  } else {
    let difference = [];
    a.forEach((element) =>
      !b.includes(element) ? difference.push(element) : null
    );
    return difference;
  }
}
