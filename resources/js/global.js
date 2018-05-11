function setCookie(cname,cvalue) {
    var d = new Date();
    d.setTime(d.getTime() + (60*60*1000));
    var expires = "expires=" + d.toGMTString();
    document.cookie = cname + "=" + cvalue + ";" + expires + ";path=/";
    location.reload();
}

function addCookieFor(cname, cvalue) {
    var value = getCookie(cname);
    if(value == null || value == "")
        value = cvalue;
    else
        value = value + "," + cvalue;
    setCookie(cname, value);
}

function getCookie(cname){
    var name = cname + "=";
    var decodedCookie = decodeURIComponent(document.cookie);
    var ca = decodedCookie.split(';');
    for(var i = 0; i <ca.length; i++) {
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

function setCookieDubbing(cname) {
    var d = new Date();
    d.setTime(d.getTime() + (60*60*1000));
    var expires = "expires=" + d.toGMTString();
    var checkBox = document.getElementById("dubbing");
    if(checkBox.checked)
        cvalue = 1;
    else
        cvalue = 0;
    document.cookie = cname + "=" + cvalue + ";" + expires + ";path=/";
    location.reload();
}