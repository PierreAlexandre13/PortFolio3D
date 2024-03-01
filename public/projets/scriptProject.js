

var compteurLeft = 100;
var compteurRight = 100;

function left(){

    console.log("left");
    var conteneur = document.querySelectorAll(".sec");

    conteneur.forEach(function(element) {
        element.style.transform = "translateX(" + compteurLeft + "vw)";
    });

    compteurRight = compteurRight - 100;
    compteurLeft = compteurLeft + 100;

    document.body.scrollTop = 0; 
    document.documentElement.scrollTop = 0;

}

function right(){

    console.log("right");
    console.log(compteurRight);
    var conteneur = document.querySelectorAll(".sec");

    conteneur.forEach(function(element) {
        element.style.transform = "translateX(-" + compteurRight + "vw)";
    });

    compteurRight = compteurRight + 100;
    compteurLeft = compteurLeft - 100;

    document.body.scrollTop = 0; 
    document.documentElement.scrollTop = 0;
    

}

var boutonGauche = document.getElementById("boutonGauche");
var boutonDroite = document.getElementById("boutonDroite");
var indicateur = document.getElementById("indic");

var indice = 1;

boutonGauche.addEventListener("click", function() {
    console.log("clicked!");
    

    if (indice === 2){
        indicateur.style.left = "42.5%";
        indice = 1;
        left();
    }
    else if (indice === 3){
        indicateur.style.left = "49.5%";
        indice = 2;
        left();
    }

});

boutonDroite.addEventListener("click", function() {
    console.log("clicked!");
    

    if (indice === 1){
        indicateur.style.left = "49.5%";
        indice = 2;
        right();

    }
    else if (indice === 2){
        indicateur.style.left = "56.5%";
        indice = 3;
        right();
    }
});


// ###############


var checkVaraible = localStorage.getItem('currentLanguage');

if (checkVaraible == null) {
  var currentLanguage = 'fr';
  localStorage.setItem('currentLanguage', currentLanguage);
}

// Define translations directly in the script
const translations = {
    'en': {
        1: 'Robotics : Drone',
        2: 'Design',
        3: '3D Modelling',
        4: 'Hardware',
        5: 'Printed circuit board',
        6: '3D printing',
        7: 'Program',
        8: 'Assembly',
        9: 'Tests',
        10: 'Video Games',
        11: 'Shooting, course and adventure game',
        12: 'Explore an open world',
        13: 'Face fearsome enemies',
        14: 'Explore mysterious dungeons',
        15: 'Design of dungeons, enemies and map',
        16: 'C# programming',
        17: 'WEB: this website',
        18: 'Fusion360 for the 3D modelling',
        19: 'Three.js for the 3D integration',
        20: 'Express js for the back-end',
        21: 'Pure HTML & CSS for the front-end'
    },
    'fr': {
        1: 'Robotique : Drone',
        2: 'Conception',
        3: 'Modélisation 3D',
        4: 'Matériels',
        5: 'Circuit imprimé',
        6: 'Impressions 3D',
        7: 'Programmation',
        8: 'Assemblage',
        9: 'Essais',
        10: 'Jeux Vidéos',
        11: 'Jeu de tir, parcours et aventure',
        12: 'Parcourez un monde ouvert',
        13: 'Affrontez des ennemis redoutables',
        14: 'Explorez des donjons mystérieux',
        15: 'Design des donjons, des ennemis, de la carte',
        16: 'Programmation en C#',
        17: 'WEB : ce site web',
        18: 'Fusion360 pour la modélisation 3D',
        19: 'Three.js pour l\'intégration 3D',
        20: 'Express js pour le back-end',
        21: 'Pure HTML & CSS pour le front-end'
    }
};


function updateContent() {

    var retrievedValue = localStorage.getItem('currentLanguage');
    // Get the content element
    var elements = document.getElementsByClassName('content');
    // Access translations directly from the defined object
    for (var i = 0; i < elements.length; i++) {
        var id = elements[i].id;
        var numberPart = id.substring(1); // remove the first character 'n'
        var numericValue = parseInt(numberPart);
        // elements[i].textContent = translations[currentLanguage][elements[i].id];
        elements[i].textContent = translations[retrievedValue][numericValue];
    }

    if(retrievedValue === 'fr'){
        selectLanguageBtn.innerHTML  = '<img src="global2.jpg" alt="global"> Séléctionner votre language';
        englishBtn.innerHTML  = '<img class="drapeau" src="america.png" alt="english"> Anglais';
        frenchBtn.innerHTML  = '<img class="drapeau" src="france.jpg" alt="french"> Français';
    }
    else if(retrievedValue === 'en'){
        selectLanguageBtn.innerHTML  = '<img src="global2.jpg" alt="global"> Select your language';
        englishBtn.innerHTML  = '<img class="drapeau" src="america.png" alt="english"> English';
        frenchBtn.innerHTML  = '<img class="drapeau" src="france.jpg" alt="french"> French';
    }

}


const selectLanguageBtn = document.getElementById('selectLanguageBtn');
const languageButtons = document.getElementById('languageButtons');

selectLanguageBtn.addEventListener('click', function () {
    // Toggle the visibility of language buttons
    languageButtons.classList.toggle('hidden');
});

// Add click event listeners to the language buttons (English and French)
const englishBtn = document.getElementById('englishBtn');
const frenchBtn = document.getElementById('frenchBtn');

englishBtn.addEventListener('click', function () {
    // currentLanguage = 'en';
    var currentLanguage = 'en';
    localStorage.setItem('currentLanguage', currentLanguage);
    updateContent();
    // Add logic for English language selection
    languageButtons.classList.add('hidden');
});

frenchBtn.addEventListener('click', function () {
    // currentLanguage = 'fr';
    var currentLanguage = 'fr';
    localStorage.setItem('currentLanguage', currentLanguage);
    updateContent();
    // Add logic for French language selection
    languageButtons.classList.add('hidden');
});

updateContent();


var retoure = document.getElementById('buttonCercle');
retoure.addEventListener('click', function() {
    console.log("retour clique !");
    window.location.href = "/homepage";
});


var firstTime = localStorage.getItem('firstTime');

if (firstTime == null) {
  firstTime = 1;
  localStorage.setItem('firstTime', firstTime);
}


