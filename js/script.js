'use strict';

var sum = 0 

var userName = prompt('What is your name?');
alert(' Welcome to my webpage it is an honor having you here ' + userName);
// console.log(' Welcome to my webpage it is an honor having you here' + userName);

//  using switch for Yes / no Qs.
var input0 = prompt('Do you think i am a girl with A BIG dream? ' + userName);
var input0 = input0.toLowerCase()
switch (input0) {
    case 'yes':
    case 'y':
        alert('Correct! i have a lot of dreams  '  + userName);
        console.log(input0);
        sum = sum+1
        break;
    case 'no':
    case 'n':
        alert(' Wrong answer');
        console.log(input0);
        break;
}

var input1 = prompt('Do you think my age is 23 years old ? ' + userName);
var input1 = input1.toLocaleLowerCase()
switch (input1) {
    case 'yes':
    case 'y':
        alert('Corecct! I am 23');
        console.log(input1);
        sum = sum+1
        break;
    case 'no':
    case 'n':
        alert('Incorrect i am 23')
        console.log(input1);
        break;
}

var input2 = prompt('Did i graduate from university of Jordan? ' + userName );
var input2 = input2.toLocaleLowerCase()
switch(input2) {
    case 'yes':
    case 'y':
        alert('Wrong! i graduated from Isra University');
        console.log(input2);
        break;
    case 'no':
    case 'n':
        alert('Correct! i graduated from Isra University');
       console.log(input2);
        sum = sum+1
        break;
}

var input3 = prompt('In your opinion, Do i look Optimistic?  '  + userName);
var input3 = input3.toLocaleLowerCase()
switch(input3) {
    case 'yes':
    case 'y':
        alert('Correct !');
      console.log(input3);
        sum = sum+1
        break;
    case 'no':
    case 'n':
        alert('Wrong answer! I am very optimistc' );
        console.log(input3);
        break; 
}

var input4 = prompt('Do you think that i have a strong personality? ' + userName );
var input4 = input4.toLocaleLowerCase()
switch(input4) {
    case 'yes':
    case 'y':
        alert('Correct!, i have a strong personality ' + userName);
        console.log(input4);
        sum = sum+1
        break;
    case 'no':
    case 'n':
        alert(' Wrong answer ' + userName );
        console.log(input4);
        break; 
}


var input5 = prompt('Do i live in Amman  ' + userName );
var input5 = input5.toLocaleLowerCase()
switch(input5) {
    case 'yes':
    case 'y':
        alert('Correct! i do live in Amman  ' + userName);
        console.log(input5);
        sum = sum+1
        break;
    case 'no':
    case 'n':
        alert('Wrong answer! i live in Amman ' + userName);
        console.log(input5);
        break;
}

//  asking to insert numeric input for a guessing game using "for loop"
var numAnswer = prompt(' guess my total grades out of 100 at university ? ');
numAnswer = Number(numAnswer);
console.log(numAnswer);

for(var n = 1; n <=3; n++) {
    if (numAnswer === 92) {
        alert('Correct!');
        sum = sum+1
        break;
    } else if ( numAnswer > 92) {
        alert('too hight');
        var numAnswer = prompt(' guess my total grades out of 100 at university ? ');
            numAnswer = Number(numAnswer);
    } else {
        alert('too low');
        var numAnswer = prompt(' guess my total grades out of 100 at university ? ');
  numAnswer = Number(numAnswer);
    }
}



// asking about a question with many possible answers using array. 

var favPlace = ['france', 'italy', 'spain', 'russia'];
var userinput = prompt(' guess what country do i love the most ?').toLocaleLowerCase();

for(var i= 0; i<=4; i++) {
    if(userinput === favPlace[0] || userinput === favPlace[1]) {
        alert('You know me well, Correct!');
        console.log(userinput);
        sum = sum+1
        break;
    }else{
        alert('Wrong answer, try one more time');
        var userinput = prompt(' guess what country do i love the most ?').toLocaleLowerCase();
        console.log(userinput);

    }

}
// showing the correct answers. 
alert(' My favourite countries are :' + favPlace[0] + ', ' + favPlace[1]); 

//  using sum to count the total of the correct answers. 
alert(  'I had fun palying with you ' + userName + ' Your SCORE is  ' +sum + ' out of 7');
console.log(sum);