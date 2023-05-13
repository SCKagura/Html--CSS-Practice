function deleteData()
{
    let result =confirm("คุณต้องการลบข้อมูลหรือไม่?") ;
    console.log(result) ;
    if(result)
    {
        console.log("ลบข้อมูลเรียบร้อย") ;
    }else
    {
        console.log("ยกเลิกการลบข้อมูล") ; 
    }
}  
