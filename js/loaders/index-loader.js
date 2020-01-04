function loadIndex() {

    // Store Items
    let featured = document.getElementById('featured');
    replaceByClass(simpleArticle('Cursed Baby found near Chipotle',
        '/news/baby.jpg', 'chipotle%20baby'), 'placeholder', featured);

    replaceByClass(simpleArticle('Cursed Baby found near Chipotle',
        '/news/baby.jpg', 'chipotle%20baby'), 'placeholder', featured);

}

let saId = 0;
function simpleArticle(title, img, link) {
    let out = document.createElement('a');
    out.href = '/news/story.html?q=' + link;
    out.className = 'article';

    let bg = document.createElement('div');
    bg.style.background = 'url(' + img + ')';
    bg.className = 'bg';
    out.appendChild(bg);

    let bgImg = new Image();
    bgImg.src = img;
    bgImg.onload = function () {
        if (this.height == this.width) {
            if (parent.height < parent.width)
                bg.className += ' height-based';
            else
                bg.className += ' width-based';
        }
        else if (this.height < this.width)
            bg.className += ' height-based';
        else
            bg.className += ' width-based';
    }

    let text = document.createElement('div');
    text.innerText = title;
    out.appendChild(text);

    out.id = 'sA' + saId;
    saId++;
    return out;
}
