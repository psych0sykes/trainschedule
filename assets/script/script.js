console.log("JS READY");



var firebaseConfig = {
    apiKey: "AIzaSyDssKYJ1IjNpHx_3rwmwTQYfVpmpjBOVFc",
    authDomain: "myfirstfirebase-1d6d0.firebaseapp.com",
    databaseURL: "https://myfirstfirebase-1d6d0.firebaseio.com",
    projectId: "myfirstfirebase-1d6d0",
    storageBucket: "myfirstfirebase-1d6d0.appspot.com",
    messagingSenderId: "543121832805",
    appId: "1:543121832805:web:861f867217c62f23b23f8c"
    };

firebase.initializeApp(firebaseConfig);

database = firebase.database()

var trainID = 0;
var trains = [];
var name = "name";
var destination = "destination";
var nextTrain = "next train";
var frequency = "frequency";

database.ref().on("value", function(snapshot) {

if (snapshot.child("trains").exists()) {
    trains=snapshot.child("trains")
}
else {
    trainID = 0
}

console.log(trainID)

})

// append train divs


// create and push train to array

function addTrain () {
    var newTrain = {
        "ID":trainID,
        "name":name,
        "destination":destination,
        "nextTrain":nextTrain,
        "frequency":frequency,
    }

    trains.push(newTrain)
    
    console.log(trains)
}

addTrain()

// append trains to table

function appendTrains() {

    console.log("TRAINS")

for (i = 0 ; i > trains.length ; i++) {

    console.log("APPEND")

    var row = $("<tr>");
    var tName = $("<td>");
    var tDestination = $("<td>");
    var tNextTrain = $("<td>");
    var frequency = $("<td>")

    $(tName).text(trains[i].name);
    $(tDestination).text(trains[i].destination);
    $(tNextTrain).text(trains[i].nextTrain);
    $(frequency).text(trains[i].frequency);

// append td to tr
    function tdtr(a) {
        $(row).append(a)
    }

    tdtr(tName);
    tdtr(tDestination);
    tdtr(tNextTrain);
    tdtr(frequency);

    $("#tableTrains").append(row)

}   
}

appendTrains()