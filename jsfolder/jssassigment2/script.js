//  question 1
//  var a = 10;

//     document.write("<h2>Result:</h2>");

//     document.write("The value of a is: " + a + "<br>");
//     document.write("....................................<br><br>");

//     // Pre-increment
//     document.write("The value of ++a is: " + (++a) + "<br>");
//     document.write("Now the value of a is: " + a + "<br><br>");

//     // Post-increment
//     document.write("The value of a++ is: " + (a++) + "<br>");
//     document.write("Now the value of a is: " + a + "<br><br>");

//     // Pre-decrement
//     document.write("The value of --a is: " + (--a) + "<br>");
//     document.write("Now the value of a is: " + a + "<br><br>");

//     // Post-decrement
//     document.write("The value of a-- is: " + (a--) + "<br>");
//     document.write("Now the value of a is: " + a + "<br>");

    // question 2

//     var a=2;
//     var b=1;

// var a = 2, b = 1;

// var result = --a - --b + ++b + b--;


// document.writeln("the value of a "+a)
// document.writeln("the value of b"+b)
// document.write("result is "+result)



    // question 3


// var name=prompt("enter your name");
// document.writeln("hello! " +name+"welcome ;)");


    // question 4

//     var num=+prompt("enter the number to have the multiplaction table");

//     for(var i=1;i<=10;i++){
//  document.writeln(num+"x" +i+"=" +i*num);
//     }


    // question 5



// a) Take three subject names from user
var sub1 = prompt("Enter first subject name:");
var sub2 = prompt("Enter second subject name:");
var sub3 = prompt("Enter third subject name:");

// b) Total marks for each subject
var totalMarksPerSubject = 100;

// c & d) Take obtained marks from user
var marks1 = +prompt("Enter obtained marks for " + sub1 + ":");
var marks2 = +prompt("Enter obtained marks for " + sub2 + ":");
var marks3 = +prompt("Enter obtained marks for " + sub3 + ":");

// e) Calculate total and percentage
var totalMarks = totalMarksPerSubject * 3;
var obtainedMarks = marks1 + marks2 + marks3;
var percentage = (obtainedMarks / totalMarks) * 100;

// Show result in browser using table
document.write("<h2>Result</h2>");
document.write("<table border='1' cellpadding='8'>");

document.write("<tr><th>Subject</th><th>Total Marks</th><th>Obtained Marks</th></tr>");
document.write("<tr><td>" + sub1 + "</td><td>" + totalMarksPerSubject + "</td><td>" + marks1 + "</td></tr>");
document.write("<tr><td>" + sub2 + "</td><td>" + totalMarksPerSubject + "</td><td>" + marks2 + "</td></tr>");
document.write("<tr><td>" + sub3 + "</td><td>" + totalMarksPerSubject + "</td><td>" + marks3 + "</td></tr>");

document.write("<tr><th>Total</th><th>" + totalMarks + "</th><th>" + obtainedMarks + "</th></tr>");
document.write("<tr><th colspan='2'>Percentage</th><th>" + percentage.toFixed(2) + "%</th></tr>");

document.write("</table>");
