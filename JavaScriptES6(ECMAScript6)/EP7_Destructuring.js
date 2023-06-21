//Destrucuring

//แบบปกติ โดยไม่ใช้ Destructuring
const color = ["เขียว", "แดง", "เหลือง"];
const green = color[0];
const red = color[1];
const yellow = color[2];
console.log(green);
console.log(red);
console.log(yellow);
console.log();

//แบบใช้ destructuring

const color1 = ["ฟ้า", "นำเงิน", "คราม"];
let [a, b, c] = color1;

console.log(a);
console.log(b);
console.log(c);

//อยากเข้าถึงบางตัว

let [, , d] = color1;
console.log(d);

const product = {
  productName: "computer",
  price: 4000,
  stock: 10,
};
/*
const productname = product.productName;
const price = product.price;
const stock = product.stock;

console.log(productname);
console.log(price);
console.log(stock);
*/

const { productName: productName, price: price, stock: stock } = product;

console.log(productName);
console.log(price);
console.log(stock);
