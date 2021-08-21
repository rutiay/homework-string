//! 1

function longerThanFive(stringToCheck){
    if (stringToCheck.length > 5){
        return "Long";
    }
    return "Short";
}

//! --------------------------------------------------------------
//! 2

function checkIfAExist(stringToCheck) {
    if (stringToCheck.indexOf("a") != -1) {
        return stringToCheck.indexOf("a");
    }
    return "not found";
}

//! --------------------------------------------------------------
//! 3

function isRExist(stringToCheck) {
    if (stringToCheck.indexOf("r") != -1) {
        return true;
    }
    return false;
}

//! --------------------------------------------------------------
//! 4

function isCharExist(stringToCheck, charToFind){
    if(stringToCheck.indexOf(charToFind) != -1){
        return true;
    }
    return false;
}

//! --------------------------------------------------------------
//! 5

function checkIfCharExist(stringToCheck, charToFind){
    if(stringToCheck.lastIndexOf(charToFind) != -1){
        return stringToCheck.lastIndexOf(charToFind);
    }
    return `The char: '${charToFind}' is not in the string'`;
}

//! --------------------------------------------------------------
//! 6

function getFirstThreeSubStr(){
    return "sayonara".substr(0,3);
}

//! --------------------------------------------------------------
//! 7

function getFourCharsSubStr(){
    return "sayonara".substr(2,4);
}

//! --------------------------------------------------------------
//! 8

function getCharsSubStr(){
    return "sayonara".substr(3);
}

//! --------------------------------------------------------------
//! 9

function checkIndexInString(stringToCheck, indexToCheck){
    if(stringToCheck.length - 1 < indexToCheck){
        return `${indexToCheck} is too big`;
    }
    return stringToCheck.substr(indexToCheck);
}

//! --------------------------------------------------------------
//! 10

function checkIndexInString2(stringToCheck, indexToCheck){
    if(stringToCheck.length - 1 < indexToCheck){
        return `${indexToCheck} is too big`;
    }
    return stringToCheck.substr(indexToCheck, 3);
}

//! --------------------------------------------------------------
//! 11

function getPartOfSrting(someString, start, end){
    if (start < 0 || end > someString.length - 1 || start > end){
        return "Error";
    }
    return someString.substring(start,end);
}

//! --------------------------------------------------------------
//! 12

function getFirstThreeSubString(){
    return "sayonara".substring(0,3);
}

//! --------------------------------------------------------------
//! 13

function getFourCharsSubString(){
    return "sayonara".substring(2,6);
}

//! --------------------------------------------------------------
//! 14

function getCharsSubString(){
    return "sayonara".substring(3);
}

//! --------------------------------------------------------------
//! 15

function printLengthOfString(stringToCheck) {
    console.log(stringToCheck.length); 
}

function isSpaceInString(stringToCheck) {
    if (stringToCheck.indexOf(" ") != -1) {
        console.log(true); 
        return;
    }
    console.log(false);
}

function getFirstName(stringToCheck) {
    return stringToCheck.substring(0, stringToCheck.indexOf(" "));
}

function getLastName(stringToCheck) {
    return stringToCheck.substring(stringToCheck.indexOf(" ") + 1);
}

function printFullName(stringToCheck){
    console.log(`First Name: ${getFirstName(stringToCheck)}, Last Name: ${getLastName(stringToCheck)}`);
}

//! --------------------------------------------------------------
//! 16

function isIdenticalLower (stringOne, stringTwo){
    if(stringOne.toLowerCase() == stringTwo.toLowerCase()){
        return true;
    }
    return false;
}

//! --------------------------------------------------------------
//! 17

function isIdenticalUpper (stringOne, stringTwo){
    if(stringOne.toUpperCase() == stringTwo.toUpperCase()){
        return true;
    }
    return false;
}

//! --------------------------------------------------------------
//! 18

function LongerString(firstName, lastName) {
    if (firstName.length > lastName.length) {
        console.log(firstName);
        return;
    }
    console.log(lastName);
}

//! --------------------------------------------------------------
//! 19

function isAExist(stringToCheck) {
    if (stringToCheck.indexOf("a") != -1) {
        return true;
    }
    return false;
}

function isApiExist(stringToCheck) {
    if (stringToCheck.indexOf("api") != -1) {
        return true;
    }
    return false;
}

function printIfExist(firstName, lastName){
    console.log(`Does 'A' exist in first name: ${isAExist(firstName)}.\nDoes "Api" exist in last name: ${isApiExist(lastName)}.`);
}

//! --------------------------------------------------------------
//! 20 - (זהה לתרגיל 1)

function longerThanFive(stringToCheck){
    if (stringToCheck.length > 5){
        return "Long";
    }
    return "Short";
}

//! --------------------------------------------------------------
//! 21

function checkLengthOfString(stringToCheck) {
    if (stringToCheck.length < 3) {
        return "Yes";
    }
    return "No";
}

//! --------------------------------------------------------------
//! 22

function checkString(stringToCheck, charToFind){
    if (stringToCheck.length > 6){
        return stringToCheck;
    }
    return string.indexOf(charToFind);
}

//! --------------------------------------------------------------
//! 23

function checkIfCharInString(stringToCheck, charToFind) {
    if (stringToCheck.indexOf(charToFind) != -1) {
        return stringToCheck.indexOf(charToFind);
    }
    return stringToCheck;
}

//! --------------------------------------------------------------
//! 24


function getFullName(nameOne, nameTwo){
    let fullName = `${getFirstName(nameOne)}. ${getLastName(nameTwo)}`
    return fullName;
}

function getFirstName(name){
    return name.substr(0,1);
}

function getLastName(name){
    return name.toUpperCase();
}

//! --------------------------------------------------------------
//! 25

function getLongerPrintShorter(stringOne, stringTwo){
    if(stringOne.length > stringTwo.length){
        console.log(stringTwo.toLowerCase());
        return stringOne;
    }
    console.log(stringOne.toLowerCase());
    return stringTwo;
}

//! --------------------------------------------------------------
//! 26

function checkIndexOfChar(userName, charToFind){
    if(userName.indexOf(charToFind) != -1){
        return userName;
    }
    return `The char: '${charToFind}' is not in the string'`;
}

//! --------------------------------------------------------------
//! 27

function checkName(userName){
    var index = userName.indexOf(" ");
    var endIndex = userName.lastIndexOf(" ");
    if(index == -1){
        return `${userName[0].toUpperCase()}${userName.substr(1).toLowerCase()}`
    }
    else if(index != -1 && endIndex != -1 && index != endIndex){
        return(`First name: ${userName.substr(0,index)}.\nmiddle name: ${userName.substring(index + 1, endIndex)}.\nlast name: ${userName.substring(endIndex + 1)}.`);
    }
    else{
        return [userName.substr(0,index),userName.substring(index + 1)];
    }
}



