//Array Reduce

let data = [1, 2, 3, 4];
console.log(data);

let mapdata = data.map((e) => 100);
console.log(mapdata);

let filter = data.filter((e) => e > 2);
console.log(filter);

//พวกนี้ส่งข้อมูลไป จะกลับมาด้วยชุดอาเรย์

//reduce
//array.reduce((ค่าที่ถูกประมวลผล,e) => {},ค่าเริ่มต้น)  //total = 0

let result = data.reduce((value, e) => {
  let total = e + value;
  return total;
}, 0);

console.log(result);
//value = 0

//total = 0 + 1 =1
//total = 1+2 =3
//total =3+3 =6
//total =6+4 =1

let cart = [
  { name: "bag", price: 500 },
  { name: "book", price: 900 },
  { name: "กล้องถ่ายรูป", price: 5000 },
];

let summation = cart.reduce((value, e) => {
  let total = e.price + value;
  return total;
}, 0);
console.log(summation);

// จบ java ECMAS6 !!
