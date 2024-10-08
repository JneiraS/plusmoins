/**
 * Calcule la moyenne d'une liste de nombres
 * @param {Array<number>} liste - Une liste de nombres
 * @returns {number} La moyenne des éléments dans la liste
 */
function calculerMoyenne(liste) {
  // Initialisation de la somme
  let somme = 0;

  // Boucle qui parcourt la liste
  for (let i = 0; i < liste.length; i++) {
    // Ajout de chaque élément à la somme
    somme += liste[i];
  }

  // Calcul de la moyenne
  return somme / liste.length;
}

/**
 * Trouve le deuxième plus grand nombre dans une liste
 * @param {Array<number>} liste - Une liste de nombres
 * @returns {number} Le deuxième plus grand nombre de la liste, ou 100 si la liste contient moins de 2 éléments
 */
function trouverDeuxiemeNombreLePlusGrand(liste) {
  // Trier la liste par ordre décroissant
  liste.sort((a, b) => b - a);

  // Si la liste contient moins de 2 éléments, retourner 100
  if (liste.length < 2) {
    return 100;
  } else {

    // Retourner le deuxième élément de la liste
    return liste[1];
  }
}

/**
 * Trouve le deuxième plus petit nombre dans une liste
 * @param {Array<number>} liste - Une liste de nombres
 * @returns {number} Le deuxième plus petit nombre de la liste, ou 1 si la liste contient moins de 2 éléments
 */
function trouverDeuxiemeNombreLePlusPetit(liste) {
  // Trier la liste par ordre croissant
  liste.sort((a, b) => a - b);

  // Si la liste contient moins de 2 éléments, retourner 1
  if (liste.length < 2) {
    return 1;
  } else {

    // Retourner le deuxième élément de la liste
    return liste[1];
  }
}

/**
 * Retourne un nombre aléatoire entre min et max (inclus)
 * @param {number} min La valeur minimale de la plage
 * @param {number} max La valeur maximale de la plage
 * @returns {number} Un nombre aléatoire entre min et max
 */
function getRandomNumber(min, max) {
  // Calcul de l'indice aléatoire
  const indice = Math.floor(Math.random() * (max - min + 1)) + min;

  // Retour de l'indice aléatoire
  return indice;
}

document.addEventListener("DOMContentLoaded", function() {
  const proposalElement = document.getElementById("proposal");
  const tentativesElement = document.getElementById("tentatives");
  const plusButton = document.getElementById("plus");
  const moinsButton = document.getElementById("moins");

  if (proposalElement && tentativesElement && plusButton && moinsButton) {
    let proposal = getRandomNumber(1, 100);
    let tentatives = 0;
    let min = 1;
    let max = 100;
    let listeProposals = [proposal];

    proposalElement.innerHTML = proposal;
    tentativesElement.textContent = tentatives;

    /**
     * Incrémente le nombre de tentatives
     */
    function incrementerTentatives() {
      // Incrémente le nombre de tentatives
      tentatives++;
      // Met à jour le texte de l'élément HTML #tentatives
      tentativesElement.textContent = tentatives;
    }

    plusButton.addEventListener("click", function() {
      incrementerTentatives();
      min = Math.max(min, proposal);
      calculerNouvelleProposition();
    });

    moinsButton.addEventListener("click", function() {
      incrementerTentatives();
      max = Math.min(max, proposal);
      calculerNouvelleProposition();
    });

    function calculerNouvelleProposition() {
      proposal = Math.floor((min + max) / 2);
      listeProposals.push(proposal);
      proposalElement.innerHTML = proposal;
      console.log(listeProposals);
    }
  } else {
    console.error("Un des éléments est manquant");
  }
});


