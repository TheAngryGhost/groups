var g1= ["Caden A","Aven A","Christian A","Riley A","Ivan A","Leo B","Taeli B","Anthony B","Joshua B","Bella B",];
var g2= ["Lucian B","Ethan B","Eamonn B","Bo B","Henry B","Huy B","Carsten C","Kevin C","Aaron C","Jonathan C",];
var g3= ["Paxton C","Miles C","Aidan C","Sam C","Anthony C","Elise D","Drew D","Cardel D","Zander D","Ian D",];
var g4= ["Alex F","Nate F","Zachary F","Dylan F","Kendall G","Memphis G","Callan G","Evan H","Ben H","Brady H",];
var g5= ["Soren H","Nolan H","Jackson H","Cole J","Bella J","Henrik K","Connor K","Alex K","Sam K","Thatcher L",];
var g6= ["Dylan L","Phu L","Michael L","Matthew L","William L","Tyson L","Jada L","Irving L","Malachi M","Derek M",];
var g7= ["Dylan M","Alec M","Nafisha Nawal M","Samarpan M","Allie M","Brendan M","Jaron M","Matthew N","Phu N","Will N",];
var g8= ["Blake N","Femi O","Gracious O","Minji O","Yusup O","Breck O","Wilson O","Jayce P","Leo P",];
var g9= ["Brecken P","Claire P","Luis P","Vinh P","Will P","John R","Henry R","Toe R","Alec R",];
var g10= ["Nate R","Evan R","Grant R","Omar S","Sierra S","Jeff S","Sam S","Callie S","Noah S",];
var g11= ["Caden S","Jodi-Ane S","Thomas S","Evan T","Makayla T","Teagan T","Brayden T","Ben T","Casper T",];
var g12= ["Edwin V","Dominic V","Jada V","Aiden W","Holdan W","Caleb W","Creighon W","Brennan W","Luke W",];
									


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
