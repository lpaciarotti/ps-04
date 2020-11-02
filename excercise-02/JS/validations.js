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
        console.log('numQty',numQty);
        console.log('letQty',letQty);
        console.log('othQty',othQty);
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

//Password validation

// var passInput ='abcd1234'
// console.log(passInput);
// var passLength = passInput.length;
// console.log(passLength);

// var numQty = 0;
// var letQty = 0;
// var othQty = -1;

// for (var i=0; i<=passLength; i++) {
//     if (passInput[i]>=0 && passInput[i]<=9) {
//         numQty++;
//     } else if ((passInput[i]>= 'a' && passInput[i]<= 'z')||(passInput[i]>= 'A' && passInput[i]<= 'Z')) {
//         letQty++;
//     } else {
//         othQty++;
//     }
// }

// console.log('numQty',numQty);
// console.log('letQty',letQty);
// console.log('othQty',othQty);
// console.log(typeof(passInput[0]));
// if (numQty+letQty<8||othQty>0){
//     alert('Password should have at least 8 characters and just numbers and leters');
// }

// var rPassInput = 'abcd1234'
// if (rPassInput!=passInput) {
//     alert('The password doesn\'t match');
// }

//Age validation

// var ageInput = 23;
// if (!Number.isInteger(ageInput)||ageInput<18) {
//     alert('Age must be an integer and more or equal to 18');
// }

//Telephone validation

// var telephoneInput='4483235';
// var telephoneLength = telephoneInput.length;
// var wrngChar = 0;
// console.log(telephoneLength);

// for (var i=0;i<=telephoneLength;i++) {
//     if (telephoneInput[i]==' '||telephoneInput[i]=='-'||telephoneInput[i]=='('||telephoneInput[i]==')') {
//         wrngChar++;
//     }
// }

// if (wrngChar>0||telephoneLength<7) {
//     alert('Telephone must have at least 7 characters and not cointain "(" ")" "-" or spaces');
// }

//Adress Validation
// var adressInput = 'Callao 212' ;
// console.log(adressInput);
// console.log(adressInput.indexOf(' '));
//     if (adressInput.length< 5 || adressInput.indexOf(' ')<=0) {
//         alert('Adress must have 5 or more characters and at least one space');
//         }

//City validation

// var cityInput = 'Nn';
// if (cityInput.length<3) {
//     alert('City must have at least 3 characters');
// }

//ZIP Code validation

// var zipInput = 'Nn';
// if (zipInput.length<3) {
//     alert('ZIP code must have at least 3 characters');
// }

//DNI validation

// var dniInput = 'Nn';
// if (dni.length<7||dni.length>8) {
//     alert('DNI must have 7 or 8 characters');
// }

