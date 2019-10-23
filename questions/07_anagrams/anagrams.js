// Given two strings check if they are anagrams of each other
// Return a boolean

const checkAnagrams = (str1, str2) => {
  return str1
  .toLowerCase()
  .split("")
  .sort()
  .join("") === str2
  .toLowerCase()
  .split("")
  .sort()
  .join("")
};






/* 
  console.log(str1.split('').sort().join(''))
  console.log(str2.split('').sort().join(''))
  return str1
  .toLowerCase()
  .split("") returns an array ['d', 'o', 'g'];
  .sort() sorts the array ['d','g','o'];
  .join("") returns an array === str2
  .toLowerCase()
  .split("")
  .sort()
  .join("")
};
*/

module.exports = { checkAnagrams };
