// Code your solutions in this file
const gifts = ["teddy bear", "drone", "doll"];

function wrapGifts(gifts) {
  for (let i = 0; i < gifts.length; i++) {
    console.log(`Wrapped ${gifts[i]} and added a bow!`);
  }

  return gifts;
}


function writeCards(names, event) {
   let cards = [];
    for (let i = 0; i < names.length; i++) {
       cards[i] = `Thank you, ${names[i]}, for the wonderful ${event} gift!`;
    }
      return cards;
  }

function countDown (num) {
while (num >= 0) {
    console.log(num);
    num = num - 1;
} }

wrapGifts(gifts);