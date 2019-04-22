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

var url = "https://train-scheduler-10db5.firebaseio.com/"
var dataRef = new Firebase(url);


// add storage varibles
// var recentTrn = {

//         name: name,
//         destinations: destinations,
//         time: time,
//         frequency: frequency

// }

setInterval(function (startTime) {
        $("#timer").html(moment().format('hh:mm a'))
}, 1000);


$("#submitTrain").on("click", function () {
        var name = $("#addName").val().trim();
        var destinations = $("#addDestinations").val().trim();
        var time = moment($("#addTime").val().trim(), "HH:mm").subtract(10, "years").format("X");

        var frequency = $("#addFrequency").val().trim();

        // add storage varibles
        var submitTrain = {

                name: name,
                destinations: destinations,
                time: time,
                frequency: frequency
    
                
                // console.log(name);
                // console.log(destinations);
                // console.log(time);
                // console.log(frequency);



                //return false;


        };

})


trains.ref().push(recentTrn);






//suppose to clear data from user
$("#name").val("");
$("#destinations").val("");
$("#time").val("");
$("#frequency").val("");


//return false;





// this is the snapshot the pushes the value of the object
//val will return the value of the database
trains.ref()
        .on("child_added", function (snapshot) {
                var name = snapshot.val().name;
                var destinations = snapshot.val().destinations;
                var time = snapshot.val().time;
                var frequency = snapshot.val().frequency;


                //  moment().unix();
                //moment().diff(Moment|String|Number|Date|Array, String);
                var remainder = moment().diff(moment.unix(firstTrain), "minutes") % frequency;

                var minutes = frequency - remainder;


                //moment().format("dddd, MMMM Do YYYY, h:mm:ss a"); // "Sunday, February 14th 2010, 3:25:50 pm"
                // A = AM PM
                //hh= hour, mm= minute
                var arrival = moment().add(minutes, "m").format("hh:mm A");


                console.log(remainder);
                console.log(minutes);
                console.log(arrival);





                $("#new-train > tBody").append("<tr><td>" + name + "</td><td>" + destination + "</td><td>" + frequency + "</td><td>" + arrival + "</td><td>" + minutes + "</td><td>");

        })


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
