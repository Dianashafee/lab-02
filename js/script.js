'use strict';

var sum = 0 

var userName = prompt('What is your name?');
alert(' Welcome to my webpage it is an honor having you here ' + userName);
// console.log(' Welcome to my webpage it is an honor having you here' + userName);


var input0 = prompt('Do you think i am a girl with A BIG dream? ' + userName);
var input0 = input0.toLowerCase()
switch (input0) {
    case 'yes':
    case 'y':
        alert('Correct! i have a lot of dreams  '  + userName);
        // console.log( 'Correct! i have a lot of dreams  ' + userName);
        sum = sum+1
        break;
    case 'no':
    case 'n':
        alert(' Wrong answer');
        // close.apply(' Wrong answer');
        break
}

var input1 = prompt('Do you think my age is 23 years old ? ' + userName);
var input1 = input1.toLocaleLowerCase()
switch (input1) {
    case 'yes':
    case 'y':
        alert('Corecct! I am 23');
        // console.log('Corecct! I am 23')
        sum = sum+1
        break;
    case 'no':
    case 'n':
        alert('Incorrect i am 23')
        // console.log('Incorrect i am 23')
        break
}

var input2 = prompt('Did i graduate from university of Jordan? ' + userName );
var input2 = input2.toLocaleLowerCase()
switch(input2) {
    case 'yes':
    case 'y':
        alert('Wrong! i graduated from Isra University');
        // console.log('Wrong! i graduated from Isra University')
        break;
    case 'no':
    case 'n':
        alert('Correct! i graduated from Isra University');
        // console.log('Correct! i graduated from Isra University');
        sum = sum+1
        break;
}

var input3 = prompt('In your opinion, Do i look Optimistic?  '  + userName);
var input3 = input3.toLocaleLowerCase()
switch(input3) {
    case 'yes':
    case 'y':
        alert('Correct !');
        // console.log('Correct !');
        sum = sum+1
        break;
    case 'no':
    case 'n':
        alert('Wrong answer! I am very optimistc' );
        // console.log( 'Wrong answer! I am very optimistc')
        break; 
}

var input4 = prompt('Do you think that i have a strong personality? ' + userName );
var input4 = input4.toLocaleLowerCase()
switch(input4) {
    case 'yes':
    case 'y':
        alert('Correct!, i have a strong personality ' + userName);
        // console.log('Correct!, i have a strong personality ' + userName)
        sum = sum+1
        break;
    case 'no':
    case 'n':
        alert(' Wrong answer ' + userName );
        // console.log(' then why you are here, hahahaha ' + userName)
        break 
}

var input5 = prompt('Do i live in Amman  ' + userName );
var input5 = input5.toLocaleLowerCase()
switch(input5) {
    case 'yes':
    case 'y':
        alert('Correct! i do live in Amman  ' + userName);
        // console.log('Correct! i do live in Amman  ' + userName);
        sum = sum+1
        break;
    case 'no':
    case 'n':
        alert('Wrong answer! i live in Amman ' + userName);
        // console.log('Wrong answer! i live in Amman '+ userName)
        break;
}

var numAnswer = prompt('can you guess my total grades out of 100 at university ? ');
numAnswer = Number(numAnswer);
console.log(numAnswer);

for(var n = 1; n <=3; n++) {
    if (numAnswer === 92) {
        alert('Correct!');
        sum = sum+1
        break;
    } else if ( numAnswer > 92) {
        alert('too hight');
        var numAnswer = prompt('can you guess my total grades out of 100 at university ? ');
            numAnswer = Number(numAnswer);
    } else {
        alert('too low');
        var numAnswer = prompt('can you guess my total grades out of 100 at university ? ');
  numAnswer = Number(numAnswer);
    }
}





var favPlace = ['france', 'italy', 'spain', 'russia'];
var userinput = prompt('Can you guess where i wish to travel ?').toLocaleLowerCase();

for(var i= 0; i<=4; i++) {
    if(userinput === favPlace[0] || userinput === favPlace[1]) {
        alert('You know me well, Correct!');
        sum = sum+1
        break;
    }else{
        alert('Wrong answer, try one more time');
        var userinput = prompt('Can you guess where i wish to travel ?').toLocaleLowerCase();

    }

}
alert('the possible answer are:' + favPlace[0] + ', ' + favPlace[1]); 

alert(  'I had fun palying with you ' + userName + ' You SCORE is  ' +sum + 'out of 7');
console.log(sum);