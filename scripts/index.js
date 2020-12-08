var elements = document.getElementsByClassName('btn');
var olo = document.getElementsByClassName('message');
elements.onclic = function () {
    olo.classList.add('bolt')
}