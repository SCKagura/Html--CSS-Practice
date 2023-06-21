//Array Map

let num = [1, 2, 3, 4];
console.log("num = " + num);
let result = num.map((i) => {
  let a = i * 2; //น้ำสมาชิกทุกตัวใน Array มาคูณด้วย 2
  return a;
});
//let result = num.map(e =>e*)  ;
console.log("result = " + result);
// [1,2,3,4]
// [1*2,2*2,3*2,4*2]
//[2,4,6,8]

let data = [
  "ฝนตก",
  "แดดร้อน",
  "ฝนฟ้าคะนอง",
  "อากาศดี",
  "มีหมอก",
  "มีเมฆหนา",
  "ฝนตก",
  "แดดร้อน",
];

let result1 = data.map((e, i) => {
  return `วันที่ ${i + 1} สภาพอากาศ = ${e}`;
});
console.log(result1);

let data1 = [
  { day: "29/12/2546", weather: "สดใส", temp: 20 },
  { day: "30/12/2546", weather: "ฝนตก", temp: 15 },
  { day: "31/12/2546", weather: "ปลอดโปร่ง", temp: 37 },
];
console.log(data1);

let result2 = data1.map((r) => {
  return r.weather;
});
console.log(result2);
