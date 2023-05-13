console.warn("DOM CSS");

const box1 = document.getElementById('box1') ;
let status;
function addDarkMode()
{
    box1.classList.add("darkmode") ; //เพิ่ม class style
}
function removeDarkMode()
{
    box1.classList.remove("darkmode") ; //เอาคลาสออก
}
function switchMode()
{
    box1.classList.toggle("darkmode") ; //สลับเพิ่มคลาส remove คลาส
    status = box1.classList.contains("darkmode") ;
    console.log(status);
    if(status)
    {
        box1.style.color="yellow" ;
    }else
    {
        box1.style.color="red" ;
    }
}
