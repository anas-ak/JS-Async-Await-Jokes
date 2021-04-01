"use strict";

//Fetch a random joke
async function fetchQuote() {
    const rsp = await fetch("https://api.icndb.com/jokes/random"),
    data = await rsp.json();
    return data.value.joke;
}

async function sayJoke()
{
    try {
        let result = await fetchQuote();

        setTimeout( function(){
            document.body.appendChild(document.createElement('p'));
            document.querySelector("body p:last-child").id = "jstext";
            document.querySelector("#jstext").innerHTML = `Joke: ${result}`;
        }, 1000);


    } catch (err) {
        console.error(err);
    }
}
sayJoke();