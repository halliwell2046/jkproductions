const play = document.getElementsByClassName('fa-play-circle');
// console.log(play);

play.addEventListener ('mouseenter', () => {
    play.style.transform = 'scale(1.2)';
    play.style.transition = 'transform 1s';
    play.style.opacity = '0.5';
});
play.addEventListener('mouseleave', () => {
    play.style.transform = 'scale(1)';
    play.style.transition = 'transform 1s';
    play.style.opacity = '0';
});