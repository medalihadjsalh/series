function validate(){
  var username = document.getElementById("username").value;
  var password = document.getElementById("password").value;
   if(username == "med17nacef" && password == "azerty13"){
    alert("Login successfully to watch TN"); 
     window.location = "../html/home.html";
   }
     else {
      alert("You have enetered wrong inputs")
     }
     return false;
  }              
          
        