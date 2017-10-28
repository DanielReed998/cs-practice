function hash(hashtable, element, hashSize) {
    if (typeof hashtable === 'object') {
        var hashSum = 0;
        for (var char of element) {
            hashSum += char.charCodeAt(0);
        }
        if (hashTable[hashSum % hashSize]) {
            hashTable[hashSum % hashSize].push(element);
        } else {
            hashTable[hashSum % hashSize] = [element];
        }
    }
}

var hashTable = {};
var wordArray = ['hello', 'hi', 'greetings', 'dog', 'cat', 'gerbil', 'Hoagie', 'this is tedious',
    'should have made a separate function for this', 'animal', 'another animal'
];

for (var word of wordArray) {
    hash(hashTable, word, 10);
}

console.log(hashTable);