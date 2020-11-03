//VALIDATION FUNCTIONS

window.onload = function() {
    var form = document.querySelector('form');
    var submit = document.getElementsByClassName('submit-btn');
    var para = document.querySelector('p');

    //Name validation
    var nameInput = document.getElementById('name-item'); 
    var message = document.getElementById('message');
    nameInput.onblur = function(e) {
        if (nameInput.value.length<= 6 || nameInput.value.indexOf(' ')<=0){
            e.preventDefault();
            message.textContent = 'The name must have at least 6 characters and one space';
        }
    }
    nameInput.onfocus = function(e) {
        message.textContent=' ';
    }
    

    //Email validation
    var emailInput = document.getElementById('email-item');
    var emailMessage = document.getElementById('email-message');
    emailInput.onblur = function(e) {
        var emailLength = emailInput.value.length;
        var atExistent = 0;
        for (var i=0; i<=emailLength; i++) {
            if (emailInput.value[i]=='@') {
                atExistent++;
            }
        }
        var dotCom = emailInput.value.substring(emailLength-4,emailLength);

        if ((atExistent==0 || atExistent > 1)||dotCom != '.com') {
            emailMessage.textContent = 'Insert a valid email format: soomebody@smth.com';
        }
    }
    emailInput.onfocus = function(e) {
        emailMessage.textContent=' ';
    }

    //Password validation
    var passInput = document.getElementById('pass-item');
    var passMessage = document.getElementById('pass-message');
    var numQty = 0;
    var letQty = 0;
    var othQty = -1;
    passInput.onblur = function(e) {
        var passLength = passInput.value.length;
        for (var i=0; i<=passLength; i++) {
            if (passInput.value[i]>=0 && passInput.value[i]<=9) {
                numQty++;
            } else if ((passInput.value[i]>= 'a' && passInput.value[i]<= 'z')||(passInput.value[i]>= 'A' && passInput.value[i]<= 'Z')) {
                letQty++;
            } else {
                othQty++;
            }
        }
        if (numQty==0||letQty==0||numQty+letQty<8||othQty>0){
            passMessage.textContent = 'Password must have at least 8 characters and just numbers and leters';
        }
    }
    passInput.onfocus = function(e) {
        passMessage.textContent=' ';
    }

    //Repeat password validation
        var rPassInput = document.getElementById('rpass-item');
        var rpassMessage = document.getElementById('rpass-message');
    rPassInput.onblur = function(e) {
        if (rPassInput.value!=passInput.value) {
            rpassMessage.textContent = 'The password doesn\'t match';
        }
    }
    rPassInput.onfocus = function(e) {
        rpassMessage.textContent =' ';
    }

    //Age validation
    var ageInput = document.getElementById('age-item');
    var ageMessage = document.getElementById('age-message');
    ageInput.onblur = function(e) {
        ageNumber = parseFloat(ageInput.value);
        if (!(Number.isInteger(ageNumber))||ageNumber<18) {
        ageMessage.textContent = 'Age must be an integer and more or equal to 18'; 
       }
    }
    ageInput.onfocus = function(e) {
        ageMessage.textContent = ' ';
    }

    
    //Telephone validation

    var telephoneInput = document.getElementById('telephone-item');
    var wrngChar = 0;
    var telMessage = document.getElementById('tel-message');
    telephoneInput.onblur = function(e) {
        var telephoneLength = telephoneInput.value.length;
        console.log(telephoneLength);

        for (var i=0;i<=telephoneLength;i++) {
            if (telephoneInput.value[i]==' '||telephoneInput.value[i]=='-'||telephoneInput.value[i]=='('||telephoneInput.value[i]==')') {
                wrngChar++;
            }
        }

        if (wrngChar>0||telephoneLength<7) {
            telMessage.textContent = 'Telephone must have at least 7 characters and not cointain "(" ")" "-" or spaces';
        }
    }
    telephoneInput.onfocus = function(e) {
        telMessage.textContent = ' ';
    }

    //Adress Validation
    var adressInput = document.getElementById('adress-item');
    var adressMessage = document.getElementById('adress-message');
    adressInput.onblur = function(e) {
        if (adressInput.value.length< 5 || adressInput.value.indexOf(' ')<=0) {
            adressMessage.textContent = 'Adress must have 5 or more characters and at least one space';
            }    
    }
    adressInput.onfocus = function(e) {
        adressMessage.textContent = ' ';
    }

    //City validation
    var cityInput = document.getElementById('city-item');
    var cityMessage = document.getElementById('city-message');
    cityInput.onblur = function(e) {
        if (cityInput.value.length<3) {
            cityMessage.textContent = 'City must have at least 3 characters';
        }
    }
    cityInput.onfocus = function(e) {
        cityMessage.textContent = ' ';
    }

    //ZIP Code validation
    var zipInput = document.getElementById('zip-item');
    var zipMessage = document.getElementById('zip-message');
    zipInput.onblur = function(e) {
        if (zipInput.value.length<3) {
            zipMessage.textContent = 'ZIP code must have at least 3 characters';
        }
    }
    zipInput.onfocus = function(e) {
        zipMessage.textContent = ' ';
    }
    //DNI validation
    var dniInput = document.getElementById('dni-item');
    var dniMessage = document.getElementById('dni-message');
    dniInput.onblur = function(e) {
        if (dniInput.value.length<7||dniInput.value.length>8) {
            dniMessage.textContent = 'DNI must have 7 or 8 characters';
        }
    }
    dniInput.onfocus = function(e) {
        dniMessage.textContent = ' ';
    }
    

    // form.onsubmit = function(e) {
    //     if (nameInput.value.length<= 6 || nameInput.value.indexOf(' ')<=0){
    //         e.preventDefault();
    //         alert('The name should have 6 or more characters and at least one space');
    //     }
    //     if ((atExistent==0 || atExistent > 1)||dotCom != '.com') {
    //         emailInput.insertAdjacentHTML('afterend','Insert a valid email format: soomebody@smth.com');
    //     }
    // }
}











