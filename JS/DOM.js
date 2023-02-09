import {nameDelete, addUser, change, searchUser} from './API.js'

let form1 = document.querySelector(".form1")
let form2 = document.querySelector(".form2")
let inp1 = document.querySelector(".sera")
let modal = document.querySelector(".modal")
let btnSR = document.querySelector(".btnSR")
let f = document.querySelector(".f")
let head = document.querySelector(".head")

window.onclick = (e)=>{
    if(e.target == modal){
        modal.style.display = "none"
    }
}
form1.onsubmit = (e)=>{
    e.preventDefault();
    let myUser = {
        'id' : new Date().getTime(),
        'correspondent':e.target["correspondent"].value,
        'type_document':e.target["type"].value,
        
        'description':e.target["description"].value,
        
        'status':e.target["status"].value
    }
    addUser(myUser)
    form1.reset();
}
btnSR.onclick = ()=>{
    searchUser(inp1.value)
    inp1.value = ''
}

function getUser(data){
        let table = document.querySelector("table")
        table.innerHTML = ''
        data.forEach(element => {
            let TR = document.createElement("tr")
            let id1 = document.createElement("td")
            let type1 = document.createElement("td")
            let description1  = document.createElement("td")
            let status1 = document.createElement("td")
            let cor = document.createElement("td")
            id1.innerHTML = element["id"]
            type1.innerHTML = element["type_document"]
            description1.innerHTML = element["description"]
            status1.innerHTML = element["status"]
            cor.innerHTML = element["correspondent"]
            /////////DELETE
            let Delete  = document.createElement("button")
            let btn = document.createElement("td")
            Delete.setAttribute("class", "delete")
            Delete.innerHTML = "Delete"
            Delete.onclick = ()=>{
                nameDelete(element.id)
            }
            /////////EDIT
            let edit  = document.createElement("button")
            edit.setAttribute("class", "edit")
            edit.innerHTML = "Edit"
            edit.onclick = ()=>{

                modal.style.display = 'block'
                form2['correspondent'].value = element["correspondent"]
                form2['type'].value = element["type_document"],
                form2['description'].value = element["description"],
                form2['status'].value = element["status"]
                form2.onsubmit = (e)=>{
                    e.preventDefault()
                    let editUser = {
                        'correspondent':e.target["correspondent"].value,
                        'type_document' : e.target["type"].value,
                        'description' : e.target["description"].value,
                        'status':e.target["status"].value,
                    }
                    change(element.id, editUser)
                    
                    modal.style.display = 'none'
                }
            }
                TR.appendChild(id1)
                TR.appendChild(cor)
                TR.appendChild(type1)
                TR.appendChild(description1)
                TR.appendChild(status1)
                btn.appendChild(Delete)
                btn.appendChild(edit)
                TR.appendChild(btn)
                table.appendChild(TR)
            });
        }
        export default getUser
        export {head}