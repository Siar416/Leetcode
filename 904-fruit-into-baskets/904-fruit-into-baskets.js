const totalFruit = (fruits) => {
  let lookup = {};
  let start = 0;
  let maxLength = 0;

  for (let end = 0; end < fruits.length; end++) {
    if (lookup[fruits[end]]) {
      lookup[fruits[end]]++;
    } else {
      lookup[fruits[end]] = 1;
    }

    while (Object.keys(lookup).length > 2) {
      lookup[fruits[start]]--;
      if (lookup[fruits[start]] === 0) {
        delete lookup[fruits[start]];
      }
      start++;
    }
    maxLength = Math.max(end - start + 1, maxLength);
  }
  return maxLength;
};