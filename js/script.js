'use strict';

var sum = 0

var userName = prompt('What is your name?');
alert(' Welcome to my webpage it is an honor having you here ' + userName);
console.log(' Welcome to my webpage it is an honor having you here' + userName);

//  using switch for Yes / no Qs.
var input0 = prompt('Do you think i am a girl with A BIG dream? ' + userName);
var input0 = input0.toLowerCase()
// decleration the fundream function : this updit is from me Ahmad *_*
function fundream() {
    switch (input0) {
        case 'yes':
        case 'y':
            alert('Correct! i have a lot of dreams  ' + userName);
            console.log(input0);
            sum = sum + 1
            break;
        case 'no':
        case 'n':
            alert(' Wrong answer');
            console.log(input0);
            break;
    }
}
// Invoking fundream function: this updit is from me Ahmad *_*

fundream();

var input1 = prompt('Do you think my age is 23 years old ? ' + userName);
var input1 = input1.toLocaleLowerCase()
// decleration the funage function : this updit is from me Ahmad *_*
function funage() {
    switch (input1) {
        case 'yes':
        case 'y':
            alert('Corecct! I am 23');
            console.log(input1);
            sum = sum + 1
            break;
        case 'no':
        case 'n':
            alert('Incorrect i am 23')
            console.log(input1);
            break;
    }
}
// Invoking funage function: this updit is from me Ahmad *_*

funage();

var input2 = prompt('Did i graduate from university of Jordan? ' + userName);
var input2 = input2.toLocaleLowerCase()
// decleration the fununi function : this updit is from me Ahmad *_*
function fununi(){
switch (input2) {
    case 'yes':
    case 'y':
        alert('Wrong! i graduated from Isra University');
        console.log(input2);
        break;
    case 'no':
    case 'n':
        alert('Correct! i graduated from Isra University');
        console.log(input2);
        sum = sum + 1
        break;
}
}
// Invoking fununi function: this updit is from me Ahmad *_*

fununi();

var input3 = prompt('In your opinion, Do i look Optimistic?  ' + userName);
var input3 = input3.toLocaleLowerCase();

// decleration the funopinion function : this updit is from me Ahmad *_*

function funopinion() {
switch (input3) {
    case 'yes':
    case 'y':
        alert('Correct !');
        console.log(input3);
        sum = sum + 1
        break;
    case 'no':
    case 'n':
        alert('Wrong answer! I am very optimistc');
        console.log(input3);
        break;
}
}
// Invoking funopinion function: this updit is from me Ahmad *_*

funopinion();

var input4 = prompt('Do you think that i have a strong personality? ' + userName);
var input4 = input4.toLocaleLowerCase();

// decleration the funstrong function : this updit is from me Ahmad *_*

function funstrong () {
switch (input4) {
    case 'yes':
    case 'y':
        alert('Correct!, i have a strong personality ' + userName);
        console.log(input4);
        sum = sum + 1
        break;
    case 'no':
    case 'n':
        alert(' Wrong answer ' + userName);
        console.log(input4);
        break;
}
}
// Invoking funstrong function: this updit is from me Ahmad *_*

funstrong();


var input5 = prompt('Do i live in Amman  ' + userName);
var input5 = input5.toLocaleLowerCase();

// decleration the funamman function : this updit is from me Ahmad *_*

function funamman() {
switch (input5) {
    case 'yes':
    case 'y':
        alert('Correct! i do live in Amman  ' + userName);
        console.log(input5);
        sum = sum + 1
        break;
    case 'no':
    case 'n':
        alert('Wrong answer! i live in Amman ' + userName);
        console.log(input5);
        break;
}
}
// Invoking funamman function: this updit is from me Ahmad *_*

funamman();

//  asking to insert numeric input for a guessing game using "for loop"
var numAnswer = prompt(' guess my total grades out of 100 at university ? ');
numAnswer = Number(numAnswer);
console.log(numAnswer);
// decleration the fundream function : this updit is from me Ahmad *_*
function fungrade(numAnswer) {
for (var n = 1; n <= 3; n++) {
    if (numAnswer === 92) {
        alert('Correct!');
        sum = sum + 1
        break;
    } else if (numAnswer > 92) {
        alert('too hight');
        var numAnswer = prompt(' guess my total grades out of 100 at university ? ');
        numAnswer = Number(numAnswer);
    } else {
        alert('too low');
        var numAnswer = prompt(' guess my total grades out of 100 at university ? ');
        numAnswer = Number(numAnswer);
    }
}
}
// Invoking fungrade function: this updit is from me Ahmad *_*

fungrade(numAnswer);

 // asking about a question with many possible answers using array. 

var favPlace = ['france', 'italy', 'spain', 'russia'];
var userinput = prompt(' guess what country do i love the most ?').toLocaleLowerCase();

// decleration the funolace function : this updit is from me Ahmad *_*

function funplace(userinput) {
for (var i = 0; i <= 4; i++) {
    if (userinput === favPlace[0] || userinput === favPlace[1]) {
        alert('You know me well, Correct!');
        console.log(userinput);
        sum = sum + 1
        break;
    } else {
        alert('Wrong answer, try one more time');
        var userinput = prompt(' guess what country do i love the most ?').toLocaleLowerCase();
        console.log(userinput);

    }

}
}
// Invoking funplace function: this updit is from me Ahmad *_*

funplace(userinput);

// showing the correct answers. 

alert(' My favourite countries are :' + favPlace[0] + ', ' + favPlace[1]);

//  using sum to count the total of the correct answers. 

alert('I had fun palying with you ' + userName + ' Your SCORE is  ' + sum + ' out of 8');
console.log(sum);