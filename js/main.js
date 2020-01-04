var isBlink = undefined;

function setBlink() {
    var isOpera = (!!window.opr && !!opr.addons) || !!window.opera || navigator.userAgent.indexOf(' OPR/') >= 0;
    var isChrome = !!window.chrome && (!!window.chrome.webstore || !!window.chrome.runtime);
    var isBlink = (isChrome || isOpera) && !!window.CSS;
}

function setTheme() {
    let themeDark = getCookie('dark');
    let theme = document.getElementById('theme');
    if (themeDark == 0) {
        theme.href = '/css/colors/light.css';
    }
    else if (themeDark == 1) {
        theme.href = '/css/colors/dark.css';
    }
    else {
        setCookie('dark', 0);
        theme.href = '/css/colors/light.css';
    }

    setBlink();
    if (!isBlink) {
        // Use manual SVG Animations
    }
}

function loadDynamicObjects() {

    if (isBlink == undefined) { setBlink(); }

    let themeBtn = document.getElementById('themeToggle');
    if (isBlink) {
        if (getCookie('dark') == 0) {
            themeBtn.className = 'theme-button light';
        }
        else if (getCookie('dark') == 1) {
            themeBtn.className = 'theme-button';
        }
        else {
            setCookie('dark', 0);
            themeBtn.className = 'theme-button light';
        }
    }
    else {
        let path = document.getElementById('themeTogglePath');
        if (getCookie('dark') == 0) {
            path.setAttribute('d', 'M158.162,921.838C60.442,824.117,0,689.117,0,540,0,241.766,241.766,0,540,0,689.117,0,824.117,60.442,921.838,158.162Z');
        }
        else if (getCookie('dark') == 1) {
            path.setAttribute('d', 'M921.838,158.162C1019.56,255.883,1080,390.883,1080,540c0,298.234-241.766,540-540,540-149.117,0-284.117-60.44-381.838-158.162Z');
        }
        else {
            setCookie('dark', 0);
            path.setAttribute('d', 'M158.162,921.838C60.442,824.117,0,689.117,0,540,0,241.766,241.766,0,540,0,689.117,0,824.117,60.442,921.838,158.162Z');
        }
    }

    //Title
    document.title += ' | Legit News Corp.';

    //NavBar
    let navbar = document.getElementById('navLinks');
    navbar.appendChild(navLink('Home', '/'));
    navbar.appendChild(navLink('News', '/news.html'));
    navbar.appendChild(navLink('About', '/about.html', false));
    navbar.appendChild(navLink('Store', '/store.html'));
    navbar.appendChild(navLink('Contact Us', '/contact.html', false));

    //Copyright
    document.getElementById('copyright').innerHTML =
        'Site design / logo &copy; 2019 Legit News Corps; In part with ZGIwMw.<br \>' +
        '22 / 03 / 2019';

    //Options Pannel
    HideOptionsPannel();

}

function HideOptionsPannel() {
    document.getElementById('oPannel').style.marginRight = '-100%';
    document.getElementById('optionToggle').className = 'options-button';
}
function ShowOptionsPannel() {
    document.getElementById('oPannel').style.marginRight = '0';
    document.getElementById('optionToggle').className = 'options-button open';
}
function ToggleOptionsPannel() {
    let pannel = document.getElementById('oPannel');
    
    if (pannel.style.marginRight === '0px') {
        HideOptionsPannel();
    }
    else {
        ShowOptionsPannel();
    }
}

function ToggleTheme() {
    let themeBtn = document.getElementById('themeToggle');
    let path = document.getElementById('themeTogglePath');
    if (getCookie('dark') == 1) {
        setCookie('dark', 0);
        document.getElementById('theme').href = '/css/colors/light.css';
        if (isBlink) {
            themeBtn.className = 'theme-button light';
        }
        else {
            path.setAttribute('d', 'M158.162,921.838C60.442,824.117,0,689.117,0,540,0,241.766,241.766,0,540,0,689.117,0,824.117,60.442,921.838,158.162Z');
        }
    }
    else {
        setCookie('dark', 1);
        document.getElementById('theme').href = '/css/colors/dark.css';
        if (isBlink) {
            themeBtn.className = 'theme-button';
        }
        else {
            path.setAttribute('d', 'M921.838,158.162C1019.56,255.883,1080,390.883,1080,540c0,298.234-241.766,540-540,540-149.117,0-284.117-60.44-381.838-158.162Z');
        }
    }
}

function navLink(name, link, exists = true) {
    let out = document.createElement('a');
    out.innerText = name;
    out.href = link;
    out.className = 'nav-item nav-link';
    if (!exists) {
        out.classList.add('disabled');
    }
    else if (link.indexOf(window.location.pathname) == 0) {
        out.classList.add('active');
        out.innerHTML += ' <span class="sr-only">(current)</span>';
    }
    return out;
}

function replaceByClassOrAdd(element, cName, parent) {
    if (replaceByClass(element, cName, parent)) {
        return true;
    } else {
        parent.appendChild(element);
        return false;
    }
}

function replaceByClass(element, cName, parent) {
    let old = parent.getElementsByClassName(cName);
    if (old.length != 0) {
        old = old[0];
        parent = old.parentNode;    // Make 'parent' parent of 'old' to swap.
        parent.insertBefore(element, old);
        parent.removeChild(old);
        return true;
    } else return false;
}

function removeByClass(className, parent) {
    let objs = parent.getElementsByClassName(className);
    if (objs.length == 0) return undefined;
    for (let i = 0; i < objs.length; i++) {
        if (objs[i].style.opacity == '0') {
            return undefined;
        }
    }

    for (let i = 0; i < objs.length; i++) {
        let e = objs[i];
        e.style.transition = '1.5s';
        e.style.opacity = '0';
        setTimeout(function () {
            e.parentNode.removeChild(e);
        }, 1500);
    }
    return removeByClass(className, parent);
}

function setCookie(cname, cvalue) {
    document.cookie = cname + '=' + cvalue + ';path=/';
}

function getCookie(cname) {
    let name = cname + '='; // Make search return legal cookie.
    let cookies = decodeURIComponent(document.cookie).split(';'); // Split cookies.
    for (let i = 0; i < cookies.length; i++) {
        let c = cookies[i];
        while (c.charAt(0) == ' ') { // Find minimum valid string from start.
            c = c.substring(1);
        }
        if (c.indexOf(name) == 0) {
            return c.substring(name.length, c.length); // Return content.
        }
    }
    return -1; // If cookie not found return empty.
}
