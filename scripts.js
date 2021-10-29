/**
 * Skæri, blað, steinn.
 * Spilað gegnum console.
 */

/** Hámarks fjöldi best-of leikja, ætti að vera jákvæð heiltala stærri en 0 */
const MAX_BEST_OF = 10;

/** Global breyta sem heldur utan um heildar sigra */
let wins = 0;

/** Global breyta sem heldur utan um heildar töp */
let losses = 0;

/**
 * Athugar hvort gefin tala sé gild sem best-of gildi.
 * @param {number} bestOf Tala sem skal athuga
 * @return {boolean} true eða false
 */
function isValidBestOf(bestOf) {
  
  if (bestOf%2 == 0) {
    return false;
  }

  else
    return true;
  
}
console.assert(isValidBestOf(1) === true, '1 er valid best of');
console.assert(isValidBestOf(2) === false, '2 er ekki er valid best of');
console.assert(isValidBestOf(9) === true, '9 er valid best of');

function playAsText(play) {

  if (play == '1') {
    return 'Skæri';
  } 
  else if (play == '2') {
    return 'Blað';
  } 
  else if (play == '3') {
    return 'Steinn';
  }
  else {
    return 'Óþekkt';
  }
}


console.assert(playAsText('1') === 'Skæri', '1 táknar skæri');
console.assert(playAsText('2') === 'Blað', '2 táknar blað');
console.assert(playAsText('3') === 'Steinn', '3 táknar steinn');
console.assert(playAsText('foo') === 'Óþekkt', 'Annað er óþekkt');

/**
 * Athugar hvort spilari eða tölva vinnur.
 * @param {number} player Það sem spilari spilaði
 * @param {number} computer Það sem tölva spilaði
 * @returns -1 ef tölva vann, 0 ef jafntefli, 1 ef spilari vann
 */
function checkGame(player, computer) {
  if (player === '1') {
    if (computer === '2') {
      return 1;
    } else {
      return -1;
    }
  }
  if (player === '2') {
    if (computer === '3') {
      return 1;
    } else {
      return -1;
    }
  }
  if (player === '3') {
    if (computer === '1') {
    return 1;
  } else {
    return -1;
    }
  }
  if (player === computer) {
    return 0;
  }
  if (player === '1') {
    if (computer === '1') {
    return 0;
  } 
  
}
console.assert(checkGame('1', '2') === 1, 'Skæri vinnur blað');
console.assert(checkGame('2', '3') === 1, 'Blað vinnur stein');
console.assert(checkGame('3', '1') === 1, 'Steinn vinnur skæri');
console.assert(checkGame('1', '1') === 0, 'Skæri og skæri eru jafntefli');
console.assert(checkGame('1', '3') === -1, 'Skæri tapar fyrir stein');

/**
 * Spilar einn leik.
 * @return {boolean} -1 ef tölva vann, 0 ef jafntefli, 1 ef spilari vann
 */
function round() {
  // 1. Spyrja um hvað spilað, ef cancel, hætta
  let playing = prompt("Hvað setur þú út? Skæri (1), blað (2), steinn (3)")

  // 2. Ef ógilt, tölva vinnur
  if (player !== 1, 2, 3)
  return "-1"
  alert("Ógiilt tölvan vinnur.")
  // 3. Velja gildi fyrir tölvu með `Math.floor(Math.random() * 3) + 1` sem skilar heiltölu á [1, 3]
  let computer = Math.floor(Math.random() * 3) + 1;
  // 4. Nota `checkGame()` til að finna hver vann
  // 5. Birta hver vann
  // 6. Skila hver vann
  if (checkGame(player, computer) == 1) {
    alert('Þú spilaðir: ' + playAsText(player) + 
    '\n Tölvan spilaði: ' + playAsText(computer) + '\n Þú sigrar.');
    console.log('Þú sigrar.');
    return 1;
  }
  else if (checkGame(player, computer) == 0) {
    alert('Þú spilaðir: ' + playAsText(player) + 
    '\n Tölvan spilaði: ' + playAsText(computer) + '\n Jafntefli.');
    console.log('Jafntefli.');
    return 0;
  }
  else {
    alert('Þú spilaðir: ' + playAsText(player) + 
    '\n Tölvan spilaði: ' + playAsText(computer) + '\n Þú tapar.');
    console.log('Tölvan sigrar.');
    return -1;
  }
}
}
// Hér getum við ekki skrifað test þar sem fallið mun biðja notanda um inntak!

/**
 * Spilar leik og bætir útkomu (sigur eða tap) við í viðeigandi global breytu.
 */
function play() {

  // TODO útfæra
  // 1. Spyrja um fjölda leikja
  let best = prompt("Best af hve mörgum leikjum? Verður að vera jákvæð oddatala minni en 10.")
  // 2. Staðfesta að fjöldi leikja sé gilt gildi
  // 3. Keyra fjölda leikja og spila umferð þar til sigurvegari er krýndur
  // 4. Birta hvort spilari eða tölva vann
}
// Hér getum við ekki skrifað test þar sem fallið mun biðja notanda um inntak!

/**
 * Birtir stöðu spilara.
 */
function games() {
  // TODO útfæra
}
// Hér getum við ekki skrifað test þar sem fallið les úr global state
