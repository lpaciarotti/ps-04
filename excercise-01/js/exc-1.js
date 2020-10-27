//Javascript excercises - PS-04

//Excercise 1
    //a
        var a = 3;
        var b = 5;
        var c = a+b;
    //b
        var name = 'Lautaro';
        var lastName = 'Paciarotti';
        var idPerson = name + lastName;
     //c
        var country = 'China';
        var city = 'Wuhan';
        var locPlace = country.length+city.length;
        
//Excercise 2
    //a
        var team = 'Manchester';
        team = team.toUpperCase();
    //b
        var adjective = 'Impressive';
        var newAdjective = adjective.substring(0,5);
    //c
        var adjectiveC = 'Environmental';
        var newAdjectiveC = adjectiveC.substring((adjectiveC.length-3),(adjectiveC.length));
        console.log(newAdjectiveC);
    //d
        /*var teamD = 'anderlecht'
        var firstLetter = teamD.substring(0,1);
        firstLetter = firstLetter.toUpperCase();
        var restLetters = teamD.substring(1,10);
        var teamDUpCase = firstLetter+restLetters;
    //e 
        var teamUK ='FC Manchester United';
        var blankSpace = teamUK.indexOf(' ');
    //f
        var uDegree = 'mechanical engineering';
        var wSpace = uDegree.indexOf(' ');
        var firstLetter1 = uDegree.substring(0,1);
        firstLetter1 = firstLetter1.toUpperCase();
        var firstLetter2 = uDegree.substring(wSpace+1,wSpace+2);
        firstLetter2 = firstLetter2.toUpperCase();
        var restLetters1 = uDegree.substring(1,wSpace);
        var lastL = uDegree.length;
        var restLetters2 = uDegree.substring(wSpace+2,lastL);
        var uDegreeCapital = firstLetter1+restLetters1+' '+firstLetter2+restLetters2;
        console.log(uDegreeCapital);

//Excercise 3
    //a
        var months = ["Enero", "Febrero", "Marzo", "Abril", "Mayo", "Junio", "Julio", "Agosto", "Septiembre", "Octubre", "Noviembre", "Diciembre"];
        console.log(months[4]);
        console.log(months[10]);
    //b
        monts = months.sort();
        console.log(months);
    //c
        months.unshift('Start');
        months.push('End');
    //d
        months.shift();
        months.pop();
    //e
        months = months.reverse();
        console.log(months);
    //f
        console.log(months.join('-'));
    //g
        var months = ["Enero", "Febrero", "Marzo", "Abril", "Mayo", "Junio", "Julio", "Agosto", "Septiembre", "Octubre", "Noviembre", "Diciembre"];
        var monthsCopy = months.slice(4,11);
//Excercise 4
    //a
        /*if (Math.random()>=5){
                alert("Greater than 5");
            }     
                alert("Lower than 0,5");
    //b
        var age = Math.random()*100;
        console.log(age);
        if (age<2){
            alert("Bebe");
        } else if (age<=12) {
            alert("Nino");
        } else if (age<=19) {
            alert("Adolecente");
        } else if (age<=30) {
            alert("Joven");
        } else if (age<=60) {
            alert("Adulto");
        } else if (age<=75) {
            alert("Adulto mayor")
        } else {
            alert("Anciano");
        }*/
//Excercise 5
    //a
        var wordList = ['this','is','an','automatic','alert'];
        for (var i =0; i<5; i++){
            //alert(wordList[i]);
        }
    //b
        var wordList = ['this','is','an','automatic','alert'];
        for (var i =0; i<5; i++){
            var lastL = wordList[i].length; 
            var firstLetter = wordList[i].substring(0,1);
            firstLetter = firstLetter.toUpperCase();
            var restLetters = wordList[i].substring(1,lastL);
            //alert(firstLetter+restLetters);
        }
    //c
        var sentence = ' ';
        for (var i =0; i<5; i++){
            sentence= sentence+' '+wordList[i];
        }
        //alert(sentence);
    //d
        var numberList = [];
        for (var i=0; i<10; i++){
            numberList[i]=i;
        }
        console.log(numberList);
//Excercise 6
    //a
        /*function suma(a,b) {
            return a+b;
        }
        c = suma(23916,12772);
        console.log(c);*/
    //b
        function suma(a,b) {
            if (typeof a!='number'||typeof b!='number'){
                alert('One or more parameters are not a number');
                return Number.NaN;
            } else {
            return a+b;
            }
        }
        d = suma(23916,'12772');
        console.log(d);
    //c
        function validateInteger (j) {
            if (Number.isInteger(j)) {
                return 'True';
            }
            return 'False'
        }
    //d 
        /*function suma(a,b) {
            if (typeof a!='number'||typeof b!='number'){
                alert('One or more parameters are not a number');
                return Number.NaN;
                } else if (validateInteger(a)!='True'&& validateInteger(b)!='True') {
                    alert('Both numbers are not integers');
                    return [Math.round(a),Math.round(b)];
                } else if (validateInteger(a)!='True') {
                    alert('Number a is not an integer');
                    return Math.round(a);
                } else if (validateInteger(b)!='True') {
                    alert('Number b is not an integer');
                    return Math.round(b);
                } else {
            return a+b;
            }
        }
        console.log(suma(7,4.567));*/
    //e
        function validateNumber(p,q){
            if (typeof p!='number'||typeof q!='number'){
                alert('One or more parameters are not a number');
                return 'No number';
            } else {
                return 'Both numbers';
            }
        }
        function suma(a,b) {
            var validation = validateNumber(a,b);
            if (validation == 'No number') {
                return Number.NaN;
            } else {
                return a+b;
            }
            }
        dd = suma('23916',12772);
        console.log(dd);