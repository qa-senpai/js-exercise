// Write a JavaScript function to count substrings in a string.

function count(str, substr) {
  let index = 0;
  let c = 0;

  for (let i = 0; i < str.length; i = index + 1) {
    index = str.toLowerCase().indexOf(substr.toLowerCase(), i);

    if (index !== -1) {
      c = c + 1;
    } else break;
  }

  return c;
}

// Test Data :
console.log(count("The quick brown fox jumps over the lazy dog", "the")); // Output : 2
console.log(count("The quick brown fox jumps over the lazy dog", "fox")); // Output : 1
