function AddTodo()
{ 
   var todo =  document.getElementById("inputTodo").firstElementChild.value;
   if(todo == "")
   {
     return 0;
   }
   var li = document.createElement("li");
   li.textContent = todo;
   document.getElementById("todoList").appendChild(li);
}
function DeleteTodo()
{
    var todoDelete =  document.getElementById("deleteTodo").firstElementChild.value;
    todoList = document.getElementById("todoList").firstElementChild;
    while(todoList.textContent != todoDelete)
          todoList = todoList.nextElementSibling;
    if(todoList.textContent == todoDelete)
    {
         todoList.parentNode.removeChild(todoList);
    }

}

