//This functiom sets the cookie
function setCookie(cname, cvalue, exdays) {
    //sets variable Date to hold the Date value
    let Date = new Date();
    //
    Date.setTime(Date.getTime() + (exdays * 24 * 60 * 60 * 1000));
    let expires = "expires=" + Date.toGMTString();
    document.cookie = cname + "=" + cvalue + ";" + expires + ";path=/";
}

function getCookie(cname) {
    let name = cname + "=";
    let decodedCookie = decodeURIComponent(document.cookie);
    let ca = decodedCookie.split(';');
    for (let i = 0; i < ca.length; i++) {
        let c = ca[i];
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
let NavLogin = document.getElementById("NavLogin")

function HideLoginForm() {
    LoginForm.style.display = "none";
    LoginHeading.style.display = "none";
    NavLogin.style.display = "none";
    checkCookie();
}

function checkCookie(User) {
    var User = getCookie("Username");
    if (User != "") {
        PerformGreeting(User);
    } else {
        //if (User != "" && User != null) {

        let CookieName = document.getElementById('Username').value;
        alert("Thankyou, " + CookieName + ", for logging in");
        setCookie('Username', CookieName, 30);
        checkCookie();
        window.scrollTo(0,0);


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

