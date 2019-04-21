// add firebase database here

var config = {
    apiKey: "AIzaSyAsHms7JU3AJcd5UcXIl1JDSmK3haYl9Fs",
    authDomain: "train-scheduler-10db5.firebaseapp.com",
    databaseURL: "https://train-scheduler-10db5.firebaseio.com",
    projectId: "train-scheduler-10db5",
    storageBucket: "train-scheduler-10db5.appspot.com",
    messagingSenderId: "510929253047"

};

firebase.initializeApp(config);


//this links to firebase
var trains = firebase.database();




// add storage varibles
var recentTrn = {

     name: name,
     destinations: destinations,
     time: time,
     frequency: frequency

}



$("#trainbutton").on("click", function () {
    var name = $("#name").val().trim();
    var destinations = $("#destinations").val().trim();
    var time = $("#time").val().trim();
    var frequency = $("#frequency").val().trim();



    console.log(name);
        console.log(destinations);
        console.log(time);
        console.log(frequency);
        return false;
}


// trains.ref().push(recentTrn);


//suppose to clear data from user
        // $("#name").val("");
        //$("#destinations").val("");
//        / $("#time").val("");
        // $("#frequency").val("");


// return false;
// })



// function SubmitTrains(name, destinations, trainTime, frequency){
//    consolelog(name);
//     trains.ref('/trains').set({

// train: name,
// userDest: destinations,
// time: trainTime,
// recurrent: frequency,

//     })
// }

// SubmitTrains("shelia", "test@gmail.com", "firebase");
)
