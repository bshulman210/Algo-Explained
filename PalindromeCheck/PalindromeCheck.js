string = "abcdcba";

function isPalindrome(str) {
  // In case there's any capital letter, its best to check full lowercase or uppercase
  str = str.toLowerCase();

  //if str length=== 1 return true.
  if (str.length === 1) return true;
  if (str.length === 2) {
    //if str length === 2 check if they equal
    return str[0] === str[str.length - 1];
  }
  //else, check for each char, back vs front letter.
  let firstChar = str[0];
  let lastChar = str[str.length - 1];
  //If the first character it's not equal to the last character, return false.
  if (firstChar !== lastChar) return false;

  // Else, call the function back on the rest of the string;
  let otherLetters = isPalindrome(str.slice(1, -1));
  // return the result.
  return otherLetters;
}

isPalindrome(string);
