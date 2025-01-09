
export function createProject(name, type){
    console.log("creating project ")
   
    return {
        name,
        type,
        task:[],
    }
}

export function projectsHandler(){
    return {projects: []}
}
export function addProjectToLibrary(obj,arr){
    arr.push(obj)
    return arr
}

export function removeProjectfromLibrary(arr,idx){
    console.log('me llamo otra funcions')
    return arr.splice(idx, 1)    
}
 


export let handler = projectsHandler()