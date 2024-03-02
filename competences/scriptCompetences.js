
var checkVaraible = localStorage.getItem('currentLanguage');

if (checkVaraible == null) {
  var currentLanguage = 'fr';
  localStorage.setItem('currentLanguage', currentLanguage);
}

// Define translations directly in the script
const translations = {
    'en': {
        1: 'SKILLS',
    },
    'fr': {
        1: 'COMPETENCES',
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
    window.location.href = "../";
});


var logoC = document.getElementById("C");
var cpp = document.getElementById("Cpp");
var logoHtml = document.getElementById("html");
var logocss = document.getElementById("css");
var js = document.getElementById("js");
var python = document.getElementById("python");
var arduino = document.getElementById("arduino");
var solidworks = document.getElementById("solidworks");
var fusion = document.getElementById("fusion");
var easy = document.getElementById("easy");

var bc = 0;
var bcpp = 0;
var chtml = 0;
var ccss = 0;
var cjs = 0;
var cpython = 0;
var carduino = 0;
var csolidworks = 0;
var cfusion = 0;
var ceasy = 0;

function handleScroll() {
    var scrollPosition = window.scrollY;
    if(scrollPosition > 800){
        bc = 1;
    }
    if(scrollPosition > 1700){
        bcpp = 1;
    }
    if(scrollPosition < 1700){
        bcpp = 0;
    }
    if(scrollPosition < 800){
        bc = 0;
    }
    if(scrollPosition > 2500){
        chtml = 1;
    }
    if(scrollPosition < 2500){
        chtml = 0;
    }
    if(scrollPosition > 3400){
        ccss = 1;
    }
    if(scrollPosition < 3400){
        ccss = 0;
    }
    if(scrollPosition > 4200){
        cjs = 1;
    }
    if(scrollPosition < 4200){
        cjs = 0;
    }
    if(scrollPosition > 4800){
        cpython = 1;
    }
    if(scrollPosition < 4800){
        cpython = 0;
    }
    if(scrollPosition > 5650){
        carduino = 1;
    }
    if(scrollPosition < 5650){
        carduino = 0;
    }
    if(scrollPosition > 6650){
        csolidworks = 1;
    }
    if(scrollPosition < 6650){
        csolidworks = 0;
    }
    if(scrollPosition > 7600){
        cfusion = 1;
    }
    if(scrollPosition < 7600){
        cfusion = 0;
    }
    if(scrollPosition > 8400){
        ceasy = 1;
    }
    if(scrollPosition < 8400){
        ceasy = 0;
    }
    actualisor();
    
}


function actualisor(){
    if(bc === 1){
        logoC.style.position = "fixed";
        logoC.style.left = "5vw";
        logoC.style.top = "20vh";
    }
    if(bc === 0){
        logoC.style.position = "absolute";
        logoC.style.left = "5vw";
        logoC.style.top = "120vh";
    }
    if(bcpp === 1) {
        cpp.style.position = "fixed";
        cpp.style.left = "25vw";
        cpp.style.top = "20vh";
    }
    if (bcpp === 0){
        cpp.style.position = "absolute";
        cpp.style.left = "25vw";
        cpp.style.top = "220vh";
    }
    if(chtml === 1) {
        logoHtml.style.position = "fixed";
        logoHtml.style.left = "45vw";
        logoHtml.style.top = "20vh";
    }
    if (chtml === 0){
        logoHtml.style.position = "absolute";
        logoHtml.style.left = "45vw";
        logoHtml.style.top = "320vh";
    }

    if(ccss === 1) {
        logocss.style.position = "fixed";
        logocss.style.left = "65vw";
        logocss.style.top = "20vh";
    }
    if (ccss === 0){
        logocss.style.position = "absolute";
        logocss.style.left = "65vw";
        logocss.style.top = "420vh";
    }

    if(cjs === 1) {
        js.style.position = "fixed";
        js.style.left = "85vw";
        js.style.top = "20vh";
    }
    if (cjs === 0){
        js.style.position = "absolute";
        js.style.left = "85vw";
        js.style.top = "520vh";
    }

    if(cpython === 1) {
        python.style.position = "fixed";
        python.style.left = "5vw";
        python.style.top = "70vh";
    }
    if (cpython === 0){
        python.style.position = "absolute";
        python.style.left = "5vw";
        python.style.top = "620vh";
    }

    if(carduino === 1) {
        arduino.style.position = "fixed";
        arduino.style.left = "25vw";
        arduino.style.top = "70vh";
    }
    if (carduino === 0){
        arduino.style.position = "absolute";
        arduino.style.left = "25vw";
        arduino.style.top = "720vh";
    }

    if(csolidworks === 1) {
        solidworks.style.position = "fixed";
        solidworks.style.left = "45vw";
        solidworks.style.top = "70vh";
    }
    if (csolidworks === 0){
        solidworks.style.position = "absolute";
        solidworks.style.left = "45vw";
        solidworks.style.top = "820vh";
    }

    if(cfusion === 1) {
        fusion.style.position = "fixed";
        fusion.style.left = "65vw";
        fusion.style.top = "70vh";
    }
    if (cfusion === 0){
        fusion.style.position = "absolute";
        fusion.style.left = "65vw";
        fusion.style.top = "920vh";
    }

    if(ceasy === 1) {
        easy.style.position = "fixed";
        easy.style.left = "85vw";
        easy.style.top = "70vh";
    }
    if (ceasy === 0){
        easy.style.position = "absolute";
        easy.style.left = "85vw";
        easy.style.top = "1020vh";
    }

}


window.onscroll = handleScroll;


var firstTime = localStorage.getItem('firstTime');

if (firstTime == null) {
  firstTime = 1;
  localStorage.setItem('firstTime', firstTime);
}


