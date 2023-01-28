const triggers = document.querySelectorAll('.dropdown-trigger');
console.log(triggers);
triggers.forEach(trigger => {
    trigger.addEventListener('mouseover', unHide);
    trigger.addEventListener('mouseleave', hide);
});

function unHide(e) {
    if (!(e.target.querySelector('.dropdown-content').classList.contains('visible'))) {
        e.target.querySelector('.dropdown-content').classList.add('visible');
    } else {
        return;
    }
    console.log(e.target.querySelector('.dropdown-content'));
};

function hide(e) {
    e.target.querySelector('.dropdown-content').classList.remove('visible');
};