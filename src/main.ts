const numsArr:number[] = [1,2,4,6,8,12];
const numsArrTimes2:number[] = numsArr.map((num:number) => num * 2);
console.log(numsArrTimes2);


const namesArr:string[] = ["Aljoscha","Fabian","Hey","Enrico","Iskren","Dominic","Alexander","Marcell","Martin","Test"];
const filteredNamesArr: string[] = namesArr.filter(name => name.length > 5);
console.log(filteredNamesArr);

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

const arrIncludesNumBigger10:boolean = numsArr.some(num => num > 10);
console.log(arrIncludesNumBigger10);