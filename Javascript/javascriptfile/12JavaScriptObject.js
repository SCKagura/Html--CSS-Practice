console.warn("การเข้าถึงแบบ object(class)") ;
//object
let product0 =
{
    name:"คอม" ,
    price:29999 ,
    color:"red" ,
    category:"computer" ,
    size:"XL" 
};
console.log("ชื่อสินค้า = " ,product0.name) ;
console.log("ราคา = ",product0.price) ;
console.log("หมวดหมู่ = ",product0["category"]) ;//ไม่แนะนำให้ใช้ ใช้แบบบนสะดวกกว่า
//array
console.warn("การเข้าถึงแบบ array") ;

let product1 =["เมาส์",2000,"computer"] ;
console.log("ชื่อสินค้า = ",product1[0])
console.log("ราคา = ",product1[1]) ;


//JavaScript Method
console.warn("Java Script Method") ;
let product2 =
{
    name:"คอม" ,
    price:29999 ,
    color:"red" ,
    category:"computer" ,
    size:"XL",
    displayProduct:function()
    {
        return "ชื่อสินค้า = "+this.name+"  ราตา = "+this.price +"  ประเภท = "+this.category ; 
    } ,
    discount:function()
    {
        return this.price -25634 ;
    }
};
console.log(product2.displayProduct()) ;
console.log("ราคาหลังลด = ",product2.discount()) ;
// document.write(product2.displayProduct()) ;