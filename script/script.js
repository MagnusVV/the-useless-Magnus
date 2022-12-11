/* actionContainer är den variabel som ska interageras med och manipuleras på sidan. */

const actionContainer = document.querySelector('#action-container-primary');

const secActionContainer = document.querySelector(
  '#action-container-secondary'
);

const actionParagraph = actionContainer.querySelector('p');

const actionHeading = document.createElement('h2');

const wolfsHead = document.querySelector('#wolfsHead');

const wolfsEyes = wolfsHead.querySelector('#wolfsEyes');

/* Array eller object? Vi får se */

const uselessResources = {
  images: { prettyWolf: './images/Crimson-Tribal-Wolf.svg' },
  soundEffects: {
    howl: ['./sound_effects/wolf-howl-6310.mp3', 'audio/mpeg'],
    strike: './sound_effects/wolf-howl-6310.mp3',
  },
};

/* uselessCounter används för iterationen för det som kommer att ske på sidan under "PART I". */

/* |--- --- PART I --- ---> */

let uselessCounter = 0;

actionContainer.addEventListener('click', () => {
  /* ----------------------------------------- */

  if (uselessCounter === 0) {
    actionParagraph.textContent = 'Well?';
  } else if (uselessCounter === 1) {
    /* --- --- --- --- --- --- --- --- --- --- --- */
    actionParagraph.textContent = 'Well???';
  } else if (uselessCounter === 2) {
    /* --- --- --- --- --- --- --- --- --- --- --- */
    actionHeading.textContent = 'WELL!???';
    actionContainer.replaceChild(actionHeading, actionParagraph);
    actionHeading.classList.add('positionAbsolute');
  } else if (uselessCounter === 3) {
    /* --- --- --- --- --- --- --- --- --- --- --- */
    actionHeading.classList.toggle('hidden');
    wolfsHead.classList.toggle('hidden');
  } else if (uselessCounter === 4) {
    /* --- --- --- --- --- --- --- --- --- --- --- */
    wolfsEyes.classList.add('turnDemonRed');
  } else if (uselessCounter === 5) {
    /* --- --- --- --- --- --- --- --- --- --- --- */
    wolfsHead.classList.add('exitStageLeft');
  } else if (uselessCounter === 6) {
    /* --- --- --- --- --- --- --- --- --- --- --- */
    wolfsHead.classList.toggle('hidden');

    /* Skapar ett bildelement för att ropa in en rätt så enorm svg-fil */

    const prettyWolfImg = document.createElement('img');
    prettyWolfImg.src = uselessResources.images.prettyWolf;
    prettyWolfImg.alt = "Wolf's head created in tribal style";
    prettyWolfImg.classList.add('image');

    secActionContainer.appendChild(prettyWolfImg);

    /* Skickar ut första actioContainer:n och flyttar in den sekundära */

    actionContainer.classList.toggle('offScreen');
    secActionContainer.classList.toggle('onScreen');

    /* ----------------------------------------- */

    /* Skapar ett ljudelement som spelar upp efter fördröjning */

    const prettyWolfHowl = document.createElement('audio');
    prettyWolfHowl.src = uselessResources.soundEffects.howl[0];
    prettyWolfHowl.type = uselessResources.soundEffects.howl[1];

    prettyWolfHowl.play();

    /**/
  }

  uselessCounter++;

  console.log(uselessCounter);
});

/* <--- --- PART I: END--- ---| */

/* |--- --- PART II --- ---> */
