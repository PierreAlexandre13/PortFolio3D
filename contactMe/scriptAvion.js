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


loader.load('avionPapier.obj', (object) => {

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
    console.log(longueur);
    longueur = 100 + mailInp.value.length + objetInp.value.length + messageInp.value.length;
    changeBlueColorRandomly();
    resizeObject(longueur * 0.01);
});
