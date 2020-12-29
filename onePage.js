function hoverEnter(index)
{
    var indicator = document.getElementById("smooth-index");
    indicator.style.top = 100 * index + 'px';
    let allScreens = document.querySelectorAll('.screen');
    allScreens.forEach(screen => {
        screen.classList.remove('visible');
    });
    let nowActive = document.getElementById('screen_' + index);
    nowActive.classList.add('visible');
}