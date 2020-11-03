//VALIDATION FUNCTIONS

window.onload = function() {
    var form = document.querySelector('form');
    var submit = document.getElementsByClassName('submit-btn');
    var para = document.querySelector('p');

    //Name validation
    var nameInput = document.getElementById('name-item'); 
    nameInput.onblur = function(e) {
        if (nameInput.value.length<= 6 || nameInput.value.indexOf(' ')<=0){
            e.preventDefault();
            nameInput.insertAdjacentHTML('afterend','The name should have 6 or more characters and at least one space');
        }
    }
    
    //Email validation
    var emailInput = document.getElementById('email-item');
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
            emailInput.insertAdjacentHTML('afterend','Insert a valid email format: soomebody@smth.com');
        }
    }

    //Password validation
    var passInput = document.getElementById('pass-item');
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
            passInput.insertAdjacentHTML('afterend','Password must have at least 8 characters and just numbers and leters');
        }
    }

    //Repeat password validation
        var rPassInput = document.getElementById('rpass-item');
    rPassInput.onblur = function(e) {
        if (rPassInput.value!=passInput.value) {
            rPassInput.insertAdjacentHTML('afterend','The password doesn\'t match');
        }
    }

    //Age validation
    var ageInput = document.getElementById('age-item');
    ageInput.onblur = function(e) {
        ageNumber = parseFloat(ageInput.value);
        if (!(Number.isInteger(ageNumber))||ageNumber<18) {
        ageInput.insertAdjacentText('afterend','Age must be an integer and more or equal to 18'); 
       }
    }

    
    //Telephone validation

    var telephoneInput = document.getElementById('telephone-item');
    var wrngChar = 0;
    telephoneInput.onblur = function(e) {
        var telephoneLength = telephoneInput.value.length;
        console.log(telephoneLength);

        for (var i=0;i<=telephoneLength;i++) {
            if (telephoneInput.value[i]==' '||telephoneInput.value[i]=='-'||telephoneInput.value[i]=='('||telephoneInput.value[i]==')') {
                wrngChar++;
            }
        }

        if (wrngChar>0||telephoneLength<7) {
            telephoneInput.insertAdjacentText('afterend','Telephone must have at least 7 characters and not cointain "(" ")" "-" or spaces');
        }
    }
    //Adress Validation
    var adressInput = document.getElementById('adress-item');
    adressInput.onblur = function(e) {
        if (adressInput.value.length< 5 || adressInput.value.indexOf(' ')<=0) {
            adressInput.insertAdjacentText('afterend','Adress must have 5 or more characters and at least one space');
            }    
    }

    //City validation
    var cityInput = document.getElementById('city-item');
    cityInput.onblur = function(e) {
        if (cityInput.value.length<3) {
            cityInput.insertAdjacentText('afterend','City must have at least 3 characters');
        }
    }

    //ZIP Code validation
    var zipInput = document.getElementById('zip-item');
    zipInput.onblur = function(e) {
        if (zipInput.value.length<3) {
            zipInput.insertAdjacentText('afterend','ZIP code must have at least 3 characters');
        }
    }

    //DNI validation
    var dniInput = document.getElementById('dni-item');
    dniInput.onblur = function(e) {
        if (dniInput.value.length<7||dniInput.value.length>8) {
            dniInput.insertAdjacentText('afterend','DNI must have 7 or 8 characters');
        }
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











