function loadDynamicObjects() {

    //Title
    document.title += ' | Legit News Corp.';

    //NavBar
    let navbar = document.getElementById('navLinks');
    navbar.appendChild(navLink('Home', '/index.html'));
    navbar.appendChild(navLink('News', '/news.html'));
    navbar.appendChild(navLink('About', '/about.html', false));
    navbar.appendChild(navLink('Store', '/store.html'));
    navbar.appendChild(navLink('Contact Us', '/contact.html', false));

    //Copyright
    document.getElementById('copyright').innerHTML =
        'Site design / logo &copy; 2019 Legit News Corps; In part with ZGIwMw.<br \>' +
        '22 / 03 / 2019';

    window.onresize = dynamicPositioning();

}

function dynamicPositioning() {

    //Copyright
    let text = document.getElementById('copyright');
    let nav = text.parentElement.children.item(0);
    text.style.width = nav.style.width;

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