const madalResume = { 
    openMadal: document.querySelector('botton[data-open-resume]'),
    closetMadal: document.querySelector('botton[data-closet-resume]'),
    backgraund: document.querySelector('div[data-backgraund') 
}

madalResume.openMadal.addEventListener('click', modal);
madalResume.closetMadal.addEventListener('click', modal);

function modal() {
    madalResume.backgraund.classList.toggle('is-hidden');
}

