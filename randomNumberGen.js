function trouverDeuxiemeNombreLePlusGrand(liste) {
    // Triez la liste en ordre décroissant
    liste.sort((a, b) => b - a);
    
    if (liste.length < 2) {
      return 100;
    }else{
        return liste[1];
    }
    // Sélectionnez le deuxième élément de la liste
    
  }
function getRandomNumber() {
  return Math.floor(Math.random() * 100) + 1;
}

document.addEventListener("DOMContentLoaded", function() {
  const proposalElement = document.getElementById("proposal");
  const tentativesElement = document.getElementById("tentatives");
  const plusButton = document.getElementById("plus");
  const moinsButton = document.getElementById("moins");

// verifie que tous les elements existent
  if (proposalElement && tentativesElement && plusButton && moinsButton) {
    let proposal = getRandomNumber();
    proposalElement.innerHTML = proposal;

// Fonction pour incrémenter le nombre de tentatives
function incrementerTentatives() {
    tentatives++;
    tentativesElement.textContent = tentatives;
  }

// Déclaration des variables
let tentatives = parseInt(tentativesElement.textContent, 10);
let listeProposals = [100];

// Ajout d'un écouteur d'événement sur le bouton plus
plusButton.addEventListener("click", function() {
  incrementerTentatives();
  calculerNouvelleProposition(true);
});

// Ajout d'un écouteur d'événement sur le bouton moins
moinsButton.addEventListener("click", function() {
  incrementerTentatives();
  calculerNouvelleProposition(false);
});



/**
 * Fonction pour calculer la nouvelle proposition
 * @param {boolean} estPlus - si la proposition est plus grande ou plus petite
 */
function calculerNouvelleProposition(estPlus) {
  // si la proposition est plus grande, on incrémente de la moitié de la différence entre la
  // proposition actuelle et la proposition précédente
  if (estPlus) {
    proposal = proposal + Math.round((trouverDeuxiemeNombreLePlusGrand(listeProposals) - proposal) / 2);
    // on ajoute la nouvelle proposition à la liste
    listeProposals.push(proposal);
  } else {
    // si la proposition est plus petite, on divise la proposition actuelle par 2
    listeProposals.push(proposal)
    proposal = Math.round(proposal / 2);
    
  }
  // on met à jour l'affichage de la proposition
  proposalElement.innerHTML = proposal;
;
  // on affiche la liste des propositions pour le debug
  console.log(listeProposals);
}

/**
 * Trouve le deuxième plus grand élément dans une liste
 * @param {number[]} liste - la liste de nombres
 * @returns {number} le deuxième plus grand élément de la liste
 */


  } else {
    console.error("Un des éléments est manquant");
  }
});
