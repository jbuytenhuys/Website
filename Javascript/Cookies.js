//This functiom sets the cookie
function setCookie(cname, cvalue, exdays) {
    //sets variable Date to hold the Date value
    let Date = new Date();
    Date.setTime(Date.getTime() + (exdays * 24 * 60 * 60 * 1000));
    let expires = "expires=" + Date.toGMTString();
    document.cookie = cname + "=" + cvalue + ";" + expires + ";path=/";
}
// function to get the cookie
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

//event listener that calls the HideLoginForm function when the login button is clicked
document.getElementById('Loginbtn').addEventListener('click', HideLoginForm)
//variable for login form that is assigned the Id loginform
let LoginForm = document.getElementById("LoginForm")
//variable for LoginHeading that is assigned the Id Login
let LoginHeading = document.getElementById("Login")
//variable for NavLogin that is assigned the Id NavLogin
let NavLogin = document.getElementById("NavLogin")

//function that hides the login form
function HideLoginForm() {
    LoginForm.style.display = "none";
    LoginHeading.style.display = "none";
    NavLogin.style.display = "none";
    checkCookie();
}

//function to check the cookie
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
        //once logging in the page will scroll back to the top to display a welcome message
        window.scrollTo(0,0);
        
    }
}
//event listener that calls the function deleteCookie once the logout button is clicked
document.getElementById('Logoutbtn').addEventListener('click', deleteCookie)

//function to delete the cookie
function deleteCookie(name) {
    document.cookie = "Username=; expires=Thu, 01 Jan 1970 00:00:00 UTC; path=/;";
    alert("Logout complete");
}

//function to perform the greeting once the user has logged in using inner html
function PerformGreeting(User) {
    let myName = document.getElementById("Username");
    let userName = User;
    myName.innerHTML = userName;
    event.preventDefault();
    return false;
}

