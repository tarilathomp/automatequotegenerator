const quotes = [
  {
    text: "When you can't find the sunshine, be the sunshine.",
    author: "Tarila Thompson",
  },
  {
    text: "The best way to predict the future is to create it.",
    author: "Peter Drucker",
  },
  {
    text: "You are never too old to set another goal or to dream a new dream.",
    author: "C.S. Lewis",
  },
  {
    text: "You miss 100% of the shots you don't take.",
    author: "Wayne Gretzky",
  },
  {
    text: "The only limit to our realization of tomorrow is our doubts of today.",
    author: "Franklin D. Roosevelt",
  },
  {
    text: "Do what you can, with what you have, where you are.",
    author: "Theodore Roosevelt",
  },

  {
    text: "The best abd most beautiful things in the world cannot be seen or even touched - they must be felt with the heart.",
    author: "helen keller",
  },

  {
    text: "The best preparation for tommorow is doing your best today .",
    author: "H. Jackson Brown Jr.",
  },
  {
    text: "keep your face always towards the sunshine-abd shadows will fall behind you.",
    author: "walt whitman",
  },
  {
    text: "perfection is attainable,but if we chase perfection we can catch excellence.",
    author: "vince lombardi",
  },
  {
    text: "to the mind that is still, the whole universe surrenders.",
    author: "lao tzu",
  },
  {
    text: "believe you can and you're halfway there.",
    author: "theodore roosevelt",
  },
  {
    text: "nothing is impossible, the word itself says 'i'm possible'!",
    author: "audrey hepburn",
  },
  {
    text: "i cant change the direction of the wind, but i can adjust my sails to always reach my destination.",
    author: "jimmy dean",
  },
  {
    text: "it is never too late to be what you might have been.",
    author: "george eliot",
  },
  {
    text: "i hated every minute of training, but i said, 'dont quit. suffer now and live the rest of your life as a champion.",
    author: "muhammad ali",
  },
  {
    text: "try to be a rainbow in someone's cloud.",
    author: "maya angelou",
  },
  {
    text: "start by doing whats necessary; then do whats possible; and suddenly you are doing the impossible.",
    author: "francis of assisi",
  },
  {
    text: "thousands of candles can be lighted from a single candle, and the life of the candle will not be shortened. happiness never decreases by being shared.",
    author: "buddha",
  },
  {
    text: "ah, but a man's reach should exceed his grasp, or what's a heaven for?",
    author: "robert browning",
  },
  {
    text: "it is during our darkest moments that we must focus to see the light.",
    author: "aristotle",
  },
  {
    text: "if a man does not keep pace with his companions, perhaps it is because he hears a different drummer. let him step to the music which he hears, however measured or far away.",
    author: "henry david thoreau",
  },
  {
    text: "we must let go of the life we have planned, so as to accept the one that is waiting for us.",
    author: "joseph campbell",
  },
];

function getRandomQuote() {
  const randomIndex = Math.floor(Math.random() * quotes.length);
  return quotes[randomIndex];
}

function displayNewQuote() {
  const quote = getRandomQuote();
  document.getElementById("quote-text").innerText = quote.text;
  document.getElementById("quote-author").innerText = `- ${quote.author}`;
}

document.getElementById("new-quote").addEventListener("click", displayNewQuote);

// Automatically generate a new quote every 5 minutes (300,000 milliseconds)
setInterval(displayNewQuote, 10000);

// Optionally, display a new quote when the page loads
displayNewQuote();
