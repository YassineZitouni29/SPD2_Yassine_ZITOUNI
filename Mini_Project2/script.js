const form1 = document.getElementById("add");
const list_tasks = document.querySelector("ul");
form1.addEventListener("submit", function(event){
    event.preventDefault();
    let task = document.getElementById("tache");
    let todo = task.value.trim();
    if (todo!=""){
    const to_add = `<li class="list-group-item">
    <span></span>
    <i class="far fa-trash-alt delete"></i>
    </li>`;
    list_tasks.insertAdjacentHTML("beforeend", to_add);
    let temp = document.querySelector("ul li:last-child span");
    temp.innerText = todo;
    task.value = "";
    const del = document.querySelector("ul li:last-child .delete");
    const lastli = del.parentElement;
    del.addEventListener("click", function(){
        lastli.remove();
    })}});
const search = document.getElementById("search");
search.addEventListener("input",function(){
    let what_search = document.getElementById("search").value;
    if (what_search!=""){
        document.getElementById("tache").disabled = 1;
        document.getElementById("tache").style.backgroundColor = "rgba(0, 0, 0, 0.2)";
    }else{
        document.getElementById("tache").disabled = 0;
    }
    const all_tasks_coll = document.querySelectorAll(".list-group li");
    const all_tasks = Array.from(all_tasks_coll);
    all_tasks.forEach(task=>{
        text_task = task.innerText;
        if (!text_task.includes(what_search)){
            task.style.display = "none";
        }else{
            task.style.display = "flex";
        }
    }
    );
});
const form2 = document.getElementById("search_input");
form2.addEventListener("submit",function(event){
    event.preventDefault();
});