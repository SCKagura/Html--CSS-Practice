age = 15 ;
let result = age; //true/false 
console.warn("if แบบ 1 เงื่อนไข"); //แบบ 1 เงื่อนไข 
if(result>=15 )
{
    console.log("ฉันเป็นนาย นางสาวแล้ว");
}
console.warn("if แบบ 2 เงื่อนไข"); // แบบ 2 เงื่อนไข
let balance = 500 ;
let withdraw = 700 ;
if(withdraw <= balance)
{
    console.log("ดำเนินการถอนเงิน = ",withdraw) ;
    balance-=withdraw ;
    console.log("ยอดเงินคงเหลือ =",balance) ; 
}else
{
    console.log("ยอดเงินของคุณไม่เพียงพอ") ;
}
console.warn("if แบบหลายงื่อนไข"); // แบบหลายเงื่อนไข
let score = 80 ;
if(score >= 80 )
{
    console.log("grade = A ") ;
}
if(score >= 75 )
{
    console.log("grade = B+ ") ;
}
if(score >= 70 )
{
    console.log("grade = B ") ;
}
if(score >= 65 )
{
    console.log("grade = C+ ") ;
}
//ทำแบบนี้จะออกหมด

console.warn("การใช้ if...else if ") ;
score = 80 ;
if(score >= 80 )
{
    console.log("grade = A ") ;
}
else if(score >= 75 )
{
    console.log("grade = B+ ") ;
}
else if(score >= 70 )
{
    console.log("grade = B ") ;
}
else if(score >= 65 )
{
    console.log("grade = C+ ") ;
}
//การใช้ ternary operator 
console.warn("การใช้ ternary operator (if else แบบลดรูป)") ;
score = 49 ;
score<50 ? console.log("คุณแตก F ") : console.log("คุณรอด F") ; 
//การใช้ if ซ้อน if 
console.warn("การใช้ if ซ้อน if" ) ;
age = 12 ;
if(age<=15)
{
    if(age == 15 )
    {
        console.log("ม.3");
    }else if(age == 14)
    {
        console.log("ม.2");
    }else if(age == 13)
    {
        console.log("ม.1") ;
    }
    else
    {
        console.log("คุณเป็นเด็กประถม") ;

    }

}
console.warn("Switch case") ;
let SCK = 102 ;

switch(SCK) 
{
case 1: console.log("มกราคม");  break;
case 2: console.log("กุมภาพันธ์"); break ;
case 3: console.log("มีนาคม"); break ;
case 4: console.log("เมษายน"); break ;
case 5: console.log("พฤษภาคม") ; break ;
case 6: console.log("มิถุนายน") ; break ;
case 7: console.log("กรกฏาคม") ; break ;
case 8: console.log("สิงหาคม") ; break ;
case 9: console.log("กันยายน") ; break ;
case 10: console.log("ตุลาคม") ; break ;
case 11: console.log("พฤศจิกายนต์") ; break ;
case 12: console.log("ธันวาคม") ; break ;
default:console.log("เดือนอิหยังวะ") ;
}


