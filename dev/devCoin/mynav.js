function myNav() {
  var x = document.getElementById("mynav");
  if (x.style.display === "block") {
    x.style.display = "none";
  } else {
    x.style.display = "block";
  }
}
function wallet() {
  var x = document.getElementById("wlt");
  if (x.style.display === "block") {
    x.style.display = "none";
  } else {
    x.style.display = "block";
  }
}
function mining() {
  var x = document.getElementById("mn");
  if (x.style.display === "block") {
    x.style.display = "none";
  } else {
    x.style.display = "block";
  }
}
function contact() {
 
  var x = document.getElementById("ct");
var call = document.getElementById('call');
var sms = document.getElementById('sms');
var wasap = document.getElementById('wasap');
var email = document.getElementById('email');
  if (x.style.display === "block") {
    x.style.display = "none";
  } else {
    x.style.display = "block";
   
call.setAttribute("href","tel:+2349066947271");
sms.setAttribute("href","sms:+2349066947271?body=Hi%20Dev");
wasap.setAttribute("href","https://wa.me/2349066947271?text=Hello%20Dev");
email.setAttribute("href","mailto:khalifa3700@gmail.com");

  }
}
function about() {
  var x = document.getElementById("cc");
  if (x.style.display === "block") {
    x.style.display = "none";
  } else {
    x.style.display = "block";
  }
}
