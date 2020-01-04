function loadArticles() {

    // Store Items
    let articles = document.getElementById('articles');
    replaceByClassOrAdd(article('Cursed Baby found near Chipotle',
        "The baby was sighted disemboweling a goat to qote an eye wittness, " +
        "\"...gain it's magic powers... [and] ...become the enlightened one.\" " +
        "it is feared that the baby may be a Scientologist.",
        '/news/baby.jpg', 'chipotle%20baby'), 'placeholder', articles);

    // Remove Placeholders
    removeByClass('placeholder', articles);
}

function article(name, description, img, link) {
    let out = document.createElement('a');
    out.href = '/store/story.html?q=' + link;

    let image = document.createElement('div');
    image.className = 'featured-image';
    image.style.backgroundImage = 'url(' + img + ')';
    out.appendChild(image);

    let body = document.createElement('div');
    body.className = 'featured-body';

        let about = document.createElement('div');
        about.innerHTML = '<h>' + name + '</h><br /><div>' + description + '</div>';
        body.appendChild(about);

    out.appendChild(body);

    return out;
}
