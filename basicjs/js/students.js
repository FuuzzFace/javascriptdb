alert("Welcome to Student Database");
var user = prompt("What you want to do ? {Show, Insert, Update, Print, Delete, Quit");
var databox= [];
    while(user!=="quit"&& user!=="Quit"){
        if (user === "Insert" || user === "insert") {
            inst();
        }
        else if (user === "Show" || user === "show") {
            showall();
        } 
        else if (user === "Update" || user === "update"){
            updat();
        }
        else if (user === "Print" || user === "print") {
            print();
        }
        else if (user === "Delete" || user === "delete") {
            delet();
        }
        else{
            alert("Invalid Input");
        }
        var user = prompt("What you want to do ? {Show, Insert, Update, Print, Delete, Quit");
    }
    alert("You have quit the app");


    function inst(){
        var where=prompt("Where you want to insert? {start/end}");
        if(where==="end"||where==="end"){
            var nam = prompt("Enter name of student");
            var age = prompt("Enter age of student");
            var dom = prompt("Enter working domain of student");
            var objbox = {};
            objbox.Name = nam;
            objbox.Age = age;
            objbox.Domain = dom;
            databox.push(objbox);
        }
        else if (where === "start" || where === "start"){
            var nam = prompt("Enter name of student");
            var age = prompt("Enter age of student");
            var dom = prompt("Enter working domain of student");
            var objbox = {};
            objbox.Name = nam;
            objbox.Age = age;
            objbox.Domain = dom;
            databox.unshift(objbox);
        }
        else{
            alert("Invalid Input");
        }
    }
    function showall(){
        for(var i=0; i<databox.length;i++){
            console.log(i+ " "+ databox[i].Name +" "+ databox[i].Age+ " "+ databox[i].Domain);
        }
    }

    function updat(){
        var no=prompt("Enter the serial number of data you want to update");
        var which=prompt("Enter what you want to update");
        var chan=prompt("Enter the update");
        if (which === "name"|| which==="Name") {
            databox[no].Name = chan;
        }
        else if(which === "Age" || which === "age") {
            databox[no].Age = chan;
        }
        else if(which === "domain" || which === "Domain") {
            databox[no].Domain = chan;
        }
        else{
            alert("Invalid Option provided")
        }  
    }

    function print(){
        for (var i = 0; i < databox.length; i++) {
            document.write(i + " " + databox[i].Name + " " + databox[i].Age + " " + databox[i].Domain+"<br>");
        }
    }

    function delet(){
        var which = prompt("Enter Serial No. of Data");
        var what= prompt("Enter what you want to delete {name/age/domain}");
        if(what==="name" || what==="Name"){
            delete databox[which].Name;
        }
        else if (what === "age" || what === "Age") {
            delete databox[which].Age;
        } 
        else if (what === "Domain" || what === "domain") {
            delete databox[which].Domain;
        }
        else{
            alert("Inavlid input");
        }
    }