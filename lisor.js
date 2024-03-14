const Lisor = {
    lisorCounter: 0,
    lisorGif: "/lisor/lisor.gif",
    isRunning: false,

    startLisor: () => {
        addEventListener('keyup', (e) => {
            if (Lisor.isRunning) {
                return;
            }

            if ((e.key === 'l' || e.key === 'L') && Lisor.lisorCounter === 0) {
                Lisor.lisorCounter++;
            } else if ((e.key === 'i' || e.key === 'I') && Lisor.lisorCounter === 1) {
                Lisor.lisorCounter++;
            } else if ((e.key === 's' || e.key === 'S') && Lisor.lisorCounter === 2) {
                Lisor.lisorCounter++;
            } else if ((e.key === 'o' || e.key === 'O') && Lisor.lisorCounter === 3) {
                Lisor.lisorCounter++;
            } else if (e.key === 'r' || e.key === 'R') {
                Lisor.lisorCounter++;
            } else {
                Lisor.lisorCounter = 0;
            }

            if (Lisor.lisorCounter === 5) {
                Lisor.lisorCounter = 0;
                Lisor.showLisor();
            }
        });
    },

    showLisor: () => {
        Lisor.isRunning = true;
        let lisor = document.createElement('img');
        lisor.src = Lisor.lisorGif;
        lisor.style.position = 'fixed';
        lisor.style.bottom = '0';
        lisor.style.left = '-20dvw';
        lisor.style.zIndex = '1000';
        lisor.style.maxWidth = '20dvw';
        lisor.style.maxHeight = '15dvh';
        lisor.style.transition = `left ${window.innerWidth / 150}s`;
        lisor.style.transitionTimingFunction = 'linear';
        document.body.appendChild(lisor);
        setTimeout(() => {
            lisor.style.left = '100%';
            setTimeout(() => {
                lisor.remove();
            }, (window.innerWidth / 150) * 1000);
        }, 100);
    }
}

export default Lisor;