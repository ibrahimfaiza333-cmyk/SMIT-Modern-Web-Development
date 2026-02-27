// task 1

var city=prompt("enter your city name");
if(city==="karachi"){
    console.log("welcome to the city of lights")
}


// task2

var gender=prompt("enter your gender");
if(gender==="male"){
    console.log("welcome sir")
}else if(gender==="women "){
 console.log("welcome maam")
}



// task3

var light=prompt("enter the current light color");
if(light==="Red"){
    console.log("must stop")
}else if(light==="Yellow"){
    console.log("ready to move")
}else if(light==="green"){
    console.log("move now")
}else{
    console.log("invalid input")
}

// task 4

var fuel=prompt("enter the current fuel quantity");

if(fuel<0.25){
    console.log("please refil your tank")
}
// task5

// task 6

var sub1 = Number(prompt("Enter marks of Subject 1:"));
var sub2 = Number(prompt("Enter marks of Subject 2:"));
var sub3 = Number(prompt("Enter marks of Subject 3:"));

var totalMarks = 300;
var obtained = sub1 + sub2 + sub3;
var percentage = (obtained / totalMarks) * 100;

var grade;
var remarks;

if (percentage >= 80) {
    grade = "A-one";
    remarks = "Excellent";
}
else if (percentage >= 70) {
    grade = "A";
    remarks = "Good";
}
else if (percentage >= 60) {
    grade = "B";
    remarks = "You need to improve";
}
else {
    grade = "Fail";
    remarks = "Sorry";
}

document.write("<h1>Marks Sheet</h1>");
document.write("Total marks: " + totalMarks + "<br>");
document.write("Marks obtained: " + obtained + "<br>");
document.write("Percentage: " + percentage.toFixed(2) + "%<br>");
document.write("Grade: " + grade + "<br>");
document.write("Remarks: " + remarks);

// task 7

var secretenumber=5;
var guess=prompt("guess the number");
var num=guess+1
if(guess===secretenumber){
    console.log("bongo !correct answer");
}else if(num){
    console.log("close enough to the correct answer")
}


// task 8

var num=prompt("enter the number divisible by 3")

if(num%3==0){
console.log("the number is divisible by 3")
}

// task 9

var num=prompt("enter the number divisible by 3")

if(num%2==0){
console.log("the number is even")
}else{
    console.log("the number is odd");
}

// task 10

var T=prompt("enter the temperature")
if(T>40){
    console.log("its hot outside");
}else if(T>30){
    console.log("the weather today is normal")
}else if(T>20){
    console.log("todays weather is cool")
}else if(T>10){
    console.log("OMG TODAYS WEATHER IS SO COOL")
}


// TASK 11

var num1=+prompt("enter first number");
var num2=+prompt("enter second number");
var op=prompt("enter the operation ");
if(op=== "+"){
    console.log(num1+num2);
}else if(op=== "-"){
    console.log(num1-num2);
}else if(op=== "*"){
    console.log(num1*num2);
}else if(op=== "/"){
    console.log(num1/num2);
}else if(op=== "%"){
    console.log(num1%num2);
}