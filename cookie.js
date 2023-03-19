document.addEventListener('DOMContentLoaded', () => {
  console.log("cookies.js loaded"); // make sure the file is being loaded

  function getCookie(name) {
    var cookieArr = document.cookie.split(";");

    for (var i = 0; i < cookieArr.length; i++) {
      var cookiePair = cookieArr[i].split("=");
      if (name == cookiePair[0].trim()) {
        return decodeURIComponent(cookiePair[1]);
      }
    }

    // cookie not found
    return "";
  }

  // check if cookie exists
  function checkCookie() {
    var usercookie = getCookie("usercookie");
    if (usercookie != "") {
      // cookie exists
      console.log("cookie found"); // make sure the if statement is evaluating correctly
      document.getElementById("create-btn").style.display = "none";
      document.getElementById("login-btn").style.display = "none";
      document.getElementById("logout-btn").style.display = "block";
      document.getElementById("storage-btn").style.display = "block";
    } else {
      // cookie doesn't exist
      console.log("cookie not found"); // make sure the else statement is executing correctly
      document.getElementById("create-btn").style.display = "block";
      document.getElementById("login-btn").style.display = "block";
      document.getElementById("logout-btn").style.display = "none";
      document.getElementById("storage-btn").style.display = "none";
    }
  }

  checkCookie();
});