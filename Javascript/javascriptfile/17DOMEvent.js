function welcome()
{
    alert("ยินดีเข้าสู่หน้าเว็ปของเรา") ;//ตอนโหลดจะแสดงข้อความ
}
function highlight(obj) 
{
    obj.style.background="yellow" ;
}
function unhighlight(obj)
{
    obj.style.background="black" ;
}
function getmenu()
{
    const menu = document.getElementById('menu') ;
    console.log(menu.value.toUpperCase()) ; //พอเลือกอะไรจะไปอยู่ console หมด
    const display =document.getElementById("display") ;
    display.innerText= menu.value ; //เลือกอะไรจะเปลี่ยนตาม
}
function highlight(obj)
{
    obj.style.background = "yellow" ;
}
function unhilight(obj)
{
    obj.style.background = "red" ;
}


const menu1 =document.getElementById('menu1') ; //อ้างอิง
menu1.addEventListener('change',getMenu); 

function getMenu()
{
    console.log(menu1.value) ;
}
const menu2 =document.getElementById('menu2') ;
const display1 = document.getElementById('display1') ;
menu2.addEventListener('change',display2); 

function display2()
{
    display1.innerText = menu2.value ;
}

const btn =document.getElementById('btn') ;
btn.addEventListener('click',showWelcome);

function showWelcome()
{
    alert("ยินดีต้อนรับเข้าสู่หน้าเว็ป") ;
}