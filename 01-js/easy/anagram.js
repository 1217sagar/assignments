/*
  Write a function `isAnagram` which takes 2 parameters and returns true/false if those are anagrams or not.
  What's Anagram?
  - A word, phrase, or name formed by rearranging the letters of another, such as spar, formed from rasp.
*/

function isAnagram(str1, str2) {
	let obj = {};

	for(let i=0; i<str1.length ; i++){
		let ch = str1[i].toUpperCase();
		if(!obj[ch])
			obj[ch] = 1;
		else{
			let val = obj[ch];
			obj[ch] = val + 1;
		}
	}

	for(let i=0; i<str2.length; i++){
		let ch = str2[i].toUpperCase();
    if(!obj[ch])
      return false;
    else{
      let val = obj[ch];
      obj[ch] = val - 1;
    }
	}
	
	let flag = true;
	Object.values(obj).forEach((val) => {
		if(val!=0){
			flag = false;
			return;
		}
	})

	return flag;
}

module.exports = isAnagram;
