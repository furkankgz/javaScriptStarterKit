//console.log("Merhaba Dünya");

// JS type  safe değildir.
// let dolarDun = 9.2;
// let dolarBugun = 9.33;

//dolarDun = 5 -> yanlış kullanım

// const euroDun = 11;
// console.log(euroDun);

// array
// camelCasing
// PascalCasing
// let konutKredileri = [
//   "Konut Kredisi",
//   "Emlak Konut Kredisi",
//   "Kamu Konut Kredisi",
// ];
// console.log("<ul>");
// for (let i = 0; i < konutKredileri.length; i++) {
//   console.log("<li>" + konutKredileri[i] + "</li>");
// }
// console.log("</ul>");

let showProducts = function (id, ...products) {
  console.log(id);
  console.log(products[0]);
};

//console.log(typeof showProducts);
//showProducts(10,["elma","armut","karpuz"])

let points = [1, 2, 3, 4, 5, 60];
console.log(...points);
console.log(Math.max(...points));
console.log(..."ABC", "D", ..."EFG", "H");

//destructuring
let populations = [10000, 20000, 30000, [40000, 10000]];
let [small, medium, high, [veryhigh, maximum]] = populations;
console.log(small);
console.log(medium);
console.log(high);
console.log(veryhigh);
console.log(maximum);

function someFunction([small1], number) {
  console.log(small1);
}

someFunction(populations);

let category = { id: 1, name: "İçecek" };
console.log(category.id);
console.log(category["name"]);

let { id, name } = category;
console.log(id);
console.log(name);
