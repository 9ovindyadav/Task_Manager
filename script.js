const title = document.getElementById("title");
const description = document.getElementById("description");
const form = document.querySelector("form");

const container = document.querySelector(".container");

let tasks = localStorage.getItem("tasks") ? JSON.parse(localStorage.getItem("tasks")) : [];

showAllTasks();

function showAllTasks(){
    tasks.forEach((value,index)=>{ 
    const div = document.createElement("div");
    div.setAttribute("class","task");

    const innerDiv = document.createElement("div");
    div.append(innerDiv);

    const para = document.createElement("p");
    para.innerText = value.title ;
    innerDiv.append(para);

    const span = document.createElement("span");
    span.innerText = value.description ;
    innerDiv.append(span);

    const btn = document.createElement("button");
    btn.setAttribute("id","deleteBtn");
    btn.innerText ="-";
    div.append(btn);

    btn.addEventListener("click",()=>{
        removeTask();
        tasks.splice(index,1);
        localStorage.setItem("tasks",JSON.stringify(tasks));
        showAllTasks();
    })

    container.append(div);

   });
} // create Tasks section for display 

function removeTask(){

    tasks.forEach(()=>{

        const div = document.querySelector(".task");
        div.remove();
    });
};


form.addEventListener("submit",(e)=>{
    console.log(e.preventDefault());
    removeTask();

    tasks.push({
        title : title.value,
        description : description.value,
    });
    
    localStorage.setItem("tasks",JSON.stringify(tasks));
    showAllTasks();

});



// For Text-area height adjustment
function textAreaAdjust(element) {
    element.style.height = "1px";
    element.style.height = (element.scrollHeight)+"px";
}
