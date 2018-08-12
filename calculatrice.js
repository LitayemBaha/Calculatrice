let text=document.getElementById("text-id");
let nbr=document.querySelectorAll(".button");
let operande="";
for(let i of nbr) { 
   i.addEventListener("click",(event)=>{
     
       text.value+=i.value;
       v=text.value;
        if(v.includes("+")||v.includes("-")||v.includes("*")||v.includes("/"))
           {
             v=v.replace(v[0],"");
             text.value=v; 
           }
        operande=text.value;
     });
}
let opr=document.querySelectorAll(".button-operator");
let tab=[];
for(let j of opr)
  {
     j.addEventListener("click",(event)=>{ 
        tab.push(operande);
        text.value=event.target.value; 
        tab.push(text.value);
      });
  }

let equal=document.querySelector(".button-equal");
let result=0;
equal.addEventListener("click",(event)=>{
  tab.push(text.value);
  result=parseFloat(tab[0]);
   for(let i=1;tab.length-1;i=i+2){
     switch(tab[i]){
       case "+":result=(result+parseFloat(tab[i+1]));break;
       case "-":result=(result-parseFloat(tab[i+1]));break;
       case "*":result=(result*parseFloat(tab[i+1]));break;
       case "/":result=(result/parseFloat(tab[i+1]));break;
       default:text.value=0;
     }  
   }
   text.value=result;
});
let suppr=document.querySelector(".button-suppr");
suppr.addEventListener("click",(event)=>{
   text.value="";
   tab=[];  
  operande="";
  result=0;
});
