let text=document.getElementById("text-id");
let nbr=document.querySelectorAll(".button");
let operande="";
let str="";
let result=0;
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
for(let j of opr)
  {
     j.addEventListener("click",(event)=>{ 
        str=str.concat(operande);
        text.value=event.target.value; 
        str=str.concat(text.value);
      });
  }

let equal=document.querySelector(".button-equal");
equal.addEventListener("click",(event)=>{
  str=str.concat(text.value);
  result=eval(str);
  text.value=result;
});
let suppr=document.querySelector(".button-suppr");
suppr.addEventListener("click",(event)=>{
   text.value="";
  operande="";
  str="";
  result=0;
});
