const todoBoard=document.getElementById('todo')
const todoAddButton=document.getElementById('add_item-todo');
const hiddenDiv=document.getElementById('adddiv');
const closeDiv=document.getElementById('closebtn');
const todoAddbtnDiv=document.getElementById('addtask');
const content=document.getElementById('content');
const doingBoard=document.getElementById('doing');
const gettingDragged=document.getElementById('draggable');
const gbtn=document.getElementById('gcheck');
const ybtn=document.getElementById('ycheck');
const obtn=document.getElementById('ocheck');
const bbtn=document.getElementById('bcheck');
const pbtn=document.getElementById('pcheck');

gbtn.addEventListener('click',()=>{
    gbtn.classList.toggle('outl1')
});
ybtn.addEventListener('click',()=>{
    ybtn.classList.toggle('outl2')
});
obtn.addEventListener('click',()=>{
    obtn.classList.toggle('outl3')
});
bbtn.addEventListener('click',()=>{
    bbtn.classList.toggle('outl4')
});
pbtn.addEventListener('click',()=>{
    pbtn.classList.toggle('outl5')
})


gettingDragged.addEventListener("dragstart",(e)=>{
    console.log("I am getting dragged");
    dragged=e.target;
})





todoAddButton.addEventListener('click',(e)=>{
    hiddenDiv.style.display="block";
})

todoAddbtnDiv.addEventListener('click',(e)=>{

    
    const newTask=document.createElement('div');
    newTask.innerHTML=content.value;
    newTask.classList.add("task");
    newTask.setAttribute("draggable", "true;");
    todoBoard.appendChild(newTask);
    hiddenDiv.style.display="none";
})

closeDiv.addEventListener('click',(e)=>{
    hiddenDiv.style.display="none";

})


let draggedElement = null;
let hoveringElement=null;

document.addEventListener("drag", (event) => {
  
        draggedElement = event.target;
    
});

document.addEventListener("dragover", (event) => {
    event.preventDefault();
     hoveringElement= event.target
     console.log(hoveringElement)
});

document.addEventListener("drop", (event) => {
    event.preventDefault();
   
        hoveringElement.appendChild(draggedElement);
        draggedElement = null; 
    
});