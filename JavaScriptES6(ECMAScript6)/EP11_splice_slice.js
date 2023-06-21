//splice & slice
//splice(ตำแหน่งที่จะลบ,จำนวนที่จะลบ)
//slice(ตำแหน่งเริ่มต้น,ตำแหน่งสุกดท้าย-1)

let data = [1, 2, 3, 4, 5];
console.log(data);

data.splice(1, 2, 999); //ลบสมาชิก array ตั้งแต่ index ที่ 1  ไป 3 จำนวน แล้วแทรก 999 เข้าไป
console.log(data);

//อยากดึงข้อมูล ใน array มาใช้  (slice)

let data1 = [1, 2, 3, 4, 5];
let lastdata = data1.slice(1, 3); //ดึงข้อมูลจาก index ที่ 1 ถึงก่อนตำแหน่งที่ 3 (1-2) [2,3]
console.log(data1);
console.log("lastdata = " + lastdata);
