// Q. Given a and b, your function should return the value of a^b

const multiplier = (a,b) => a*b;

console.log(multiplier(2,4))

// Q. Given an array, your function should return the length of the array.

const findLength = (arr) =>{
    let count = 0;
    
    for(let element of arr){
        count += 1
    }
    return count
}

console.log(findLength([2,5,4,2]))

// Given an input string S and two characters c1 and c2, you need to replace every occurrence of character c1 with character c2 in the given string.

const forwardString = (str, forwardBy) =>{
    let result = '';

    for(let char of str){
        let charCode = char.charCodeAt(0)
        let newPosition = charCode+(forwardBy%26)
        if(charCode>=96 && charCode <=122){
            if (newPosition > 122) {
				result += String.fromCharCode(newPosition - 26);
			}else{
                result += String.fromCharCode(newPosition)
            }
        }else if(charCode >=65 && charCode <=90){
            if (newPosition > 90) {
				result += String.fromCharCode(newPosition - 26);
			} else {
				result += String.fromCharCode(newPosition);
			}
        }
    }
    return result;
}

console.log(forwardString('zZ', 36))