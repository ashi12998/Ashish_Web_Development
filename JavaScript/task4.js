// create a word meaning dictionary of 5 words 
var WordDictionary = {};
function addWord(Word,Meaning){
WordDictionary[Word] = Meaning;
}
 addWord("Ashish", "Name of a good person");
 addWord("Apple", "Nameof a Fruit");
 addWord("HTML", "it used for structuring the webpage");
 addWord("nodejs" ,"A runtime environment for executing js on serverside")
 addWord("css", " it is used for styling and formating webpage");
 function getMeaning(Word){
    return WordDictionary[Word]

 }
 console.log("Meaning of Ashish", getMeaning("Ashish"));
 console.log("Meaning of Apple", getMeaning("Apple"));
 console.log("Meaning of HTML", getMeaning("HTML"));
 console.log("Meaning of nodejs", getMeaning("nodejs"));


    
    
