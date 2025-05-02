const PI = 3.141;


let result1 = 0 ;
let result2 = 0 ;
 document.getElementById("sub1").onclick = function(){
 radius =  document.getElementById("rad1").value;
result1= 2 * PI * radius ;
result1=Number(result1);
result2= PI * radius**2 ;
result2=Number(result2);

document.getElementById("resul1").textContent = "area is " + result2  +  
" and the circumference is " + result1 ;
 }

 