/* actionContainer:na är hållar-elemenet som ska interageras med och manipuleras på sidan. */

const actionContainer = document.querySelector('#action-container-primary');

const secActionContainer = document.querySelector(
  '#action-container-secondary'
);
/* Fält med mindre text */

const actionParagraph = actionContainer.querySelector('p');
actionParagraph.classList.add('positionAbsolute');

/* Fält med större text */

const actionHeading = document.createElement('h2');

const uselessMainHeading = document.querySelector('h1');

/* Min logotyp som är med en liten stund */

const wolfsHead = document.querySelector('#wolfsHead');

const wolfsEyes = wolfsHead.querySelector('#wolfsEyes');

/* Objekt med sökvägar till bilder och ljud */

const uselessResources = {
  images: {
    prettyWolf: './images/Crimson-Tribal-Wolf.svg',
    clawRend:
      './images/vecteezy_claws-scratching-illustration-vector-design_10990397.svg',
  },
  soundEffects: {
    howl: ['./sound_effects/wolf-howl-6310.mp3', 'audio/mpeg'],
    strike: ['./sound_effects/wolf-howl-6310.mp3', 'audio/mpeg'],
  },
};

/* uselessCounter används för iterationen för det som kommer att ske på sidan under "PART I". */

let uselessCounter = 0;

/* Inte snyggt, men här kommer en jättestor if-sats */

actionContainer.addEventListener('click', () => {
  /* |--- --- PART I: click events --- ---> */

  if (uselessCounter === 0) {
    actionParagraph.textContent = 'Well?';
    /* --- --- --- --- --- --- --- --- --- --- --- */
  } else if (uselessCounter === 1) {
    actionParagraph.textContent = 'Well???';
    /* --- --- --- --- --- --- --- --- --- --- --- */
  } else if (uselessCounter === 2) {
    actionHeading.textContent = 'WELL!???';
    actionContainer.replaceChild(actionHeading, actionParagraph);
    actionHeading.classList.add('positionAbsolute');
    /* --- --- --- --- --- --- --- --- --- --- --- */
  } else if (uselessCounter === 3) {
    actionHeading.classList.toggle('hidden');
    wolfsHead.classList.toggle('hidden');
    /* --- --- --- --- --- --- --- --- --- --- --- */
  } else if (uselessCounter === 4) {
    wolfsEyes.classList.add('turnDemonRed');
    /* --- --- --- --- --- --- --- --- --- --- --- */
  } else if (uselessCounter === 5) {
    wolfsHead.classList.add('exitStageLeft');
    wolfsHead.classList.toggle('hidden');

    setTimeout(() => {
      actionContainer.replaceChild(actionParagraph, actionHeading);
    }, 1000);

    actionParagraph.textContent = 'Here again!';
    /* --- --- --- --- --- --- --- --- --- --- --- */
  } else if (uselessCounter === 6) {
    /* Skickar ut första actioContainer:n från skärmen */
    actionContainer.classList.add('offScreen');
    actionContainer.classList.add('hidden');

    /* Skapar ett bildelement för att ropa in en rätt så enorm svg-fil */

    const prettyWolfImg = document.createElement('img');
    prettyWolfImg.src = uselessResources.images.prettyWolf;
    prettyWolfImg.alt = "Wolf's head drawn in tribal style";
    prettyWolfImg.classList.add('image');

    secActionContainer.appendChild(prettyWolfImg);

    /* Flyttar in den sekundära actionContainer:n */

    secActionContainer.classList.toggle('onScreen');

    /* Skapar ett ljudelement som spelar upp efter fördröjning */

    const prettyWolfHowl = document.createElement('audio');
    prettyWolfHowl.src = uselessResources.soundEffects.howl[0];
    prettyWolfHowl.type = uselessResources.soundEffects.howl[1];

    prettyWolfHowl.play();

    /* Byter ut texten i H1 för att, varför inte? */

    uselessMainHeading.textContent = 'AAAOOOOOOOO....!';

    /**/

    /* Temporär knapp för att avsluta "PART I" och lägga till lite roliga färger och byta ut lite text i h1*/

    secActionContainer.addEventListener('click', () => {
      uselessMainHeading.classList.remove('uselessHeading');
      uselessMainHeading.classList.add('turnDemonRed');

      prettyWolfImg.classList.add('exitStageLeft');

      setTimeout(() => {
        uselessMainHeading.textContent = "Why don't you... move around?";
      }, 2000);

      /* <--- --- PART I: END--- ---| */

      /* --- --- --- --- --- --- --- --- --- --- --- */

      /* |--- --- PART II: Mouse over-events --- ---> */

      /* Med for-loop skapas fyra div:ar som ska innehålla den sista svg:n  */

      for (let i = 0; i < 4; i++) {
        const mainSection = document.querySelector('main');

        /* Fyra st. div:ar */
        const clawDiv = document.createElement('div');
        clawDiv.classList.add('hidden', 'positionAbsolute', 'clawContainer');

        /* Bilderna */
        const clawMarksImg = document.createElement('img');
        clawMarksImg.src = uselessResources.images.clawRend;
        clawMarksImg.alt = 'Stylised image of claw rending marks';
        clawMarksImg.classList.add('image');

        clawDiv.appendChild(clawMarksImg);

        mainSection.appendChild(clawDiv);
      }

      /* --- --- --- --- --- --- --- --- --- --- --- */

      const clawMarks = document.querySelectorAll('.clawContainer');

      console.log(clawMarks);

      /* --- --- --- --- --- --- --- --- --- --- --- */
    });
  }
  /* ----------------------------------------- */
  /* --- --- --- --- --- --- --- --- --- --- --- */

  uselessCounter++;

  console.log(uselessCounter);
});
