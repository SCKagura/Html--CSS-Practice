//Block Scope

//การเขียนแบบเดิม

var x = 10; //ปัจจุบันเลิกใช้ไปแล้วเพราะมันทำงานทะลุขอบเขตพื้นที่ (global variable)
if (x === 10) {
  var y = 500;
  console.log("y = " + y);
}
console.log("y global = " + y);

if (x === 100) {
  var z = 500;
}
console.log("z = " + z);

//นี้เป็นปัญหาการใช้ var เพราะตัวแปรจะเป็น global variable
let w = 30;
if (x === 10) {
  let w = 100;
  console.log("w = " + w);
}
console.log("w = " + w); //ทำไม่ได้เนื่องจาก w ใช้ let เป็น local variable

const a = 50;
console.log("a = " + a);
// a = 100;
// console.log(a);
