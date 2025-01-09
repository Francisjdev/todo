import { handler, addProjectToLibrary, createProject, removeProjectfromLibrary } from "./project";
import { createTask, addToDoToLibrary, removeToDofromLibrary } from "./task";

// starting dom variables 

export const showProjectFormBtn = document.querySelector('#projectBtn')
export const showToDoFormBtn = document.querySelector('#todoBtn')
//botones del formulario
export const closeprojectBtn = document.querySelector('#closeprojectBtn')
export const closeTodoBtn = document.querySelector('#closeTareaBtn')
export const makeProjectBtn = document.querySelector('#addProjectBtn')
export const makeTaskBtn = document.querySelector('#addTareaBtn')
// formulario creacion projects
export const projectModal = document.querySelector('.modal')
export const nombreProyecto = document.querySelector('#nombreProyecto')
export const tipoProjecto = document.querySelector('#tipoProjecto')

// variables to-Dos
export const nombreTarea = document.querySelector('#nombreTarea')
export const fecha = document.querySelector('#fecha')
export const descripcion = document.querySelector('#descripcion')
export const projecto = document.querySelector('#select')
export const toDoModal = document.querySelector('.todoModal')

// projects display
export const projectDisplay = document.querySelector('.projectDisplayArea')

//task display
export const taskDisplay = document.querySelector('.taskDisplay')



//modal projectos
export function showProjectForm(obj){
    obj.addEventListener('click', () => {
        projectModal.close();
        projectModal.showModal();
    } )
}
export function closeProjectForm(obj){
    obj.addEventListener('click', (e) => {
        e.preventDefault();
        projectModal.close();
    } )
}

//modal to-dos
export function showToDoForm(obj){
    obj.addEventListener('click', () => {
        toDoModal.close();
        toDoModal.showModal(); 
    } )
}
export function closeToDoForm(obj){
    obj.addEventListener('click', (e) => {
        e.preventDefault();
        toDoModal.close();
    } )
}

// call the createproject from projects
export function makeProject(obj, arr){
    obj.addEventListener('click', () => {
    addProjectToLibrary(createProject(nombreProyecto.value, tipoProjecto.value),arr)
    displayProjects(arr)   
    createDropdown(arr)
    } )
}

// call create task from tasks
export function makeTask(obj, arr){
    obj.addEventListener('click', () => {
        const selectedOption = projecto.options[projecto.selectedIndex];
        addToDoToLibrary(createTask(nombreTarea.value, fecha.value, descripcion.value, selectedOption.textContent),arr)
    
    } )
}
// deleteBtn handler
export function deleteProjectHandler(clickable, arr, num){
    clickable.addEventListener('click', ()=>{
        removeProjectfromLibrary(arr,num)
        displayProjects(arr)
    })
}
// delete todo btn handler
export function deleteToDoHandler(clickable, arr, index) {
    clickable.addEventListener('click', ()=>{
        console.log('me clickea este man')
        removeToDofromLibrary(arr,index)
        displayTasks(arr)
    })
}
//display the projects

export function displayProjects(arr){
    projectDisplay.textContent = ''
    arr.map((obj, index) => {
        let clicker = document.createElement('div');
        let objName = document.createElement("p");
        let objType = document.createElement("p");
        let objDltBtn = document.createElement("button");
        clicker.addEventListener('click', ()=> { 
            displayTasks(obj.task, index)
        })
        deleteProjectHandler(objDltBtn, arr, index) 
        objName.textContent = obj.name
        objType.textContent = obj.type
        objDltBtn.textContent = "Delete"
        clicker.appendChild(objName)
        clicker.appendChild(objType)
        projectDisplay.appendChild(clicker)
        projectDisplay.appendChild(objDltBtn)
    
    })
}

export function displayTasks(arr){
    taskDisplay.textContent = ''

    arr.map((obj, index) =>{
            console.log(obj)
            console.log(index)
            console.log(arr[index])
            let taskName = document.createElement("p");
            let taskDate = document.createElement("p");
            let taskDltBtn = document.createElement("button");
            deleteToDoHandler(taskDltBtn, arr, index)
            taskName.textContent = obj.name
            taskDate.textContent = obj.date
            taskDltBtn.textContent = "Delete"
            taskDisplay.appendChild(taskName)
            taskDisplay.appendChild(taskDate)
            taskDisplay.appendChild(taskDltBtn)
    })
     /*  for (let taskObj in arr){
            console.log(arr[taskObj])
            console.log(taskObj)
            console.log(arr)
            let taskName = document.createElement("p");
            let taskDate = document.createElement("p");
            let taskDltBtn = document.createElement("button");
            deleteToDoHandler(taskDltBtn, arr, taskObj)
            taskName.textContent = arr[taskObj].name
            taskDate.textContent = arr[taskObj].date
            taskDltBtn.textContent = "Delete"
            taskDisplay.appendChild(taskName)
            taskDisplay.appendChild(taskDate)
            taskDisplay.appendChild(taskDltBtn)
        }
    */
    
}



// to populate the ddbtn in the modal 

export function createDropdown(arr){
    projecto.textContent = ""
    arr.map((obj, idx) =>{
        let optEle2 = document.createElement("option");
        optEle2.classList = "optEle"
        optEle2.textContent = obj.name;
        optEle2.value = obj.name
        projecto.appendChild(optEle2)
    })
}