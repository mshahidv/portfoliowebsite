





function validation() {
  var username = document.getelementById("username").value;
  var email = document.getelementById("email").value;
  var message = document.getelementById("message").value;

  var usercheck = /^[a-zA-Z0-9]*$/;
  var emailcheck = /^([a-zA-Z0-9._%-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,6})*$/;
  var messagecheck = /[A-Za-z0-9\.,;:!?()"'%\-]+/;

  if (usercheck.test(username)) {
    document.getElementById("usererror").innerHTML = "";
  } else {
    document.getElementById("usererror").innerHTML = "Name is invalid";
    return false;
  }

  if (emailcheck.test(email)) {
    document.getElementById("emailerror").innerHTML = "";
  } else {
    document.getElementById("emailerror").innerHTML = "Email is invalid";
    return false;
  }

  if (messagecheck.test(message)) {
    document.getElementById("messageerror").innerHTML = "";
  } else {
    document.getElementById("messageerror").innerHTML = "Message is invalid";
    return false;
  }
}
