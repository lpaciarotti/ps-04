//VALIDATION FUNCTIONS

//Name validation

// window.onload = function() {
//     var nameInput = document.getElementsByClassName('form-item');
//     nameInput = nameInput[0].value;
// // var nameInput = 'Manuela Gómez' ;
//  //console.log(nameInput);
// // console.log(nameInput.indexOf(' '));
//     if (nameInput.length<= 6 || nameInput.indexOf(' ')<=0) {
//         alert('The name should have 6 or more characters and at least one space');
//         }
// }

//Email validation

// var emailInput = 'alguien@mail.com';
// var emailLength = emailInput.length;
// console.log(emailInput);

// var atExistent = 0;

// for (var i=0; i<=emailLength; i++) {
//     if (emailInput[i]=='@') {
//         atExistent++;
//     }
// }

// var dotCom = emailInput.substring(emailLength-4,emailLength);

// console.log(atExistent);
// console.log(dotCom);

// if ((atExistent==0 || atExistent > 1)||dotCom != '.com') {
//     alert('Insert a valid email format: soomebody@smth.com');
// }

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

