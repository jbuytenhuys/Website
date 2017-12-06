function setCookie(cname, cvalue, exdays) {
    var d = new Date();
    d.setTime(d.getTime() + (exdays * 24 * 60 * 60 * 1000));
    var expires = "expires=" + d.toGMTString();
    //document.cookie = document.getElementById('cookietest')
    document.cookie = cname + "=" + cvalue + ";" + expires + ";path=/";
}

function getCookie(cname) {
    var name = cname + "=";
    var decodedCookie = decodeURIComponent(document.cookie);
    var ca = decodedCookie.split(';');
    for (var i = 0; i < ca.length; i++) {
        var c = ca[i];
        while (c.charAt(0) == ' ') {
            c = c.substring(1);
        }
        if (c.indexOf(name) == 0) {
            return c.substring(name.length, c.length);
        }
    }
    return "";
}
document.getElementById('Loginbtn').addEventListener('click', HideLoginForm)
let LoginForm = document.getElementById("LoginForm")
let LoginHeading = document.getElementById("Login")

function HideLoginForm() {
    LoginForm.style.display = "none";
    LoginHeading.style.display = "none";
    checkCookie();
}

function checkCookie(User) {
    var User = getCookie("Username");
    if (User != "") {
        PerformGreeting(User);
    } else {
        if (User != "" && User != null) {

        var plsbecookie = document.getElementById('cookietest').value;
        alert("Thankyou, " + plsbecookie + ", for logging in");
        setCookie('Username', plsbecookie, 30);
        checkCookie();
      }


    }
}
document.getElementById('Logoutbtn').addEventListener('click', deleteCookie)

function deleteCookie(name) {
    document.cookie = "Username=; expires=Thu, 01 Jan 1970 00:00:00 UTC; path=/;";
    alert("Logout complete");
}

function PerformGreeting(User) {
    let myName = document.getElementById("Username");
    let userName = User;
    myName.innerHTML = userName;
    event.preventDefault();
    return false;
}

