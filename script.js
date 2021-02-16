function signup(event) {
    event.preventDefault();
    
    validate();
}

function validate() {
      var username = document.getElementById("username").value;
      var email = document.getElementById("email").value;
      var password = document.getElementById("password").value;
      var confirmPassword = document.getElementById("confpass").value;

      if(username==" " && username==null){
        document.getElementById("username").innerHTML="User name should only contain alphabets without space";
        alert("User name should only contain alphabets without space");
        
      }
}