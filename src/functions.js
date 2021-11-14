function addToCart(productName, quantity) {
  console.log("Sepete eklendi: " + productName + " | adet: " + quantity);
}

addToCart("Elma");
addToCart("Yumurta");
addToCart("Karpuz", 5);

let sayHello = () => {
  console.log("Hello World");
};

sayHello();

let sayHello2 = function () {
  console.log("Hello world 2");
};

sayHello2();

function addToCart2(productName, quantity, unitPrice) {}

addToCart2("elma", 5, 10);
addToCart2("armut", 2, 20);
addToCart2("limon", 3, 15);

function addToCart3(product) {
  console.log("Ürün: " + product.productName);
  console.log("Adet: " + product.quantity);
  console.log("Fiyat: " + product.unitPrice);
}

let product1 = { productName: "Elma", unitPrice: 10, quantity: 5 };
addToCart3(product1);

function addToCart4(x) {
  console.log(x);
}
let products = [
  { productName: "Elma", unitPrice: 10, quantity: 5 },
  { productName: "Armut", unitPrice: 10, quantity: 5 },
  { productName: "Karpuz", unitPrice: 10, quantity: 5 },
];
addToCart4(products);

function add(...numbers) {
  let total = 0;
  for (let i = 0; i < numbers.length; i++) {
    total = total + numbers[i];
  }
  console.log(total);
}
add(20, 30);
add(20, 30, 40);
add(20, 30, 40, 50);

let [icAnadolu, marmara, karadeniz, [icanadoluSehirleri]] = [
  { name: "İç Anadolu", population: "20M" },
  { name: "Marmara", population: "30M" },
  { name: "Karadeniz", population: "10M" },
  [
    ["Ankara", "Konya"],
    ["İstanbul", "Bursa"],
    ["Sinop", "Trabzon"],
  ],
];
console.log(icAnadolu);
console.log(marmara);
console.log(icanadoluSehirleri);


let newProductName, newUnitPrice, newQuantity
({ productName: newProductName, unitPrice: newUnitPrice, quantity: newQuantity } = { productName: "Elma", unitPrice: 10, quantity: 5 });
console.log(newProductName);
console.log(newUnitPrice);
console.log(newQuantity);
