//VALIDATION FUNCTIONS

//Name validation

// var nameInput = 'Manuela Gómez' ;
// console.log(nameInput);
// console.log(nameInput.indexOf(' '));

// if (nameInput.length<= 6 || nameInput.indexOf(' ')<=0) {
//     alert('The name should have 6 or more characters and at least one space');
// }

//Email validation

var emailInput = 'alguien@mail.com';
var emailLength = emailInput.length;
console.log(emailInput);

var atExistent = 0;

for (var i=0; i<=emailLength; i++) {
    if (emailInput[i]=='@') {
        atExistent++;
    }
}

var dotCom = emailInput.substring(emailLength-4,emailLength);

console.log(atExistent);
console.log(dotCom);

if ((atExistent==0 || atExistent > 1)||dotCom != '.com') {
    alert('Insert a valid email format: soomebody@smth.com');
}
