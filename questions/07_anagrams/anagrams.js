// Given two strings check if they are anagrams of each other
// Return a boolean

const checkAnagrams = (str1, str2) => {
  console.log(str1, str2)
  let reverseString = '';

  if(str1.length !== str2.length) {
    return false
  };

  for(let i = str2.length-1; i >= 0; i--) {
     reverseString += str2[i];
  }
  if(str1 === reverseString) {
    return true
  }
 
};

module.exports = { checkAnagrams };
