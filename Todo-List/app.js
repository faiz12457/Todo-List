let ul=document.getElementById("list-container");
let input=document.getElementById("input-box");
let button=document.querySelector("button");

input.focus();

button.addEventListener("click",newElement);
document.addEventListener("keypress",(evt)=>{
    if(evt.key==="Enter"){
        newElement();
    }
});

function newElement(){

     if(input.value===""){
        alert("Enter Task");
        input.focus();
    }
    else{
        
        let task=input.value;
        let text=document.createTextNode(task);
        let li=document.createElement("li");
        li.appendChild(text);
        ul.appendChild(li);
        let span=document.createElement("span");
        let x=document.createTextNode("\u00D7");
        span.className="close";
        span.appendChild(x);
        li.appendChild(span); 
    }
    input.value="";
}

ul.addEventListener("click",(evt)=>{
    if(evt.target.tagName==="LI"){
        evt.target.classList.toggle("checked");
    }
    else if(evt.target.className==="close"){
        let div=evt.target.parentElement;
        div.style.display="none";

    }


})


