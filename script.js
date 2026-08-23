var g1= ["Thomas S", "Toe R", "Aven A", "Jackson H", "Brendan M", "Paxton C", "Ian D", "Minji O", "Vinh P", "Claire P", ];								
var g2= ["Bella J", "Will N", "Jayce P", "Callie S", "Sam K", "Edwin V", "Sam C", "Wilson O", "Dylan F", "Anthony C", ];								
var g3= ["Jada V", "Brecken P", "Casper T", "Joshua B", "Soren H", "Memphis G", "Caden A", "Makayla T", "Kendall G", "Luis P", ];							
var g4= ["Drew D", "Dylan M", "Jeff S", "Teagan T", "Allie M", "Ivan A", "Matthew L", "Sierra S", "Brady H", "Bella B", ];								
var g5= ["Samarpan M", "Henry B", "Phu N", "Callan G", "Alex F", "Bo B", "Nate R", "Evan H", "Ben H", "Matthew N", ];								
var g6= ["Jaron M", "Henry R", "Evan R", "Aidan C", "Jonathan C", "Gracious O", "Leo P", "Caden S", "Alex K", "Carsten C", ];							
var g7= ["Irving L", "Miles C", "Creighon W", "Phu Le L", "Brennan W", "Ethan B", "Aaron C", "Christian A", "Lucian B", "Dominic V", ];						
var g8= ["Anthony B", "Malachi M", "Holdan W", "Connor K", "Grant R", "Sam S", "Noah S", "Luke W", "Thatcher L", ];								
var g9= ["Cardel D", "William L", "Omar S", "Nafisha Nawal M", "Femi O", "Blake N", "Nate F", "Evan T", "Kevin C", ];									
var g10= ["Brayden T", "Alec M", "Tyson L", "Breck O", "Eamonn B", "Leo B", "John R", "Elise D", "Jodi-Ane S", ];									
var g11= ["Aiden W", "Will P", "Riley A", "Zachary F", "Huy B", "Nolan H", "Alec R", "Ben T", "Henrik K", ];										


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