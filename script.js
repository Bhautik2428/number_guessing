var noclik = document.getElementById("no_click");
var noofguess = document.getElementById("no_guessed");
var trgur = document.getElementById("rang");
var answer = Math.floor(Math.random()*100)+1;
var no_of_guesses = 0;
var guessed_nums = [];

function play(){
    var userguesss = document.getElementById("guess").value;
    if(userguesss < 1 || userguesss > 100){
        alert("Please enter a number between 1 and 100.");
        document.getElementById("guess").value = "";
      }
      else{
        guessed_nums.push(userguesss);
        no_of_guesses+= 1;

        if(userguesss  < answer){
            noclik.textContent = "Your guess Number is too low";
            noofguess.textContent  = "No of guesses:- " + no_of_guesses;
            trgur.textContent = "Guesses Numbers are:- " + guessed_nums ;
        }
        else if(userguesss > answer){
            noclik.textContent = "Your guess Number is too high";
            noofguess.textContent  = "No of guesses:- " + no_of_guesses;
            trgur.textContent = "Guesses Numbers are:- " + guessed_nums ;
        }
        else if(userguesss == answer){
            noclik.textContent = "Congrats! You have guessed the correct number";
            noofguess.textContent = "The number was:- " + answer;
            trgur.textContent = "You guessed it in "+ no_of_guesses + " guesses.";
            document.getElementById("btn");
        }
    } document.getElementById("guess").value = "";
}
console.log(answer = Math.floor(Math.random()*100)+1)
console.log((userguesss < 1 || userguesss > 100))
console.log(no_of_guesses+= 1)