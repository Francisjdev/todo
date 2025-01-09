import  "./styles.css";

import { showProjectForm,showToDoForm, closeProjectForm,closeprojectBtn, closeToDoForm, closeTodoBtn, showProjectFormBtn,showToDoFormBtn,makeProject, makeProjectBtn,displayProjects,makeTaskBtn, makeTask, createDropdown } from "./domHandler";
import { handler, createProject, addProjectToLibrary, removeProjectfromLibrary} from "./project";
import { addToDoToLibrary,createTask } from "./task";


addProjectToLibrary(createProject('Default', 'Default'), handler.projects)
addProjectToLibrary(createProject('miniDEf', 'miniDEf'), handler.projects)
addProjectToLibrary(createProject('miniDEf2', 'miniDEf2'), handler.projects)
createDropdown(handler.projects)
showProjectForm(showProjectFormBtn)
showToDoForm(showToDoFormBtn)
closeProjectForm(closeprojectBtn)
closeToDoForm(closeTodoBtn)
makeProject(makeProjectBtn, handler.projects)
makeTask(makeTaskBtn, handler.projects)
displayProjects(handler.projects)
