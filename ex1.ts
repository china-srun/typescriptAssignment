export{}

function myTest(name:string):boolean {

    if(name.length > 5) {
        return true;
    }
    else {
        return false;
    }
}

let word1 = myTest("Typescript is Epic!");
console.log(word1);

let word2 = myTest("owo");
console.log(word2);