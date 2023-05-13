let a = 20 , b = 3 ;
console.log("ตัวดำเนินการทางคณิตศาสตร์") ;
console.log(a+b) ;
console.log(a-b) ;
console.log(a*b) ;
console.log(a/b) ;
console.log(a%b) ;
console.log(a**b) ;
console.log("ตัวดำเนินการเปรียบเทียบ") ;
console.log(a==b) ;
console.log(a!=b) ;
console.log(a>b) ;
console.log(a<b) ;
console.log(a>=b) ;
console.log(a<=b) ;
console.log("ตัวดำเนินการทางตรรกศาสตร์") ;
console.log("&& = And") ;
console.log("|| = Or") ;
console.log("! = Not") ;
let c = true , d = false  ;
console.log("c = true , d = false ") ;

console.log("!c = ",!c) ;
console.log("!d = ",!d) ;

console.log("c && c = ",( c && c)) ;
console.log("c && d = ",( c && d)) ;
console.log("d && c = ",( d && c)) ;
console.log("d && d = ",( d && d)) ;

console.log("c || c = ",( c || c)) ;
console.log("c || d = ",( c || d)) ;
console.log("d || c = ",( d || c)) ;
console.log("d || d = ",( d || d)) ;

console.log("ตัวดำเนินการเพิ่มค่า-ลดค่า") ;
console.log("ให้ e =5 ") ;
let e = 5  ;

//เพิ่มค่า prefix
console.log("ค่าปัจจุบัน = ", e ) ;
console.log("prefix = ", ++e ) ; //prefix เพิ่มค่า e แล้วค่อยแสดง
console.log("postfix = ", e++ ) ;//postfix แสดงค่า e ก่อนแล้วค่อยเพิ่ม
console.log("ค่าจริง e = " , e ) ;
console.log("prefix = ", --e ) ;//prefix ลดค่า e แล้วค่อยแสดง
console.log("postfix = ", e-- ) ;//postfix แสดงค่า e ก่อนแล้วค่อยลด
console.log("ค่าจริง e = " , e ) ;

//compound assignment
console.log("Compound Assignment") ;
console.log("ให้ f =15 g = 7 ") ;
let f =15 , g = 7 ;
console.log("(f+=g )= (f = f+ g ) =" ,f+=g) ;
f =15 , g = 7 ;
console.log("(f-=g )= (f = f-g ) =" ,f-=g);
f =15 , g = 7 ;
console.log("(f*=g )= (f = f*g ) =" ,f*=g);
f =15 , g = 7 ;
console.log("(f/=g )= (f = f/g ) =" ,f/=g);
f =15 , g = 7 ;
console.log("(f%=g )= (f = f%g ) =" ,f%=g);
//ลำดับความสำคัญตัวดำเนินการ
console.log("ลำดับความสำคัญตัวดำเนินการ") ;
console.log("1.()");
console.log("2.++,--");
console.log("3.*,/,%");
console.log("4.+,-");
console.log("5.<,<=,>,>=");
console.log("6.==,!=");
console.log("7.&&");
console.log("8.||");
console.log("9.=,+=,-=,*=,/=,%=");
console.log(5+8*9);
console.log(10-4+2);
console.log(10-(2+1));
console.log(5*2-40/5);
console.log(7+8/2+25);























