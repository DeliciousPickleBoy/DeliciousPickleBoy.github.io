function loadStore() {

    // Store Items
    let store = document.getElementById('products');
    replaceByClassOrAdd(product('Gravel (Singular)', '$59.99 USD',
        "Yup. That's gravel alright! You can throw it at people and uhhh..." +
        "yeah, that's about it. It's gravel, what can I say?",
        '/store/img/gravel.jpg', 'gravel'), 'placeholder', store);

    // Remove Placeholders
    removeByClass('placeholder', store);
}

function product(name, price, description, img, link) {
    let out = document.createElement('a');
    out.href = '/store/item.html?q=' + link;

    let image = document.createElement('div');
    image.className = 'featured-image';
    image.style.backgroundImage = 'url(' + img + ')';
    out.appendChild(image);

    let body = document.createElement('div');
    body.className = 'featured-body';

        let item = document.createElement('div');
        item.className = 'price';
        item.innerHTML = '<h>' + name + '</h><br /><p>' + price + '</p>';
        body.appendChild(item);

        let about = document.createElement('div');
        about.innerHTML = 'Description:<br /><div>' + description + '</div>';
        body.appendChild(about);

    out.appendChild(body);

    return out;
}
