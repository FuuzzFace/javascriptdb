var string = prompt("Enter a string");
console.log(string);
document.write(string);

var number = prompt("Enter a Number value ");
console.log(number);
document.write("<br> "+number);

var stringchar = prompt("Enter a string");
console.log("String is "+ stringchar);
document.write("<br>" +"String is " + stringchar+ "<br>");
for (var i =stringchar.length-1; i>=0; i--){
    console.log(stringchar[i]);
    document.write(stringchar[i]);
}

var branch= prompt("Enter a Branch \"Three digit code\" ");
if(branch.length==3){
    console.log(branch.toUpperCase());
    document.write("<br>" + branch.toUpperCase());
}
else{
    console.log("Invalid");
    document.write("<br>" + "Invalid");
}

var age=prompt("Enter a Age");
var swap=Number(number);
number=Number(age);
age=swap;
consoleprint();
documentprint();
numberadd();


function consoleprint(){
    console.log(number);
    console.log(age);
}

function documentprint(){
    document.write("<br>"+number);
    document.write("<br>" + age);
}

function numberadd(){
    console.log("Addition of both number "+ (number+age));
    document.write("<br>" +"Addition of both number " +(number+age));
}