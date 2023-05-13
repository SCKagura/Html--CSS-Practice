//แปลง Array เป็น string
console.warn("แปลง Array เป็น String")
let colors =["แดง","ขาว","ฟ้า","เหลือง","ม่วง","น้ำตาล","เขียว","ส้ม","ชมพู","เทา"] ;
console.log(colors.toString()) ;
let x = colors.toString() ;
console.log(x) ;
console.log(typeof(x)) ;
x = colors.join("||") ;
console.log(x) ;

console.log("Before pop " ,colors) ;
colors.pop() ;
console.log("After pop " ,colors) ;
//เทาหาย
colors.pop() ;
console.log("After pop " ,colors) ;
//ชมพูหาย

//การรวม Array
console.warn("การรวม Array") ;
let a =["ผักชี","ผักคะน้า","ผักกาด"] ;
let b =["กล้วย","ส้ม" ] ;
console.log(a) ;
let c=["จาน","ชาม"]
a=a.concat(b,c) ;
console.log(a) ;
console.warn("เรียงลำดับเลขใน Array") ;
console.log("เรียงจากน้อยไปมาก") ;
let points =[351,859,2,54,-84,-895,310] ;
console.log("Before sort = ",points) ;
points.sort(function(a,b)
{
    return a-b ;
}) ;
console.log("After sort = ",points) ;
console.log("เรียงจากมากไปน้อย") ;

points =[351,859,2,54,-84,-895,310] ;
console.log("Before sort = ",points) ;
points.sort(function(a,b)
{
    return b-a ;
}) ;
console.log("After sort = ",points) ;