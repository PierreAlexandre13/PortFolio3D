//import * as THREE from '/node_modules/three/build/three.module.js';
import * as THREE from 'three';
//import { OBJLoader } from '/node_modules/three/examples/jsm/loaders/OBJLoader.js';
import { OBJLoader } from 'three/addons/loaders/OBJLoader.js';
import { MTLLoader } from 'three/addons/loaders/MTLLoader.js';

// Create a scene
const scene = new THREE.Scene();

// Create a camera
const camera = new THREE.PerspectiveCamera(75, window.innerWidth / window.innerHeight, 0.1, 1000);
camera.position.z = 130;

// Create a renderer
const renderer = new THREE.WebGLRenderer();
renderer.setSize(window.innerWidth, window.innerHeight);
document.getElementById('container').appendChild(renderer.domElement);



const greenMaterial = new THREE.MeshLambertMaterial({ color: 0x00FF00 });
const blueMaterial = new THREE.MeshLambertMaterial({ color: 0x006FFF });
const redMaterial = new THREE.MeshLambertMaterial({ color: 0xFF0000 });
const vertTerre = new THREE.MeshLambertMaterial({ color: 0x288747 });
const cTronc = new THREE.MeshLambertMaterial({ color: 0x64361D });

//const cFeuille = new THREE.MeshBasicMaterial({ color: 0x176406 });
const cFeuille = new THREE.MeshPhongMaterial({ color: 0x176406 });

const cDrone = new THREE.MeshLambertMaterial({ color: 0x999999 });
const cTennis = new THREE.MeshLambertMaterial({ color: 0xA11111 });
const cBalle = new THREE.MeshLambertMaterial({ color: 0xE5E543 });
const cCrayon = new THREE.MeshLambertMaterial({ color: 0x323130 });
const cEquerre = new THREE.MeshLambertMaterial({ color: 0x4666D4 });
const cBlueprint = new THREE.MeshLambertMaterial({ color: 0x0800FF });
const cSchema = new THREE.MeshLambertMaterial({ color: 0xCDCCE5 });
const cEnveloppe = new THREE.MeshPhongMaterial({ color: 0xFFFFFF });
const cCheck = new THREE.MeshLambertMaterial({ color: 0x11DA00 });
const cSupport = new THREE.MeshLambertMaterial({ color: 0x3C3737 });
const cBras = new THREE.MeshLambertMaterial({ color: 0x4C4C4C });
const cPince = new THREE.MeshLambertMaterial({ color: 0x716F6F }); 


const sphereGeometry = new THREE.SphereGeometry(2, 32, 32);
const sphereMaterial = new THREE.MeshPhongMaterial({ color: 0xFFFFFF, emissive: 0xFFFFFF});
const etoile = new THREE.Mesh(sphereGeometry, sphereMaterial);
scene.add(etoile);
etoile.position.set(0, 0, -500);

const pivot = new THREE.Group();
scene.add(pivot);
pivot.add(etoile);

let vitessRot = 0.0003

for (let i = 0; i < 200; i++) {
    // Clone the original sphere
    const sphereClone = etoile.clone();

    const randomX = getRandomNumber();
    const randomY = getRandomNumber(); 
    const randomZ = getRandomNumber();

    sphereClone.position.set(randomX, randomY/2, randomZ);

    pivot.add(sphereClone);
}


//light
var ambientLight = new THREE.AmbientLight(0xffffff, 0.8);
scene.add(ambientLight);

var directionalLight = new THREE.DirectionalLight(0xffffff, 1);
directionalLight.position.set(0, 2, 3); //default; light shining from top
directionalLight.target.position.set(0, 0, 0);
scene.add(directionalLight);
scene.add(directionalLight.target);




let sphere;
let drone; 
let tennis, balle; 
let enveloppe; 
let bras, pince; 
let crayon;
let bluepaper, dessin;  
let fleche; //check : lever + hover -> 360 (les 2 : seulement pour la 'fleche') (sur un axe)


const loader = new OBJLoader();


