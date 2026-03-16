function letterFinder(word, match) {
  if (typeof word !== "string") {
    console.log("Erreur: word doit être une chaîne de caractères.");
    return;
  }
  if (typeof match !== "string" || match.length !== 1) {
    console.log("Erreur: match doit être une seule lettre (1 caractère).");
    return;
  }

  for (let i = 0; i < word.length; i++) {
    if (word[i] === match) {
      console.log("Found the", match, "at", i);
    } else {
      console.log("---No match found at", i);
    }
  }
}
function countLetter(word, match) {
  let count = 0 ;
  if (typeof word !== "string") {
    console.log("Erreur: word doit être une chaîne de caractères.");
    return;
  }
  if (typeof match !== "string" || match.length !== 1) {
    console.log("Erreur: match doit être une seule lettre (1 caractère).");
    return;
  }

  for (let i = 0; i < word.length; i++) {
    if (word[i] === match) {
      console.log("Found the", match, "at", i);
      count++;
    } else {
      console.log("---No match found at", i);
    }
   
  }
  return console.log (count ) ;
}




console.log("------Exercice 1 ---------");

letterFinder("banana", "a");

console.log("------Exercice 2 ---------");

letterFinder("hello", "z");

console.log("------Exercice 3 ---------");

countLetter("banana", "a");