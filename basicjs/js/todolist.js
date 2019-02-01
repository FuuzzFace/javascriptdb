alert("Welcome to a To-Do-List");
var user = prompt("Enter what you want to do {Show, Insert, Update, Delete, Print, Quit}");
var databox = [];
while (user !== "quit" && user !== "Quit") {
    if (user === "show" || user === "Show") {
        show();
    }
    else if (user === "Insert" || user === "insert") {
        insert();
    }
    else if (user === "print" || user === "print") {
        print();
    }
    else if (user === "update" || user === "Update") {
        update();
    }
    else {
        delet();
    }
    var user = prompt("Enter what you want to do {Show, Insert, Update, Delete, Print, Quit}");
}
alert("You have quit the App");


function show() {
    console.log(databox);
}
function insert() {
    var ask = prompt("From Where you want to Insert");
    var x = prompt("Enter Your To-Do");
    if (ask === "start" || ask === "Start") {
        databox.unshift(x);
    }
    else if (ask === "end" || ask === "End") {
        databox.push(x);
    }
    else {
        alert("Invalid Input");
    }
}
function delet() {
    var ask = prompt("From where you want to delete");
    if (ask === "end" || ask === "End") {
        databox.pop();
    }
    else if (ask === "start" || ask === "Start") {
        databox.shift();
    }
    else {
        alert("Invalid Input");
    }
}
function print() {
    for (var i = 0; i < databox.length; i++) {
        document.write(i + " " + databox[i] + "<br>")
    }
}

function update() {
    var Num = prompt("Which one you want to Update ");
    var up = prompt("Enter your Update value");
    if (Num >= 0 && Num <= 100) {
        databox[Num] = up;
    }
    else {
        alert("Invalid Input")
    }
}


// its a fucking to do list app with actions like show, insert, update, delete, quit