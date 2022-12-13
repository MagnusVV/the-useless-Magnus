/* actionContainer:na är hållar-elemenet som ska interageras med och manipuleras på sidan. */

const actionContainer = document.querySelector('#action-container-primary');

const secActionContainer = document.querySelector(
  '#action-container-secondary'
);

/* Main-sektionen mellan header och footer */
const mainSection = document.querySelector('main');

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
    clawRend: './images/vector_claws.svg',
  },
  soundEffects: {
    howl: ['./sound_effects/wolf-howl-6310.mp3', 'audio/mpeg'],
    strike: ['./sound_effects/punch-2-123106.mp3', 'audio/mpeg'],
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
  } else if (uselessCounter === 6) {
    /* Tar bort actioContainer från skärmen */

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

    /* Skapar ett ljudelement som spelas upp */

    const prettyWolfHowl = document.createElement('audio');
    prettyWolfHowl.src = uselessResources.soundEffects.howl[0];
    prettyWolfHowl.type = uselessResources.soundEffects.howl[1];

    prettyWolfHowl.play();

    /* Byter ut texten i H1 för att, varför inte? */

    uselessMainHeading.textContent = 'AAAOOOOOOOO....!';

    /**/

    /* <--- --- PART I: END--- ---| */

    /* --- --- --- --- --- --- --- --- --- --- --- */

    /* |--- --- PART II: Mouse over-events --- ---> */

    /* Temporär knapp för att avsluta "PART I" och lägga till lite roliga färger och byta ut lite text i h1*/

    secActionContainer.addEventListener('click', () => {
      uselessMainHeading.classList.remove('uselessHeading');
      uselessMainHeading.classList.add('turnDemonRed');

      prettyWolfImg.classList.add('exitStageLeft', 'hidden');
      secActionContainer.classList.remove('offScreen', 'onScreen');
      secActionContainer.classList.add('exitStageLeft', 'hidden');

      /* Fördröjning för att ge en smidigare och mer spännande upplevelse */

      setTimeout(() => {
        uselessMainHeading.textContent = "Why don't you... move around?";
      }, 2000);

      /* Med for-loop skapas åtta div:ar som ska innehålla rivmärkes-svg:n  */

      for (let i = 0; i < 8; i++) {
        /* Fyra st. div:ar */
        const clawDiv = document.createElement('div');
        clawDiv.classList.add('positionAbsolute', 'clawContainer');

        /* Bilderna */
        const clawMarksImg = document.createElement('img');
        clawMarksImg.src = uselessResources.images.clawRend;
        clawMarksImg.alt = 'Stylised image of claw rending marks';
        clawMarksImg.classList.add('image', 'opacity');

        /* Bildrotation */
        const rotation = Math.floor(Math.random() * 360);
        clawMarksImg.style.transform = `rotate(${rotation}deg)`;

        clawDiv.appendChild(clawMarksImg);

        mainSection.appendChild(clawDiv);
      }

      /* --- --- --- --- --- --- --- --- --- --- --- */

      /* Skapar en nod med alla ClawDiv:ar för att kunna slumpa ut deras plats på skärmen. (Tack, Google) */

      const clawMarks = document.querySelectorAll('.clawContainer');

      for (let i = 0; i < clawMarks.length; i++) {
        const clawMark = clawMarks[i];

        /* Tlll slut skapas här ett mouseover-event på de fyra clawDivarna (clawMarks). Bilderna blir synliga när pekaren går över dem och ett ljud speals upp */

        /* Slumpad positionering i "main" */

        clawMark.style.transform = 'translate(-50%, -50%)';
        clawMark.style.top = `${Math.floor(Math.random() * 100)}%`;
        clawMark.style.left = `${Math.floor(Math.random() * 100)}%`;

        /* Bild blir synlig och ljud hörs. */

        clawMark.addEventListener('mouseover', () => {
          const clawMarksImg = clawMark.querySelector('img');
          clawMarksImg.classList.remove('opacity');
          const clawStrikeSound = document.createElement('audio');
          clawStrikeSound.src = uselessResources.soundEffects.strike[0];
          clawStrikeSound.type = uselessResources.soundEffects.strike[1];
          clawStrikeSound.play();
        });
        setTimeout(() => {
          mainSection.classList.add('bgTurnDemonRed');
        }, 6000);

        setTimeout(() => {
          window.location.reload();
        }, 9000);
      }

      /* --- --- --- --- --- --- --- --- --- --- --- */
    });

    /* <--- --- PART II: END--- ---| */
  }
  /* --- --- --- --- --- --- --- --- --- --- --- */

  uselessCounter++;
});
