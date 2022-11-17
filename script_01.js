
/*** Mini-Challenge  */
// Satzbau + Punktuation

// Vereinbarung:
// "S" (sentence) --> "."  Ich bin Max.
// "Q" (question) --> "?"  Bist du Max?
// "E" (exclamation) --> "!"  Ich bin!

// Parameter --> funktion getSentence([ ...], "Q"){ ...}


/*** Funktion mit Array als Parameter */
// mögliche Tests:
output(getSentence(["Ich","bin","Max"],"S"));
output(getSentence(["Bist","du","Max"],"Q"));
output(getSentence(["Ich","bin"],"E"));
output(getSentence(["Ich","hätt","gern","die","Platt","von","dene","zwei","diwodaso","Spass","mache,"," habbe","Sie","die"],"Q"));

function getSentence(arr, char){
    const GAP = " ";
    zeichen = testChar(char);
    let str = "";

    for (let i = 0; i < arr.length; i++)
    {
        str += arr[i].trim() + GAP;
    }
    return str.trim() + zeichen;
}

function testChar(char) {
    switch (char) {
        case "S":
            return ".";
        
        case "Q":
            return "?";

        case "E":
            return "!";        
    
        default:
            return "...";
    }
}


function output(outPutData) {
    console.log(outPutData);
}