loader.load('myWorldv5.obj', (object) => {
    sphere = object;

    sphere.traverse((child) => {
        if (child.isMesh) {
            if (child.name == 'eau' || child.name == 'eau2' || child.name == 'eau3') {
                child.material = blueMaterial;
            }
            else if (child.name == 'planeteOBJ'){
                child.material = vertTerre;
                child.receiveShadow = true;
            }
            else if (child.name == 'tronc' || child.name == 'tronc (1)' || child.name == 'tronc (1) (1)'){
                child.material = cTronc;
                child.castShadow = true;
            }
            else if (child.name == 'feuille' || child.name == 'feuille (1)' || child.name == 'feuille (1) (1)'){
                child.material = cFeuille;
                child.castShadow = true;
            }
            else if (child.name == 'drone'){
                child.material = cDrone;
                drone = child;
            }
            else if (child.name == 'tennis'){
                child.material = cTennis;
                tennis = child;
            }
            else if (child.name == 'balle'){
                child.material = cBalle;
                balle = child;
            }
            else if (child.name == 'crayon'){
                child.material = cCrayon;
                crayon = child;
            }
            else if (child.name == 'equerre'){
                child.material = cEquerre;
            }
            else if (child.name == 'bluepaper'){
                child.material = cBlueprint;
                bluepaper = child;
            }
            else if (child.name == 'dessin'){
                child.material = cSchema;
                dessin = child;
            }
            else if (child.name == 'enveloppe'){
                child.material = cEnveloppe;
                enveloppe = child;
            }
            else if (child.name == 'fleche'){
                child.material = cCheck;
                fleche = child;
            }
            else if (child.name == 'contour'){
                child.material = cCheck;
                
            }
            else if (child.name == 'pince'){
                child.material = cPince;
                pince = child;
            }
            else if (child.name == 'bras'){
                child.material = cBras;
                bras = child;
            }
            else if (child.name == 'socle'){
                child.material = cSupport;
            }


            else{
                child.material = greenMaterial;
            }
        }
    });

    scene.add(sphere);
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



let isMouseDown = false;
let previousMouseX = 0;
let previousMouseY = 0;
let onMoitieDroite = false;
let onMoitieGauche = false;
let startTime, clickDuration;

let onTennis = false;
let onEnveloppe = false;
let onBlueprint = false;
let onCheck = false;
let onDrone = false;
let onBras = false;


document.addEventListener('mousedown', (event) => {
    isMouseDown = true;
    previousMouseX = event.clientX;
    previousMouseY = event.clientY;
    startTime = new Date().getTime();
});

document.addEventListener('mouseup', () => {
    isMouseDown = false;

    if (startTime) {
        const endTime = new Date().getTime();
        clickDuration = endTime - startTime;
        startTime = null;
    }
});

let compteur = 0;

setInterval(function() {
    sphere.rotation.x += 0.0005;
    sphere.rotation.y += 0.0005; 

    compteur += 0.005;
    if(onEnveloppe == false){
        enveloppe.position.z = Math.abs(Math.sin(compteur)) * 5;
        enveloppe.rotation.z += 0.002;
    }
    if(onEnveloppe){
        enveloppe.position.z = Math.abs(Math.sin(compteur)) * 10;
        enveloppe.rotation.z += 0.006;
    }

    drone.rotation.x += 0.001;
    drone.rotation.z += 0.003;
    drone.rotation.y += 0.0015;


    pivot.rotation.y += vitessRot;
    

    if (onTennis){
        tennis.position.x = -Math.abs(Math.sin(compteur)) * 5;
        tennis.position.y = -Math.abs(Math.sin(compteur)) * 5;
        tennis.position.z = -Math.abs(Math.sin(compteur)) * 5;

        balle.position.z = Math.abs(Math.sin(compteur * 8)) * tennis.position.z;
        balle.position.y = Math.abs(Math.sin(compteur * 8)) * tennis.position.y;
        balle.position.x = Math.abs(Math.sin(compteur * 8)) * tennis.position.x;
    }

    if(onBlueprint == false){
        dessin.position.x = Math.abs(Math.sin(compteur)) * 5;
        bluepaper.position.x = Math.abs(Math.sin(compteur)) * 5;
    }
    if(onBlueprint){
        dessin.position.x = Math.abs(Math.sin(compteur*2)) * 10;
        bluepaper.position.x = Math.abs(Math.sin(compteur*2)) * 10;
    }

    if(onCheck == false){
        fleche.position.y = Math.abs(Math.sin(compteur)) * 5;
        fleche.rotation.y = 0;
    }
    if(onCheck){
        fleche.rotation.y = (Math.sin(compteur)) * 5;
    }

    if(onBras == false){
        bras.rotation.x += 0.004;
    }
    if(onBras){
        bras.rotation.x += 0.02;
    }

    const htmlCompteur = document.getElementById('compte');
    htmlCompteur.textContent = compteurVaraible + "/6";
    
    
    
}, 3);

document.addEventListener('mousemove', (event) => {
    if(BOuvert == false){
        if (isMouseDown) {
            const deltaX = event.clientX - previousMouseX;
            const deltaY = event.clientY - previousMouseY;

            sphere.rotation.x += deltaY * 0.0035;
            sphere.rotation.y += deltaX * 0.0035;

            previousMouseX = event.clientX;
            previousMouseY = event.clientY;

            pivot.rotation.y += vitessRot*10;
        }
    }
});

// Prevent right-click menu on the canvas
renderer.domElement.addEventListener('contextmenu', (event) => {
    event.preventDefault();
});


function onDocumentMouseWheel(event) {
    // Adjust the camera's position along the Z-axis
    camera.position.z += event.deltaY * 0.02;
    if (camera.position.z < 60){
        camera.position.z = 60;
    }
}
// Add a scroll event listener
document.addEventListener('wheel', onDocumentMouseWheel);


const raycaster = new THREE.Raycaster();
const mouse = new THREE.Vector2();


// Add a mousemove event listener to handle hover
document.addEventListener('mousemove', (event) => {
    // Calculate normalized device coordinates
    mouse.x = (event.clientX / window.innerWidth) * 2 - 1;
    mouse.y = -(event.clientY / window.innerHeight) * 2 + 1;

    // Update the picking ray with the camera and mouse position
    raycaster.setFromCamera(mouse, camera);

    // Calculate intersections
    const intersects = raycaster.intersectObject(sphere);
    if (intersects.length > 0) {
        // Change the color of the intersected area to the highlightMaterial
        if(intersects[0].object == tennis || intersects[0].object == balle){
            onTennis = true;
        }
        if(intersects[0].object == enveloppe){
            onEnveloppe = true;
        }
        if(intersects[0].object == bluepaper || intersects[0].object == dessin){
            onBlueprint = true;
        }
        if(intersects[0].object == fleche){
            onCheck = true;
        }
        if(intersects[0].object == drone){
            onDrone = true;
        }
        if(intersects[0].object == bras || intersects[0].object == pince){
            onBras = true;
        }

    }
    else {
        onTennis = false;
        onEnveloppe = false;
        onBlueprint = false;
        onCheck = false;
        onDrone = false;
        onBras = false;
        tennis.position.x = 0;
        tennis.position.y = 0;
        tennis.position.z = 0;
        balle.position.z = 0;
        balle.position.y = 0;
        balle.position.x = 0;
    }

});


var compteurVaraible = localStorage.getItem('compteurVaraible');
if (compteurVaraible == null) {
  compteurVaraible = 0;
  localStorage.setItem('compteurVaraible', compteurVaraible);
}
compteurVaraible = parseInt(compteurVaraible);

var chaineBool = localStorage.getItem('chaineBool');
if (chaineBool == null) {
    chaineBool = '';
    localStorage.setItem('chaineBool', chaineBool);
}



document.addEventListener('click', () => {
    if(BOuvert == false){
        if(onBlueprint && clickDuration < 200){
            enveloppeTransition("./projets/index.html");
            if(nbDansChaine(chaineBool, '1') == false){
                compteurVaraible += 1;
                chaineBool += '1';
            }
        }
        else if(onEnveloppe && clickDuration < 200){
            enveloppeTransition("./contactMe/index.html");
            if(nbDansChaine(chaineBool, '2') == false){
                compteurVaraible += 1;
                chaineBool += '2';
            }
        }
        else if(onCheck && clickDuration < 200){
            enveloppeTransition("./competences/index.html");
            if(nbDansChaine(chaineBool, '3') == false){
                compteurVaraible += 1;
                chaineBool += '3';
            }
        }
        else if(onBras && clickDuration < 200){
            enveloppeTransition("./pro/index.html");
            if(nbDansChaine(chaineBool, '4') == false){
                compteurVaraible += 1;
                chaineBool += '4';
            }
        }
        else if(onTennis && clickDuration < 200){
            openOverlay(2); 
            onBlueprint = false;
            if(nbDansChaine(chaineBool, '5') == false){
                compteurVaraible += 1;
                chaineBool += '5';
            }
        }
        else if(onDrone && clickDuration < 200){
            openOverlay(3); 
            onBlueprint = false;
            if(nbDansChaine(chaineBool, '6') == false){
                compteurVaraible += 1;
                chaineBool += '6';
            }
        }
    }
    localStorage.setItem('compteurVaraible', compteurVaraible);
    localStorage.setItem('chaineBool', chaineBool);
    
});

function enveloppeTransition(lien){

    let compteur = 0;

    const disEnvX = camera.position.x - enveloppe.position.x;
    const disEnvY = camera.position.y - enveloppe.position.y;
    const disEnvZ = camera.position.z - enveloppe.position.z;

    function iteration() {

        camera.position.x += (- disEnvX) / 100;
        camera.position.y += (- disEnvY) / 100;
        camera.position.z += (- disEnvZ) / 100;
        if (camera.position.z < 60){
            camera.position.z = 60;
        }

        compteur++;
    
        if (compteur >= 50) {
          clearInterval(intervalId);
          window.location.href = lien;
        }
    }
    const intervalId = setInterval(iteration, 5);
}

window.addEventListener('resize', function () {
    var newWidth = window.innerWidth;
    var newHeight = window.innerHeight;

    camera.aspect = newWidth / newHeight;
    camera.updateProjectionMatrix();

    renderer.setSize(newWidth, newHeight);
});


function nbDansChaine(chaine, carac) {
    for (var i = 0; i < chaine.length; i++) {
        if (chaine[i] === carac) {
            return true;
        }
    }
    return false;
}



/*OVERLAY */


let BOuvert = false;


function closeOverlay(nb) {
    document.getElementById('overlay'+nb).classList.remove('open');
    document.getElementById('overlay'+nb).classList.add('close');
    BOuvert = false;
}


function openOverlay(nb) {
    document.getElementById('overlay'+nb).classList.add('open');
    document.getElementById('overlay'+nb).classList.remove('close');

    ouvert(nb);
    BOuvert = true;
}

function ouvert(nb){
    var circleElement = document.getElementById('Mycircle'+nb);

    circleElement.addEventListener('click', function() {
        closeOverlay(nb);
    });
}


var firstTime = localStorage.getItem('firstTime');

if (firstTime == null) {
  openOverlay(1);
  //localStorage.removeItem('compteurVaraible');
  compteurVaraible = 0;
  chaineBool = '';
  localStorage.setItem('compteurVaraible', compteurVaraible);
  localStorage.setItem('chaineBool', chaineBool);
}
else{
    localStorage.removeItem('firstTime');
}


/*OVERLAY */

function getRandomNumber() {
    // Generate a random number between -600 and 600
    const randomNumber = Math.floor(Math.random() * 1201) - 600;
  
    // Exclude the range between -200 and 200
    if (randomNumber >= -200 && randomNumber <= 200) {
      // Adjust the number to be outside the excluded range
      return randomNumber < 0 ? randomNumber - 200 : randomNumber + 200;
    }
  
    return randomNumber;
  }

