//function ที่ไม่มีการรับและส่งค่า
console.warn("function ที่ไม่มีการรับและส่งค่า") ;


function A()
{
    console.log("Hello World") ;
}
A() ;
A() ;

function clicknoti() 
{
    alert("กดทำไม") ;
}
function displayname() 
{
    document.write("SCKagura") ;

}
//function ที่มีการรับค้่า
console.warn("ฟังก์ชั่นที่มีการรับค่า") ;
function plusnumber(x,y)
{
    console.log("เลขแรก = ", x ) ;
    console.log("เลขที่ 2 = ", y ) ;
    console.log("ผลรวม = ",x+y) ;
}
plusnumber(8,5) ;
function fullname(fname,lname,adress) 
{
console.log("ชื่อจริง = ",fname, "นามสกุล = " , lname,"ที่อยู่ = ",adress) ;
}

fullname("บอส","ลาบ") ; 
fullname("บอส","เทพซ่า","บ้าน")
//function ที่มีการ return ค่า
console.warn("function ที่มีการ return ค่า") ;

function getComputerIP()
{
    return "2.2.2.2" ;
}
let myip = getComputerIP() ;
console.log("ip = ",myip) ;
// function ที่มีการรับค่าและส่งค่าออกไป
console.warn("function ที่มีการรับค่าและส่งค่าออกไป") ;
function summmary(x,y)
{
    return x*y ;
}
let sum =summmary(8,9) ;
console.log("sum = ",sum) ;
//function แบบระบุค่าเริ่มต้น
console.warn("function แบบระบุค่าเริ่มต้น") ;

function Fullname(fname,lname,adress="สวนลาบ") 
{
console.log("ชื่อจริง = ",fname, "นามสกุล = " , lname,"ที่อยู่ = ",adress) ;
}
Fullname("สมปอง","ร้อยมาลัย","โรงบาล") ;
Fullname("สมหมาย","สายตลอด","คุก") ;
Fullname("SC","Kagura") ;
Fullname("กน่้กฟาวสก ่","นรก้ยรก้")

