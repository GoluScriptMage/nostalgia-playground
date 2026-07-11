"use strict"

import { localQuotes } from "./quotes.js"

const authorName = document.querySelector('.author_name');
const quoteText = document.querySelector(".text")
const newQuoteBtn = document.querySelector(".new_quote");
const twitterBtn = document.querySelector(".twitter-button");

let quotesLength = localQuotes.length;
let randomQuote = [];

const newQuote = function(){
      randomQuote = localQuotes[Math.floor(Math.random() * quotesLength)];
      console.log(randomQuote);
}


const displayQuote = function(){
      newQuote();
      console.log(randomQuote.text.length);
      if(randomQuote.text.length > 60){
            quoteText.classList.add('long_quote');
      }else{
            quoteText.classList.remove('long_quote');
      }
      if(!randomQuote.author){
            authorName.textContent = `Unknown`;
      }else{
            authorName.textContent = randomQuote.author;
      }
      quoteText.textContent = randomQuote.text;
}

const twitterTweet = function(){
      const twitterURL = `https://twitter.com/intent/tweet?text=${quoteText.textContent} - ${authorName.textContent}`;
      window.open(twitterURL, "_blank");
}

newQuoteBtn.addEventListener("click", displayQuote);
window.addEventListener("load", displayQuote);
twitterBtn.addEventListener("click", twitterTweet)