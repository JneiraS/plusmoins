
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

    // Declaration des variables    
    let tentatives = parseInt(tentativesElement.textContent);
    let liste_proposals = [100];

    plusButton.addEventListener("click", function() {
      tentatives++;
      tentativesElement.textContent = tentatives;
      proposal =  proposal + (Math.round((liste_proposals[liste_proposals.length - 1]-proposal)/2));
      liste_proposals.push(proposal);
      proposalElement.innerHTML = proposal;
    });

    moinsButton.addEventListener("click", function() {
      tentatives--;
      tentativesElement.textContent = tentatives;
      proposal =  Math.round(proposal/2);
      proposalElement.innerHTML = proposal;
    });
  } else {
    console.error("Un des éléments est manquant");
  }
});
