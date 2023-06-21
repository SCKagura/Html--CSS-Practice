//Spread Operator

const Arr = [100, 200, 300];
const data = [10, 20, Arr];

console.log(data);
console.log(data.length);

//สมาชิกที่เข้าเพิ่มมา มันเป็นสมาชิกของกลุ่มอีกทีนึง จากที่ควรมีสมาชิก 5 ตัว กลายเป็นแค่มี 3 ตัว

const Arr2 = [100, 200, 300];
const data2 = [10, 20, ...Arr2]; //ใช้ ... เพื่อเพิ่มอาเรย์แบบเอาสมาชิกในอาเรย์มารวมกัน
console.log(data2);
console.log(data2.length);

const colors = ["สีแดง", "สีเขียว", "สีน้ำเงิน"];
const Mix = ["สีแดง", "สีฟ้า"];

Mix.push(...colors);

console.log(Mix);
