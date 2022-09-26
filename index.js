const gifts = ["teddy bear", "drone", "doll"];

function wrapGifts(x) {
  for (let i = 0; i < x.length; i++) {
    console.log(`Wrapped ${x[i]} and added a bow!`);
    
  }

  return x;
  }

wrapGifts(gifts);

const friends =["Isaac", "Antonio", "not Nevi"];
var happysad = ";-;";

function writeCards(names, event) {
   const cards = [];
    for (let i = 0; i < names.length; i++) {
        cards[i] = (`Thank you, ${names[i]}, for the wonderful ${event} gift!`);
    }
   return cards;
}

writeCards(friends, happysad);




function countDown(pos) {
    while (pos >= 0 ) {
        console.log(pos--);
    }
}

