console.warn("HTML DOM");

let a =document.getElementsByTagName('p') ;
console.log(a);

let b =document.getElementById('Demo') ;
console.log(b); 
//เป็นค่า null เพราะประกาศ tag script ใน head

//DOM Document เปลี่ยนข้อความ
console.warn("DOM Document เปลี่ยนข้อความ");
let c =document.getElementById('SCK');

let d =document.getElementById('test') ;
let e=document.getElementById('test1') ;
let f=document.getElementById('test2') ;
let g=document.getElementById('test3') ;



let x = 10 , y = 20 ;
function displayText()
{
 d.innerText="<h1>HTML DOM จะบ้าาาตาย</h1>" ;
 e.innerHTML="<h1>HTML DOM อย่างยาก";
}
f.innerHTML="x = "+x + "y = " +y ; //ใช้ + ในการแสดงผลตัวแปร
g.innerHTML=`แสดงข้แมูล ตัวแปร x = ${x} และตัวแปร y = ${y}` ;
//ต้องปรับปุ่มเปลี่ยนภาษา


let h =document.querySelector('.myjs') ;
console.log(h) ;
let i =document.querySelector('#demo') ;
console.log(i);
let j =document.querySelector('p') ;
console.log(j) ; //tag p ที่เจอตัวแรกตัวเดียว
let k =document.querySelectorAll('p') ;
console.log(k); //tag p ที่เจอทุกตัว

//DOM Document
console.warn("DOM Document");

const titleEl = document.getElementById('title') ; //อ้างอิงผ่าน ID
const contentEl = document.querySelector('.content') ;//อ้างอิงผ่าน class
const allEl =document.querySelectorAll('p') ;
const Kagura =document.querySelector('.Kagura') ;
titleEl.style.color = "red" ;
titleEl.style.backgroundColor = "yellow" ;

contentEl.style.fontSize = "30px" ;
Kagura.setAttribute('class','YOU') ; //คลาส Kagura จะถูกเปลี่ยนชื่อ class เป็น YOU
//คลาส YOU ถูกควบคุมโดย DOMDocument.css 

const box =document.querySelector('.light') ;

function dark()
{
    box.setAttribute('class','dark') ;
}
function light()
{
    box.setAttribute('class','light') ;
}