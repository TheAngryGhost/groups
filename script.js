var g1= ["Group 1","Phu L","Aiden W","Kendall G","Jayce P","William L","Ben H","Teagan T","Ben T","Carsten C","Caden A",];
var g2= ["Group 2","Nafisha Nawal M","John R","Will N","Zander D","Connor K","Joshua B","Thomas S","Evan R","Brayden T","Riley A",];
var g3= ["Group 3","Soren H","Jackson H","Nate R","Edwin V","Breck O","Cole J","Henrik K","Lucian B","Christian A","Jaron M",];
var g4= ["Group 4","Kevin C","Makayla T","Toe R","Henry B","Blake N","Noah S","Bella J","Will P","Callie S","Jada V",];
var g5= ["Group 5","Sam K","Drew D","Ethan B","Dylan F","Grant R","Yusup O","Tyson L","Jonathan C","Holdan W","Omar S",];
var g6= ["Group 6","Minji O","Phu N","Sierra S","Wilson O","Eamonn B","Dominic V","Ivan A","Gracious O","Cardel D","Creighon W",];
var g7= ["Group 7","Vinh P","Nolan H","Brendan M","Aven A","Callan G","Jodi-Ane S","Bella B","Casper T","Aidan C","Matthew N",];
var g8= ["Group 8","Ian D","Irving L","Michael L","Femi O","Derek M","Jeff S","Dylan L","Jada L","Allie M",];
var g9= ["Group 9","Sam C","Taeli B","Elise D","Aaron C","Nate F","Alec R","Huy B","Henry R","Caleb W",];
var g10= ["Group 10","Zachary F","Leo B","Bo B","Alex K","Thatcher L","Alec M","Dylan M","Malachi M","Leo P",];
var g11= ["Group 11","Claire P","Brady H","Luke W","Anthony B","Evan H","Samarpan M","Miles C","Memphis G","Anthony C",];
var g12= ["Group 12","Caden S","Paxton C","Sam S","Evan T","Luis P","Matthew L","Brecken P","Alex F","Brennan W",];


									


function show_group(){
    let input = document.getElementById("my_name").value;
    let myName = input.toLowerCase().trim();


    if (myName == "") {
        document.getElementById("my_group").innerHTML =
        "Please type your first name and last initial.";
        return;
    }
    if (g1.some(name => name.toLowerCase() == myName)) {
        document.getElementById("my_group").innerHTML =
        "Your group:<br>" + g1.join("<br>");
    }
    else if (g2.some(name => name.toLowerCase() == myName)) {
        document.getElementById("my_group").innerHTML =
        "Your group:<br>" + g2.join("<br>");
    }
    else if (g3.some(name => name.toLowerCase() == myName)) {
        document.getElementById("my_group").innerHTML =
        "Your group:<br>" + g3.join("<br>");
    }
    else if (g4.some(name => name.toLowerCase() == myName)) {
        document.getElementById("my_group").innerHTML =
        "Your group:<br>" + g2.join("<br>");
    }
    else if (g5.some(name => name.toLowerCase() == myName)) {
        document.getElementById("my_group").innerHTML =
        "Your group:<br>" + g3.join("<br>");
    }
    else if (g6.some(name => name.toLowerCase() == myName)) {
        document.getElementById("my_group").innerHTML =
        "Your group:<br>" + g2.join("<br>");
    }
    else if (g7.some(name => name.toLowerCase() == myName)) {
        document.getElementById("my_group").innerHTML =
        "Your group:<br>" + g3.join("<br>");
    }
    else if (g8.some(name => name.toLowerCase() == myName)) {
        document.getElementById("my_group").innerHTML =
        "Your group:<br>" + g2.join("<br>");
    }
    else if (g9.some(name => name.toLowerCase() == myName)) {
        document.getElementById("my_group").innerHTML =
        "Your group:<br>" + g3.join("<br>");
    }
    else if (g10.some(name => name.toLowerCase() == myName)) {
        document.getElementById("my_group").innerHTML =
        "Your group:<br>" + g2.join("<br>");
    }
    else if (g11.some(name => name.toLowerCase() == myName)) {
        document.getElementById("my_group").innerHTML =
        "Your group:<br>" + g3.join("<br>");
    }
    else {
        document.getElementById("my_group").innerHTML =
        "Name not found; make sure you type your first name and last initial.";
    }
}
