const titreSpans = document.querySelectorAll('h1 span');
const btns = document.querySelectorAll('.btn-first');
const logo = document.querySelector('.logo');
const medias = document.querySelectorAll('.bulle');
const l1 = document.querySelector('.l1');
const l2 = document.querySelector('.l2');
const Img = document.querySelector(".logoBackground");

function sleep(ms) {
    return new Promise(resolve => setTimeout(resolve, ms));
}

window.addEventListener('load', () => {

    const TL = gsap.timeline({paused: true});

    TL
    .staggerFrom(titreSpans, 1, {top: -50, opacity: 0, ease: "power2.out"}, 0.3)
    .staggerFrom(btns, 1, {opacity: 0, ease: "power2.out"}, 0.3, '-=1')
    .from(l1, 1, {width: 0, ease: "power2.out"}, '-=2')
    .from(l2, 1, {width: 0, ease: "power2.out"}, '-=2')
    .from(logo, 0.4, {transform: "scale(0)", ease: "power2.out"}, '-=2')
    .staggerFrom(medias, 1, {right: -200, ease: "power2.out"}, 0.3, '-=1');

    TL.play();
})

async function TurnImg() {
    for (let i = 0; i < 360; i++) {
        var t = Img.style.transform.match(/(\d+)/g) || [0];  // on met ||[0) pour le 1st passage
        var val = ( t[0] *1 + 1) % 360;                      // incrémentation de 1
        Img.style.transform = 'rotate(' + val +'deg)';
        console.log(Img.style.transform);
        await sleep(8);
    }
}

async function Deload() {

    topSet = 0;
    opacitySet = 1;
    while (opacitySet > 0.0) {
        topSet -= 1;
        opacitySet -= 0.1;
        await sleep(20);
        logo.style.opacity = opacitySet;
        logo.style.top = topSet + "px";
    }
    topSet = 0;
    opacitySet = 1;

    while (opacitySet > 0.0) {
        topSet -= 1;
        opacitySet -= 0.1;
        await sleep(20);
        l1.style.opacity = opacitySet;
        l1.style.top = topSet + "px";
    }
    topSet = 0;
    opacitySet = 1;

    while (opacitySet > 0.0) {
        topSet -= 1;
        opacitySet -= 0.1;
        await sleep(20);
        l2.style.opacity = opacitySet;
        l2.style.top = topSet + "px";
    }
    opacitySet = 1;
    topSet = 0;

    for (i = 0; i < titreSpans.length; i++) {
        while (opacitySet > 0.0) {
            topSet -= 1;
            opacitySet -= 0.1;
            await sleep(20);
            titreSpans[i].style.opacity = opacitySet;
            titreSpans[i].style.top = topSet + "px";
        }
        opacitySet = 1;
        topSet = 0;
    }
    opacitySet = 1;
    topSet = 0;

    for (i = 0; i < btns.length; i++) {
        btns[i].style.opacity = 0;
        while (opacitySet > 0.0) {
            opacitySet -= 0.1;
            await sleep(20);
            btns[i].style.opacity = opacitySet;
        }
        opacitySet = 1;
    }
    opacitySet = 1;
    topSet = 0;
    rightSet = 0

    for (i = 0; i < medias.length; i++) {
        medias[i].style.opacity = 0;
        while (opacitySet > 0.0) {
            rightSet -= 1;
            opacitySet -= 0.1;
            await sleep(20);
            medias[i].style.opacity = opacitySet;
            medias[i].style.right = rightSet + "px";
        }
        opacitySet = 1;
        rightSet = 0;
    }
}