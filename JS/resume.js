let bottonResume = document.querySelector('botton[data-open-resume]');
bottonResume.addEventListener('click', modal);
let bottonCloset = document.querySelector('botton[data-closet-resume]');
bottonCloset.addEventListener('click', modal);
let backgraund = document.querySelector('div[data-backgraund');
function modal() {
    backgraund.classList.toggle('is-hidden');
}