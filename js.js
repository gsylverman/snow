const mare=document.getElementById("mare");
const mic=document.getElementById("mic");
const mic1=document.getElementById("mic1");
const mic2=document.getElementById("mic2");
const mic3=document.getElementById("mic3");
const mic4=document.getElementById("mic4");
const mic5=document.getElementById("mic5");

function random(min,max){
    return Math.floor(Math.random() * (max - min + 1)) + min;
}
let poz=random(-50,-170);

let opac=1;
const miscare=function(){
     if(poz<600){
        poz++;
        
        mic.style.top=poz+"px";
        
    }
    else{
        poz=0;
        
        mic.style.left=random(0,550)+"px";
        
    }
    requestAnimationFrame(miscare);
}
miscare();
let poz1=-120;
const miscare1=function(){
    if(poz1<800){
       poz1++;
       mic1.style.top=-120+poz1+"px";
   }
   else{
       poz1=-150; 
       mic1.style.left=random(0,550)+"px";
   }
}
setInterval(miscare1,12);

let poz2=-100;
const miscare2=function(){
    if(poz2<800){
       poz2++;
       mic2.style.top=-120+poz2+"px";
   }
   else{
       poz2=-100; 
       mic2.style.left=random(0,550)+"px";
   }
}
setInterval(miscare2,15);
// **************************************
let poz3=-150;
const miscare3=function(){
    if(poz3<800){
       poz3++;
       mic3.style.top=-117+poz3+"px";
   }
   else{
       poz3=-160; 
       mic3.style.left=random(0,550)+"px";
   }
}
setInterval(miscare3,13);
// **************************************
let poz4=-150;
const miscare4=function(){
    if(poz4<800){
       poz4++;
       mic4.style.top=-117+poz4+"px";
   }
   else{
       poz4=-250; 
       mic4.style.left=random(0,550)+"px";
   }
}
setInterval(miscare4,10);
// **************************************
// **************************************
let poz5=-150;
const miscare5=function(){
    if(poz5<800){
       poz5++;
       mic5.style.top=-117+poz5+"px";
   }
   else{
       poz5=-250; 
       mic5.style.left=random(0,550)+"px";
   }
}
setInterval(miscare5,15);
// **************************************