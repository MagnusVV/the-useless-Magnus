/* actionContainer är den variabel som ska interageras med manipuleras och på sidan. */

const actionContainer = document.querySelector('#action-container');

const actionParagraph = actionContainer.querySelector('p');

const actionHeading = document.createElement('h2');

const wolfsHead = document.querySelector('#wolfsHead');

console.log(wolfsHead);

/* uselessCounter används för iterationen för det som kommer att ske på sidan. */

let uselessCounter = 0;

/* addEventlistener-block där det händer olika saker vid klick. */

actionContainer.addEventListener('click', () => {
  if (uselessCounter === 0) {
    actionParagraph.textContent = 'Well?';
    /* --- --- --- --- --- --- --- --- --- --- --- */
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
    actionHeading.classList.add('hidden');
    wolfsHead.classList.remove('hidden');
  } else if (uselessCounter === 4) {
    const wolfsEyes = wolfsHead.querySelector('#wolfsEyes');
    wolfsEyes.classList.add('turnDemonRed');
    console.log(wolfsEyes);
  }

  uselessCounter++;

  console.log(uselessCounter);
});
