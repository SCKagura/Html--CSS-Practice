//Resparameter

/*function summation(x,y)
{
    return x+y ;
}

*/
summation = (x, y) => {
  return x + y;
};

summation = (x, y, z) => {
  return x + y + z;
};

console.log(summation(20, 10));
console.log(summation(20, 30, 300));

//javascript ไม่เหมือน  java  จะใส่ฟังก์ชันชื่อซ้ำกันไม่ได้

//Rest parameter

Summation = (...numberArr) => {
  let total = 0;
  for (let number of numberArr) //ความหมายคือ จำนวน array ของ numberArr
    total += number;
  return total;
};

console.log(Summation(500, 100, 3280));
