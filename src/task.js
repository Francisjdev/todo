export function createTask(name,date, description, tipo){
    priority:["low","medium","high"]
    state: ["in progress","finished"]
    console.log("creando tarea")
    console
    return{
        name,
        date,
        description,
        tipo
       // priority,
       // state
    }
}

export function addToDoToLibrary(obj, arr){

   let filtered = arr.filter((ele, idx)=>
        ele.name === obj.tipo ? ele.task.push(obj): false
    )
    console.log(filtered)
    return filtered
}

export function removeToDofromLibrary(arr,idx){
    console.log('me llamo otra funcions')
    return arr.splice(idx, 1)    
}