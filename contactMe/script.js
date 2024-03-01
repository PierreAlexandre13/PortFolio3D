
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

    if (adresse === '' || messageEmail === '' || subject === ''){
        document.getElementById('info').style.color = "red";
        if(retrievedValue === 'fr'){
            document.getElementById('info').innerText = 'Veillez à remplir tous les champs';
        }
        else if (retrievedValue === 'en'){
            document.getElementById('info').innerText = 'Please fill out all the forms';
        }
    }
    else if (checkmail(adresse) === false){
        document.getElementById('info').style.color = "red";
        if(retrievedValue === 'fr'){
            document.getElementById('info').innerText = 'adresse email incorrecte';
        }
        else if (retrievedValue === 'en'){
            document.getElementById('info').innerText = 'email adress incorrect';
        }
    }
    else if (parseInt(emailCount) > 3){
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
});


