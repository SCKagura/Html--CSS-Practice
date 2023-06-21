//Loop array
//for Loop ,for each ,for of

const data = [1, 2, 3, 4, 5];
/*console.log(data[0]);
console.log(data[1]);
console.log(data[2]);
console.log(data[3]);
console.log(data[4]); */

for (let i = 0; i < data.length; i++) {
  //if (data[i] > 2) break;
  console.log("ลำดับที่ " + (i + 1) + " มีค่า : " + data[i]);
}
console.log();
//for loop สามารถ break ได้

let sum = 0;
data.forEach((element) => {
  // if(element>10) break ;
  if (element > 3) console.log("Hello");
  sum += element;
  console.log(element);
});
console.log("ผลรวม = " + sum);
console.log();
//ไม่สามารถเขียน break,continue ได้
for (let x of data) {
  //   if (x >= 3) break;
  console.log(`สมาชิก Array data = ${x}`);
}
//for of สามารถ break,continue ได้
