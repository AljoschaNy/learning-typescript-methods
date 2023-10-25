import {rickAndMortyArr} from "./rick.ts"

const numsArr:number[] = [1,2,4,6,8,12];
const numsArrTimes2:number[] = numsArr.map((num:number) => num * 2);
console.log(numsArrTimes2);


const namesArr:string[] = ["Aljoscha","Fabian","Hey","Enrico","Iskren","Dominic","Alexander","Marcell","Martin","Test"];
const filteredNamesArr: string[] = namesArr.filter(name => name.length > 5);
console.log(filteredNamesArr);

// Schritt 3
let iteration = 1;
console.log(numsArr);
const sumOfNumsArr:number = numsArr.reduce((accumulator, currentValue) => {
    console.log(`${iteration}.Iteration`);
    console.log("Acc: " + accumulator);
    console.log("Current: " + currentValue)
    iteration++;
    return accumulator + currentValue;
});
console.log(sumOfNumsArr);

// Schritt 4
const arrIncludesNumBigger10:boolean = numsArr.some(num => num > 10);
console.log(arrIncludesNumBigger10);

// Bonus

const getAllCharactersAlive = (characterArr: any[]) => {
    return characterArr
        .filter(character => character["status"] === "Alive");
}

const getNamesOfCharacters = (characterArr: any[]) => {
    return characterArr.map(character => character["name"]);
}

const mapCharacters = (characterArr: any[]) => {
    return characterArr.map(character => {
        return {
            someName: character.name,
            origin:character.origin.name
        }
    })
}


const rickCharactersAlive = getAllCharactersAlive(rickAndMortyArr);
const rickCharactersAliveNames:string[] = getNamesOfCharacters(rickCharactersAlive);


console.log(rickCharactersAliveNames);
console.log(mapCharacters(rickCharactersAlive));