const todoForm=document.querySelector(".todo-form");
const todoInput=document.querySelector(".todo-form input[type='text']");
const todoList=document.querySelector(".todo-list");
const firstLi=document.querySelector("li");
const todoContainer = document.querySelector(".todo-list");
const todoText = document.querySelector(".task-text");


todoForm.addEventListener("submit",(e)=>{
    e.preventDefault();
    if(todoInput.value==""){
        alert("please add some task before add");
    }
    else{
    const newTodoText =todoInput.value;
    const newLiInnerHTML=`<li >
                    <span class="task-text">${newTodoText}</span>
                    <div class="todo-buttons">
                        <button class="todo-button btn edit">Done</button>
                        <button class="todo-button btn remove">Remove</button>
                    </div>
                </li>`;
    todoContainer.innerHTML += newLiInnerHTML;
    todoInput.value="";
    }
});

todoList.addEventListener("click",(e)=>{
    if(e.target.classList.contains("remove")){
        const targetLi=e.target.parentNode.parentNode;
        targetLi.remove();
    }
    if(e.target.classList.contains("edit")){
        const liSpan = e.target.parentNode.previousElementSibling;
        liSpan.style.textDecoration="line-through";
    }

})

todoText.addEventListener("click",(e)=>{
    todoInput.value= e.target.value;

})



// newLi.innerHTML=list;