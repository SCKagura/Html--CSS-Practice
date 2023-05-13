console.warn("DOM Document");

const textAll =document.querySelectorAll('p') ;
console.log(textAll);
//มองว่า tag p มีสมาชิกอยู่ 3 ตัว(มองให้เป็น array) 
console.log(textAll[0]);
console.log(textAll[2].innerHTML);

//create elements & appendChild
const menu =document.getElementById('menu') ;
let count = 1 ;
function addItem()
{
const item =document.createElement('li') ;
item.innerText = "Item"+(count++) ;
menu.appendChild(item) ; //นำ element มาต่อ node แม่(ul)
}
//console จะเพิ่ม li ขึ้นมา

const menu1 =document.getElementById('menu1') ;
const item1 =document.getElementById('item-3') ;

menu1.removeChild(item1) ;

const item2 = document.getElementById('item-8');
function RemoveItem()
{
    menu1.removeChild(item2) ;
}

const NewItem =document.createElement('li') ;
NewItem.innerText="X" ;
const itemB = document.getElementById('item-B') ;

function ReplaceX()
{
menu2.replaceChild(NewItem,itemB) ;
}