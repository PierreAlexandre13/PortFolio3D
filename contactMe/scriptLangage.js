

var checkVaraible = localStorage.getItem('currentLanguage');

if (checkVaraible == null) {
  var currentLanguage = 'fr';
  localStorage.setItem('currentLanguage', currentLanguage);
}


var infoVisible = 0;
var champAremplir = 0;
var mailC = 0;
var TropMail = 0;
var succes = 0;

// Define translations directly in the script
const translations = {
    'en': {
        1: 'Contact me!',
        2: 'Enter your email adress : ',   
        3: 'Subject : ',
        4: 'Enter your message : ',
        5: 'Send'
    },
    'fr': {
        1: 'Contactez moi !',
        2: 'Entrez votre adresse email : ',
        3: 'Objet : ',
        4: 'Entrez votre message : ',
        5: 'Envoyer'
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

    if (infoVisible == 1) {

        if (champAremplir == 1){
            if(retrievedValue === 'fr'){
                document.getElementById('info').style.color = "red";
                document.getElementById('info').innerText = 'Veillez à remplir tous les champs';
            }
            else if (retrievedValue === 'en'){
                document.getElementById('info').innerText = 'Please fill out all the forms';
            }
        }
        else if (mailC == 1){
            document.getElementById('info').style.color = "red";
            if(retrievedValue === 'fr'){
                document.getElementById('info').innerText = 'adresse email incorrecte';
            }
            else if (retrievedValue === 'en'){
                document.getElementById('info').innerText = 'email adress incorrect';
            }
        }
        else if (TropMail == 1){
            document.getElementById('info').style.color = "red";
            if(retrievedValue === 'fr'){
                document.getElementById('info').innerText = 'trop d\'emails envoyés';
            }
            else if (retrievedValue === 'en'){
                document.getElementById('info').innerText = 'too many email send';
            }
        }
        else if (succes == 1){
            document.getElementById('info').style.color = "green";
            if(retrievedValue === 'fr'){
                document.getElementById('info').innerText = 'Envoyé avec succès';
            }
            else if (retrievedValue === 'en'){
                document.getElementById('info').innerText = 'Send successfully';
            }

        }

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







/* Script pour mail */ 




var retrievedValue;

// Initialize EmailJS with your user ID
emailjs.init('7uNN6ecHeKYIGKB-3');

// Function to send a basic text email
function sendEmail() {
    // Replace YOUR_TEMPLATE_ID with your template ID from the EmailJS dashboard
    var customMessage = document.getElementById('messageInput').value;
    var customEmail = document.getElementById('emailInput').value;
    var customSubject = document.getElementById('subjectInput').value;

    emailjs.send('service_jlnrwug', 'template_j0dn9u6', {
        to_email: 'pa@lvpan.fr',
        message: 'New message from : ' + customEmail + '\nSubject : ' + customSubject + '\nMessage : ' + customMessage
    })
    .then(function(response) {
        console.log('Email sent successfully:', response);
        document.getElementById('messageInput').value = '';
        // document.getElementById('info').innerText = 'SUCCESS';

        envoyer = 1;

        champAremplir = 0;
        mailC = 0;
        TropMail = 0;
        succes = 1;

        if(retrievedValue === 'fr'){
            document.getElementById('info').innerText = 'Envoyé avec succès';
            document.getElementById('info').style.color = "green";
        }
        else if (retrievedValue === 'en'){
            document.getElementById('info').innerText = 'Send successfully';
            document.getElementById('info').style.color = "green";
        }


        let emailCount = localStorage.getItem('emailCount') || 0;
        emailCount = parseInt(emailCount) + 1;
        localStorage.setItem('emailCount', emailCount);

    }, function(error) {
        console.log('Error sending email:', error);
        document.getElementById('info').innerText = 'FAILED';
    });
}


var checkVaraible = localStorage.getItem('currentLanguage');

if (checkVaraible == null) {
  var currentLanguage = 'fr';
  localStorage.setItem('currentLanguage', currentLanguage);
}


function checkmail(mail){
    var i = 0;
    for (i ; i < mail.length ; i++) {
        if (mail[i] === '@'){
            return true;
        }
    }
    return false;
}

function checkContenu(){
    var adresse = document.getElementById('emailInput').value;
    var messageEmail = document.getElementById('messageInput').value;
    var subject = document.getElementById('subjectInput').value;
    let emailCount = localStorage.getItem('emailCount') || 0;

    console.log(messageEmail);
    
    retrievedValue = localStorage.getItem('currentLanguage');

    infoVisible = 1;

    if (adresse === '' || messageEmail === '' || subject === ''){
        champAremplir = 1;
        mailC = 0;
        TropMail = 0;
        succes = 0;
        document.getElementById('info').style.color = "red";
        if(retrievedValue === 'fr'){
            document.getElementById('info').innerText = 'Veillez à remplir tous les champs';
        }
        else if (retrievedValue === 'en'){
            document.getElementById('info').innerText = 'Please fill out all the forms';
        }
    }
    else if (checkmail(adresse) === false){
        champAremplir = 0;
        mailC = 1;
        TropMail = 0;
        succes = 0;
        document.getElementById('info').style.color = "red";
        if(retrievedValue === 'fr'){
            document.getElementById('info').innerText = 'adresse email incorrecte';
        }
        else if (retrievedValue === 'en'){
            document.getElementById('info').innerText = 'email adress incorrect';
        }
    }
    else if (parseInt(emailCount) > 3){
        champAremplir = 0;
        mailC = 0;
        TropMail = 1;
        succes = 0;
        document.getElementById('info').style.color = "red";
        if(retrievedValue === 'fr'){
            document.getElementById('info').innerText = 'trop d\'emails envoyés';
        }
        else if (retrievedValue === 'en'){
            document.getElementById('info').innerText = 'too many email send';
        }
    }
    else {
        sendEmail();
    }
}


var valide = document.getElementById('5');
valide.addEventListener('click', function() {
    checkContenu();
});


var retoure = document.getElementById('buttonCercle');
retoure.addEventListener('click', function() {
    console.log("retour clique !");
    window.location.href = "../";
});


/* ###################    SCRIPT AVION      ###################*/


import * as THREE from 'three';
import { OBJLoader } from 'three/addons/loaders/OBJLoader.js';


const scene = new THREE.Scene();
scene.background = new THREE.Color(0xFAFAFA);

// Create a camera
const camera = new THREE.PerspectiveCamera(75, window.innerWidth / window.innerHeight, 0.1, 1000);
camera.position.z = 130;

// Create a renderer
const renderer = new THREE.WebGLRenderer();
renderer.setSize(window.innerWidth, window.innerHeight);
document.getElementById('container').appendChild(renderer.domElement);


//light
var ambientLight = new THREE.AmbientLight(0xffffff, 0.8);
scene.add(ambientLight);

var directionalLight = new THREE.DirectionalLight(0xffffff, 1);
directionalLight.position.set(0, 2, 3); //default; light shining from top
directionalLight.target.position.set(0, 0, 0);
scene.add(directionalLight);
scene.add(directionalLight.target);


const loader = new OBJLoader();

const cAvion = new THREE.MeshLambertMaterial({ color: 0xF3F3F3 }); 


let avion;
let avionMesh;


loader.load('/contactMe/avionPapier.obj', (object) => {

    avion = object;

    avion.position.set(90, 10, 20); // Set translation coordinates
    avion.rotation.set(5.8, -0.2, -2); // Set rotation coordinates
    avion.traverse((child) => {
        if (child.isMesh) {
            child.material = cAvion;
            avionMesh = child;
        }
    });
    scene.add(avion);


}, 
(xhr) => {console.log(( xhr.loaded / xhr.total * 100 ) + '% loaded' );}, 
(error) => {console.log('An error happened');}
);


// Animation function
function animate() {
    requestAnimationFrame(animate);
    renderer.render(scene, camera);
}

animate();

function resizeObject(scaleFactor) { //ca marche
    avion.scale.set(scaleFactor, scaleFactor, scaleFactor);
}

function changeBlueColorRandomly() {
    var randomBlue = (Math.random());
    cAvion.color.setRGB(randomBlue, randomBlue, randomBlue);
}


window.addEventListener('resize', function () {

    var newWidth = window.innerWidth;
    var newHeight = window.innerHeight;

    camera.aspect = newWidth / newHeight;
    camera.updateProjectionMatrix();

    renderer.setSize(newWidth, newHeight);
});


let envoyer = 0;

setInterval(function() {

    if (envoyer == 1){ //longueur >= 105
        avion.position.x -= 1;
        avion.position.y += 0.3;
        avion.rotation.z = -2.1;
    }

}, 3);




var mailInp = document.getElementById('emailInput');
var objetInp = document.getElementById('subjectInput');
var messageInp = document.getElementById('messageInput');
var formes = document.getElementById('globaleForme');

var longueur;


formes.addEventListener('keydown', function(event) {
    longueur = 100 + mailInp.value.length + objetInp.value.length + messageInp.value.length;
    changeBlueColorRandomly();
    resizeObject(longueur * 0.01);
});



var firstTime = localStorage.getItem('firstTime');

if (firstTime == null) {
  firstTime = 1;
  localStorage.setItem('firstTime', firstTime);
}
