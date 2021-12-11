var header = document.getElementsByClassName('header')[0];
var headerWrapper = document.getElementsByClassName('header-wrapper')[0];
var headerLinks = document.getElementsByClassName('header-links')[0];

function closeHeader() {
    headerWrapper.className = 'header-wrapper';
    headerLinks.className = 'header-links';
}

function hideHeader() {
    headerWrapper.className = 'header-wrapper';
    headerLinks.className = 'header-links';
    header.style.top = "-50px";
}

headerWrapper.addEventListener("click", function() {
    if (headerWrapper.className == 'header-wrapper') {
        headerWrapper.className = 'header-wrapper header-responsive';
        headerLinks.className = 'header-links header-responsive';
    } else {
        closeHeader();
    }
})

var prevScrollpos = window.pageYOffset;
window.onscroll = function() {
    closeHeader();
    var currentScrollPos = window.pageYOffset;
    if (prevScrollpos > currentScrollPos) {
        header.style.top = "0";
    } else {
        header.style.top = "-50px";
    }
    prevScrollpos = currentScrollPos;
}