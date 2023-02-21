
console.log("-------------------------------------------------------");
console.log("---------------findLargestNumber-----------------------");

//Récupération du nombre le plus grand

function findLargestNumber(NumArray)
{
    var maxNum
    maxNum = Math.max(...NumArray);
    return maxNum
}


var tab = [11,77,99,337,34];
console.log("Array : "+tab);
console.log("Max number inside array is : "+findLargestNumber(tab));

console.log("-------------------------------------------------------");
console.log("-----------------------sortWord------------------------");

//Tri des mots par ordre alphabétique croissant
const sortWord = wordsArray  => wordsArray.sort();


var stringTab = ["Sky","Earth", "Ocean", "Sea", "Sun", "Moon"];


console.log("Array : "+stringTab);
console.log("Sorted string array : "+sortWord(stringTab));

console.log("-------------------------------------------------------");
console.log("------------------------countOccurences----------------");

//Comptage du nombre de caractère dans une chaine
function countOccurences(StringParameter,character)
{
    let count = 0; 
for (const index of StringParameter) {
    if (index.includes(character)) {
        count++;
    }
    

    }
    return count;
}
var stringWord = "anticonstitutionnellement"
var character = "l"
console.log("String : "+stringWord+ "and character : "+character)
console.log("In the string : "+stringWord+" the character "+character+" is present : "+countOccurences(stringWord,character)+" times")

console.log("-------------------------------------------------------");
console.log("------------------------flattenArray-------------------");

//Tableau plat
function flattenArray(imbricatedArray)
{
    return imbricatedArray.flat(imbricatedArray.length);
}

var ImbArray = ["Univers",["Galaxies", ["Système Solaire"] ]];
console.log("Nested Array : ");
console.log(ImbArray);
console.log("Flatten Originally Nested Array : ");
console.log(flattenArray(ImbArray));

console.log("-------------------------------------------------------");
console.log("---------------------removeDupes-----------------------");

//Tableau nombres uniques/premiers

function removeDupes(NumArray) {
    const UniqueNumber = new Set();
    for (index of NumArray) {
        for (index2 = 2; index2 < index; index2++) {
            if (index % 2 !== 0) UniqueNumber.add(index);
        }
    }
    arrayUniqueNumber=[];
    UniqueNumber.forEach(element => {
        arrayUniqueNumber.push(element);
    });
    return arrayUniqueNumber;
}
NumArrayToRemoveDupes = [1, 3, 6 , 23 , 26 , 22 , 40 , 333 , 419 , 429]
console.log("Array base : "+NumArrayToRemoveDupes);
console.log("The uniques numbers inside the array above are : ");
console.log(removeDupes(NumArrayToRemoveDupes));

console.log("-------------------------------------------------------");
console.log("------------------------swapVariables------------------");



//Changement des valeurs de deux variables
function swapVariables(VarA, VarB)
{
    var VarTempA;
    var VarTempB;

    VarTempA = VarB;
    VarTempB = VarA;


    return [VarTempA+" and "+VarTempB]
}
var var1 = "Act";
var var2 = "Think";

console.log("Variables to swap : "+var1+ " and "+var2)
console.log(swapVariables(var1, var2));

console.log("-------------------------------------------------------");
console.log("-------------------parseObject-------------------------");

//Conversion objet en tableau de valeur

function parseObject(object)
{

    var ObjectPropertiesArray=[];
    for (index of Object.values(object)) 
    {
        ObjectPropertiesArray.push(index);
    }
    return ObjectPropertiesArray;


}
const objectToParse = {Complément:"N'importe où", Sujet: "je", Verbe: "suis", Nom: 'détective', Adjectif:"privé"};
console.log("Object initialized");
console.log(objectToParse);
console.log(parseObject(objectToParse));

console.log("-------------------------------------------------------");
console.log("-------------------mergeObjects------------------------");

function mergeObjects(objectA, objectB)
{
    
    objectTemp =  {};
    for (var properties in objectA) 
    { 
        objectTemp[properties] = objectA[properties]; 
    }

    for (var properties in objectB) 
    { 
        objectTemp[properties] = objectB[properties]; 
    }
        
    return {...objectTemp};

}

objectFirst = {Word1:"Jamais", Num1:"deux"};
objectLast = {Word2:"Sans", Num2:"trois"}
console.log("Object1 and Object2 : ");
console.log(mergeObjects(objectFirst,objectLast));

console.log("-------------------------------------------------------");
console.log("------------------------sumArray-----------------------");


//Somme de toutes les valeurs du tableau

function sumArray(NumArray)
{
    let sum=0;

    for (const index of NumArray) {

        sum+=index;
        
    }
    return sum;

}
ArrayToSum = [1,1,2,2,4,10,30,50,100];
console.log("The number array : "+ArrayToSum);
console.log("The Sum of the array just above is : "+sumArray(ArrayToSum));

console.log("-------------------------------------------------------");
console.log("--------------sortObject-------------------------------");


//Objet trié par odre alphabétique croissant des propriétés

function sortObject(object) {
    SortedArray = [];
    for (index of Object.values(object))
    { 
        SortedArray.push(index);
    }
    SortedArray.sort()
    return SortedArray;
}

GoldRG={1:"Gloire et",3:"Fortune",2:"Pouvoir"};
console.log("Unsorted object : ");
console.log(GoldRG);
console.log("Sorted array based on previous object : ");
console.log(sortObject(GoldRG));

console.log("-------------------------------------------------------");
console.log("-------------------------------------------------------");
