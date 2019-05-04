let wordList = ["google", "chrome", "firefox", "opera", "explorer", "javascript", "jquery",
"html", "css", "github", "bootstrap", "python", "developer", "programmer","website", "internet",
"browser", "screen", "footer", "header", "document", "application"];

let randNum = [Math.floor(Math.random() * wordList.length)];
let wordChoice = wordList[randNum];
let rightWord = [];
let wrongWord = [];
let docUnderScore = document.getElementsByClassName("underscore");

underScore = [];

console.log(wordChoice);

let generateUnderscore = () => {
    for(let i = 0; i < wordChoice.length; i++) {
        underScore.push("_");
    }
    return underScore;

    }

    
console.log(generateUnderscore());

document.addEventListener("keypress", (event) => {
    let keyword = String.fromCharCode(event.keycode);
    if(wordChoice.indexOf(keyword) > -1) {
        rightWord.push(keyword);
        underScore[wordChoice.indexOf(keyword)] = keyword;
        docUnderScore[0].innerHTML = underScore.join(' ');
        docRightGuess[0].innerHTML = rightWord;
        
        if(underScore.join('') === wordChoice){
        alert('You Win');
    }
}})
   