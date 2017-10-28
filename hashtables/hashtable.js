//Takes a predefined hash table (hashTable), an element to be inserted into 
//that hashtable (element), and the number of separate keys the hash table
//will be divided into (numDiv);
function hash(hashTable, element, numDiv) {
    if (typeof hashTable === 'object') {
        var hashSum = 0;
        for (var char of element) {
            hashSum += char.charCodeAt(0);
        }
        if (hashTable[hashSum % numDiv]) {
            hashTable[hashSum % numDiv].push(element);
        } else {
            hashTable[hashSum % numDiv] = [element];
        }
    } else {
        throw new Error('Not a hashtable');
    }
}

//Creates an array of random strings made up of uppercase alphabet letters.
// maxStringLength is the max length of any given random string. 
// arrayLength is the length of the generated array.
function randomStringArray(maxStringLength, arrayLength) {
    var out = [];
    while (out.length < arrayLength) {
        var newString = '';
        var stringLength = Math.ceil(Math.random() * maxStringLength);
        for (var i = 0; i < stringLength; i++) {
            //char codes for alphabet = 65 - 90.
            var charCode = Math.floor(Math.random() * 25) + 65;
            newString += String.fromCharCode(charCode);
        }
        out.push(newString);
    }
    return out;
}

//creates and returns a new hash table from a given array. takes the array (arr), and the 
//number of separate keys the hash table will be divided into (numDiv)
function createHashTable(arr, numDiv) {
    var hashTable;
    for (var element of arr) {
        hash(hashTable, element, numDiv);
    }
    return hashTable;
}

//takes a hash table as an argument (hashTable), and returns another object showing how many elements 
// are in each key of that hash table.
function hashTableValues(hashTable) {
    var output = {};
    var i = 0;
    for (var key of Object.keys(hashTable)) {
        output[i] = hashTable[key].length;
        i++;
    }
    return output;
}

var stringArray = randomStringArray(15, 10000);
var hashTable = createHashTable(stringArray, 25);
var values = hashTableValues(hashTable);

console.log(values);