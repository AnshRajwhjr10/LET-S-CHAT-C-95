var firebaseConfig = {
      apiKey: "AIzaSyA5fQyHUekh4EG62SAtQwTBZ30oIbNIsRA",
      authDomain: "kwitter-799b0.firebaseapp.com",
      databaseURL: "https://kwitter-799b0-default-rtdb.firebaseio.com",
      projectId: "kwitter-799b0",
      storageBucket: "kwitter-799b0.appspot.com",
      messagingSenderId: "971076032245",
      appId: "1:971076032245:web:5bbab96aba06e1a63e57bc"
    };
  
    // Initialize Firebase
    firebase.initializeApp(firebaseConfig);
//ADD YOUR FIREBASE LINKS HERE
user_name = localStorage.getItem("user_name");

document.getElementById("user_name").innerHTML = "Welcome " + user_name + " ! ";

function addRoom()
{
      room_name = document.getElementById("room_name").value;

    firebase.database().ref("/").child(room_name).update({
        purpose : "adding room name"
});

      localStorage.setItem("room_name", room_name);

      window.location = "kwitter_page.html";
}

function getData() {firebase.database().ref("/").on('value', function(snapshot) {document.getElementById("output").innerHTML = "";snapshot.forEach(function(childSnapshot) {childKey  = childSnapshot.key;
       Room_names = childKey;
      //Start code
      console.log("Room Name - " + Room_names);
      row = "<div class='room_name' id="+Room_names+" onclick='redirectToRoomName(this.id)' >#"+ Room_names +"</div><hr>";
      document.getElementById("output").innerHTML += row;
      //End code
      });});}
getData();

function redirectToRoomName(name)
{
      console.log(name);
      localStorage.setItem("room_name", name);
            window.location ="kwitter_page.html";
}