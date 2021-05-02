
//Função de confirmar tarefa
function doneTask(task){
    //task é referente ao botão remover, basta acessar o elemento pai

    task.parentNode.classList.toggle("done"); //Adiciona uma classe ao elemento pai, no caso a li
    //O toggle adiciona uma classe caso não exista e remove a classe caso ela ja exista
}


// Função de remover Tarefa
function removeTask(task){
    //task é referente ao botão remover, basta acessar o elemento pai

    task.parentNode.remove(true); //Remove o elemento pai, no caso a li
}


// Função de adicionar Tarefa
function addTask(){
    const taskTitle = document.querySelector("#task-title").value;
    
    if(taskTitle){

        //clona template
        const template = document.querySelector(".template");
        const newTask = template.cloneNode(true);

        //adiciona titulo em nova task
        newTask.querySelector(".task-title").textContent = taskTitle;

        //remove classes desnecessarias
        newTask.classList.remove("template");
        newTask.classList.remove("hide");

        //adiciona na lista
        const taskList = document.querySelector("#task-list");
        taskList.appendChild(newTask);

        //adciona o evento de remover
        const removeBtn = newTask.querySelector(".remove-btn").addEventListener("click",function() {
            removeTask(this);
        });

        //adciona o evento de concluido
        const doneBtn = newTask.querySelector(".done-btn").addEventListener("click",function() {
            doneTask(this);
        });

        //Limpar campo de tarefa
        document.querySelector("#task-title").value = "";
    }

}


// Evento de adcionar Tarefa
const addBtn = document.querySelector("#add-btn");

addBtn.addEventListener("click",function(event) {

    event.preventDefault(); //evita o envio do formulario
    addTask();
}); 