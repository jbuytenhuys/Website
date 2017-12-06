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

function checkCookie(User) {
    var User = getCookie("Username");
    if (User != "") {
        PerformGreeting(User);
    } else {
        //User = document.write('No way kimosabi');
        // if (User != "" && User != null) {

        var plsbecookie = document.getElementById('cookietest').value;
        alert("cookie has been set");
        //document.write("cookie has been set");
        setCookie('Username', plsbecookie, 30);
        checkCookie();
        //  }


    }
}

function deleteCookie(name) {
    document.cookie = "Username=; expires=Thu, 01 Jan 1970 00:00:00 UTC; path=/;";
    alert("cookie has been deleted");
}

function PerformGreeting(User) {
    let myName = document.getElementById("Username");
    let userName = User;
    myName.innerHTML = userName;
    event.preventDefault();
    return false;
}

