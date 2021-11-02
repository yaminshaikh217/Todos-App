const addBtn = document.getElementById("add")
const input = document.getElementById("input")
const ul = document.getElementById("ul")



input.focus()




addBtn.addEventListener("click", () => {


    if (input.value) {

        let todo = document.createElement("li")
        todo.innerHTML = `<li class="todo ">${input.value} <span class="icon">
    <span id="complete"><i class="fa fa-check" aria-hidden="true"></i></span> <span id="delete"><i
            class="fa fa-trash" aria-hidden="true"></i></span>
</span></li>`



        ul.appendChild(todo);
        input.value = "";
        input.focus();
        todo.addEventListener("click", () => todo.classList.toggle("completed"))
        todo.addEventListener("contextmenu", (e) => {
            e.preventDefault();
            todo.remove();

        })


    }




})


