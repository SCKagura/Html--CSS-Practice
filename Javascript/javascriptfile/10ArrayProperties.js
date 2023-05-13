//array properties
console.warn("Array Properties & Function ") ;
console.warn("หาจำนวนสมาชิกและเรียงลำดับ") ;
let colors =["สีแดง","สีเหลือง","สีขาว","สีฟ้า","สีม่วง"] ;
console.log("colors = ",colors) ;
let count = colors.length ;
console.log("มีสีทั้งหมด =" ,count," สี") ;

let result = colors.sort() ; //เรียงอาเรย์ตามสี จาก ก-ฮ 
console.log("Before sort= ",colors) ;
console.log("After sort = ",result) ;

let fruits =["มะม่วง","แอบเปิล","กล้วย","ทุเรียน"] ;
console.log("fruits = ",fruits) ;
console.log("Before sort= ",fruits) ;
console.log("After sort = ",fruits.sort()) ;
console.warn("reverse sort") ;
console.log("Reverse sort = ",fruits.reverse()) ;


fruits =["มะม่วง","แอบเปิล","กล้วย","ทุเรียน"] ;
console.warn("หาตำแหน่งสมาชิก") ;
console.log(fruits[0]) ; //ตัวแรก
console.log(fruits[2]) ; //ตัวที่ 3
console.log(fruits[fruits.length-1]) ; //ตัวท้าย

console.log("before push = ",colors) ;
colors.push("สีลาบ") ;
console.log("After push = ",colors) ;

let number = [1 , 200 , 4000 ,500 ,6 ] ;
console.log("Numbers = ",number) ;
console.log(number.sort()) ;
console.warn("มันจะไม่เรียง มันจะเรียงตามตัวอักษร") ;


console.warn("การเข้าถึงสมาชิกโดยใช้ For loop ") ;

let number1 =[1,2,3,4,5,6,7,8,9,10] ;
/*console.log(number1[0]) ; 
console.log(number1[1]) ; 
console.log(number1[2]) ; 
console.log(number1[3]) ; 
console.log(number1[4]) ; 
console.log(number1[5]) ; 
console.log(number1[6]) ; 
console.log(number1[7]) ; 
console.log(number1[8]) ; 
console.log(number1[9]) ;  */ 

for(let i = 0 ;i<number1.length ;i++)
{
    console.log("ลำดับที่ ",i+1,"มีค่า = ",number1[i]) ;
}
//forEach
console.warn("การเข้าถึงสมาชิกด้วย ForEach ")

let colors1 =["แดง","ขาว","ฟ้า","เหลือง","ม่วง","น้ำตาล","เขียว","ส้ม","ชมพู","เทา"] ;

colors1.forEach(getcolors) ;
function getcolors(color)
{
   console.log(color) ;
}


