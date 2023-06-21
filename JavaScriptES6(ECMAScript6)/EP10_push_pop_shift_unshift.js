//push pop shift unshift

const data = [1, 2, 3];
console.log(data);

data.push(4);
console.log(data);

// data.push([100, 200, 300, 400, 500]);
data.push(...[5, 6, 7, 8, 9]); //เพิ่มสมาชิกเข้าไปใน Array
console.log(data);

data.pop(); //ลบสมาชิกตัวสุดท้ายของ Array
console.log(data);

data.pop();
console.log(data);

data.shift();
console.log(data);

data.unshift(10);
console.log(data);
