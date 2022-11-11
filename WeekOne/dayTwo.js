// Given length of a regular hexagon, your function should return area of the hexagon.

const areaOfHexagon = (len) => ((3 * Math.sqrt(3) * len ** 2) / 2).toFixed(2);

console.log(areaOfHexagon(10))

// Given an array and an item, your function should return the index at which the item is present.

const findIndex = (array, item) =>{
    let result = -1

    for(let idx in array){
        if(array[idx] === item) result = idx;
    }

    return result
}

console.log(findIndex([2,4,7,6,3,25,14,69],25))

// Given a sentence, return a sentence with first letter of all words as capital.

const capitalizer = (sentence) =>{
    let result = ''
    let capitalize = true

    for(let item of sentence){
        if(capitalize){
            result += item.toUpperCase()
            if (item !== " ") {
			    capitalize = false;
            }
        }else{
            result += item
            if(item === ' '){
                capitalize = true
            }
        }
    }

    return result
}

console.log(capitalizer('This would be CapiTalised'))