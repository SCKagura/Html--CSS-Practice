//join concat

//join
const data = [1, 2, 3];
console.log(data);

const result = data.join(); //แปลงชุดข้อความเป็น string โดยไม่กระทบ  array เดิม

console.log(result);
console.log(data.join("^"));

//concat

let data1 = [4, 5, 6];
let data2 = [7, 8, 9];

alldata = data1.concat(data2);
console.log(alldata);
