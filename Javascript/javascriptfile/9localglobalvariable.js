let a = 100 ; //global variable
function display()
{
    let b = 50 ; //local variable
    console.log("ตัวแปร = ", a );
    console.log("ค่าอื่นๆ = ",b ) ;
}

console.log("Global = ", a);
//console.log("b = ", b) ; //ทำไม่ได้เพราะเป็น local variable โดยจะใช้แค่ใน function
display() ; 

let c = 200 ;
function Display()
{
    let c= 50 ; //local variable
    console.log("c in function = ", c );

}

console.log("c in global = ",c) ;
Display() ;