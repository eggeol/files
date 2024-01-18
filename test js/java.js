var buy = {
  soap: 30,
  shampow: 20,
  junkFoods: 50,
  cocaine: 5000,
  mariwana: 1000,
}

function needs( money ) {
  return money - (buy.soap + buy.shampow);
}

console.log(needs(100))
