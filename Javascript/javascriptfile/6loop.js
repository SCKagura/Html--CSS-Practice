//การใช้ while 
console.warn("การใช้ while") ;
let i = 0 ;
while(i < 5)
{
console.log("Hello world ", i+1) ;
i++ ;
}
i = 0 ;
while(i < 5)
{
    if(i == 3)
        {
            break ;
        }
console.log("Hello world ", i+1) ;
i++ ;
}
//การใช้ for
console.warn("การใช้ for") ;
for(let i = 0 ;i<4 ;i++)
{
    console.log("for ครั้งที่ ",i+1) ;

}
console.warn("การใช้ Do..while") ;
i = 0 ;
do
{
    console.log("SCK",i+1 ) ;
    i++ ;
}while(i<5) ;

console.warn("break & continue") ;
for(let count =1 ;count <=10 ;count++ )
{
    if(count == 5)  break ;
    console.log(count) ;
}
console.log("จบโปรแกรม") ;
//จบที่เลข 4
for(let count =1 ;count <=10 ;count++ )
{
    if(count == 5)  continue;
    if(count == 8)  continue;
    console.log(count) ;
}
console.log("จบโปรแกรม") ;
//ข้ามเลข 5 8
