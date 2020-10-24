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
        console.log(team.toUpperCase());
    //b
        var adjective = 'Impressive';
        var newAdjective = adjective.substring(0,5);
        
    //c
        var adjectiveC = 'Environmental';
        var newAdjectiveC = adjectiveC.substring(10,13);
    //d
        var teamD = 'anderlecht'
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
        
    