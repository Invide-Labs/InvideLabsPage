
/**Stopping analytics tracking if analytics=off or traffic is not from production server**/
var useAnalytics = true;

try {
    //Turn off analytics if 'analytics=off' is included as a request parameter.
    var parameters = window.location.search.split('&');
    if (parameters[0]) {
        parameters[0] = parameters[0].replace('?', '');
    }
    for (var i = 0; i < parameters.length; i++) {
        var values = parameters[i].split('=');
        if (values[0] == 'analytics' && values[1] == 'off') {
            useAnalytics = false;
        }
    }
} catch (e) {
    //Just in case something goes wrong...
    useAnalytics = true;
}

if (!useAnalytics) {
    setCookie('InternalTraffic', 'true', 365);
    alert('Cookie:  InternalTraffic\nValue:     TRUE\nDomain:  ' + window.location.hostname);
}

function setCookie(cname, cvalue, exdays) {
    var d = new Date();
    d.setTime(d.getTime() + (exdays * 24 * 60 * 60 * 1000));
    var expires = 'expires=' + d.toUTCString();
    document.cookie = cname + '=' + cvalue + ';' + expires + ';path=/';
}