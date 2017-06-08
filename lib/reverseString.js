'use strict';

module.exports = {

reverseString: (word) => {
	var result = word.split("").reverse().join("");
	if(word.length === 0){
        return null;
    }
    if(word === result){
        return true;
    }
 
      return result;

}
};