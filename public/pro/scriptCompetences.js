
var checkVaraible = localStorage.getItem('currentLanguage');

if (checkVaraible == null) {
  var currentLanguage = 'fr';
  localStorage.setItem('currentLanguage', currentLanguage);
}


// Define translations directly in the script
const translations = {
    'en': {
        1: 'Professional experience',
        2: 'Robotics and automation',   
        3: '3D design and modelling',
        4: 'Mechanics: assembly',
        5: 'Robotic Arm',
        6: 'Robot control software',
        7: 'Robot code',
        8: 'Information sorting',
        9: 'Information labelling',
        10: 'Setting-up the information',
        11: 'PlayBac Presse: a newsroom',
        12: 'Discovery of the business world',
        13: 'Discovery of the journalist profession',
        14: 'Communication / Teamwork / The importance of organisation',
        15: 'Internship at Cetec Industrie (2023)',
        16: 'Setting up an Excel database (2020)',
        17: 'Internship to discover the business world (2019)'

    },
    'fr': {
        1: 'Expériences professionnelles',
        2: 'Robotique et automatisation',   
        3: 'Conception et modélisation 3D',
        4: 'Mécanique : assemblage',
        5: 'Bras Robotisé',
        6: 'Logiciel de contrôle du robot',
        7: 'Code du bras robotisé',
        8: 'Tri de l\'information',
        9: 'Labellisation de l\'information',
        10: 'Organisation de l\'information',
        11: 'PlayBac Presse : une rédaction de presse',
        12: 'Découverte du monde de l\'entreprise',
        13: 'Découverte du métier de journaliste',
        14: 'Communication / Travail d\'équipe / Importance de l\'organisation',
        15: 'Stage chez Cetec Industrie (2023)',
        16: 'Mise en place d\'une base de donnée Excel (2020)',
        17: 'Stage de découverte du monde de l\'entreprise (2019)'
    }
};


function updateContent() {

    var retrievedValue = localStorage.getItem('currentLanguage');
    // Get the content element
    var elements = document.getElementsByClassName('content');
    // Access translations directly from the defined object
    for (var i = 0; i < elements.length; i++) {
        // elements[i].textContent = translations[currentLanguage][elements[i].id];
        elements[i].textContent = translations[retrievedValue][elements[i].id];
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



//######################




// document.addEventListener("DOMContentLoaded", function () {

var titre1 = document.getElementById("15");
var titre2 = document.getElementById("16");
var titre3 = document.getElementById("17");


// Add a scroll event listener
window.addEventListener("scroll", function () {
  var scrollPosition = normalizeScrollPosition();
  console.log("norm : " +  normalizeScrollPosition());

  var c1 = 0.04;
  var c2 = 0.6;
  var c3 = 0.85;

  var position1 = (scrollPosition - c1) * 900;
  var position2 = (scrollPosition - c2) * 900;
  var position3 = (scrollPosition - c3) * 900;

  if(scrollPosition < 0.55 && scrollPosition > c1){
    titre1.style.transform = "translateY(" + (position1 - 14) + "vw)";
  }
  if(scrollPosition < 0.80 && scrollPosition > c2){
    titre2.style.transform = "translateY(" + (position2 - 5) + "vw)";
  }
  if(scrollPosition < 1.5 && scrollPosition > c3){
    titre3.style.transform = "translateY(" + (position3) + "vw)";
  }

});


function normalizeScrollPosition() {
    var currentScroll = window.scrollY;
    var maxScroll = document.documentElement.scrollHeight - window.innerHeight;
    
    // Return the normalized scroll position as a ratio
    return currentScroll / maxScroll;
}

function getTranslationSpeedFactor() {
    var scrollPosition = window.scrollY;
    return (scrollPosition); // Adjust the formula as needed
}


var firstTime = localStorage.getItem('firstTime');

if (firstTime == null) {
  firstTime = 1;
  localStorage.setItem('firstTime', firstTime);
}


