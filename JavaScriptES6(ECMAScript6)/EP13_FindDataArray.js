//ค้นหาช้อมูลใน Array
//indexof(ข้อมูล) => ผลการค้นหาจะได้ตำแหน่ง index ที่ค้นเจอ ถ้าไม่เจอจะได้  -1
//find(ข้อมูล) =>ผลการค้นหาจะได้ข้อมูลที่ค้นเจอ ถ้าค้นไม่เจอจะได้ undefind
//findIndex(ข้อมูล) =>ผลการค้นหาจะได้ตำแหน่ง Index ที่ค้้นเจอ ถ้าไม่เจอจะได้ -1

let color = ["red", "green", "yellow", "black", "white"];

console.log(color.indexOf("black"));
console.log(color.indexOf("SCK"));
console.log(color.find((Element) => Element === "green"));
console.log(color.find((Element) => Element === "SCK"));
console.log(color.findIndex((Element) => Element === "white"));
console.log(color.findIndex((Element) => Element === "SCK"));
