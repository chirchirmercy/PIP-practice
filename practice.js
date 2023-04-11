

//How to replace characters in a string
//replace all instances of e in the following string
const word="moon hook"
const j=word.replace(/o/g, "e")
console.log(j)

//how to capitalize the first characters in strings
//capitalize the first characters in the following 

let x = "i am a student"
let x2 = x.split(" ").map(([firstchar,...rest])=>firstchar.toUpperCase("")+rest.join("").toLowerCase("")).join(" ")
console.log(x2)

//How to remove duplicates from the strings
//remove duplicates strings in the following 
let names=["mercy","natalie","rose","cathy","grace","mercy","cathy","grace"]
function removeduplicates(names){
    return names.filter((x,index)=>names.indexOf(x)===index)

}
console.log(removeduplicates(names))

//concat is used to join two strings
//it perform the same function with(+)

//how to add two strings using concat and (+)
const string1="education is"
const string2="the key to success"
const string=string1+string2
console.log(string1+string2)
//
var strings1="Akirachix is"
var strings2=" the best place to learn"
console.log(strings1.concat(strings2))


//how to reverse a string
//Write a function that takes in a string and returns it when reversed
let school = "Akirachix"
let school2 = school.split("").reverse().join("")
console.log(school2)

    //Given years between 2000 and 2023, console all the leap years in the following
//sentence, i.e “2020 is a leap year” if not console log i.e “2001 is not a leap year”

for(let year=2000;year<=2023;year++){
    if(year%4==0){
        console.log(year+"is a leap year")
    }
    else{
        console.log(year+"is not a leap year")
    }
}


   

