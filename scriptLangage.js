

var checkVaraible = localStorage.getItem('currentLanguage');

if (checkVaraible == null) {
  var currentLanguage = 'fr';
  localStorage.setItem('currentLanguage', currentLanguage);
}


// Define translations directly in the script
const translations = {
    'en': {
        1: 'Hi, welcome to my PortFolio!',
        2: 'Explore and discover my own world!',
        3: 'Close this window to continue...',
        4: 'Hobbies :',
        5: 'Sport, in particular tennis, as you may have guessed',
        6: 'But also robotics and everything to do with new technologies',
        7: 'Technologies :',
        8: 'I\'ve always been curious and loved new technologies.',
        9: 'So far, I\'ve built a drone and coded a 3D website. My next projects are the development of a mobile application and the development of artificial intelligence in Python.'
    },
    'fr': {
        1: 'Bonjour et bienvenue sur mon PortFolio !',
        2: 'Explorez et découvrez mon monde !',
        3: 'Fermez cette fênetre pour continuer ...',
        4: 'Loisirs :',
        5: 'Sport notamment le tennis comme vous avez pu le deviner',
        6: 'Mais aussi la robotique et tout ce qui touche aux nouvelles technologies',
        7: 'Technologies :',
        8: 'J\'ai toujours été curieux et aimé les nouvelles technologies.',
        9: 'Pour l\'instant, j\'ai construit un drone et codé un site web en 3D. Mes prochains projets sont le développment d\'une application mobile et le dév d\'une intelligence artificielle avec python.'
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

        compteurText.firstChild.nodeValue = 'Découvert : ';
    }
    else if(retrievedValue === 'en'){
        selectLanguageBtn.innerHTML  = '<img src="global2.jpg" alt="global"> Select your language';
        englishBtn.innerHTML  = '<img class="drapeau" src="america.png" alt="english"> English';
        frenchBtn.innerHTML  = '<img class="drapeau" src="france.jpg" alt="french"> French';

        compteurText.firstChild.nodeValue = 'Discovered : ';
    }
}

const compteurText = document.getElementById('compteurTexte');


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

