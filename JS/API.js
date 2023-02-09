
import getUser from "./DOM.js";
import {head} from "./DOM.js";
// GET
let getData = async function(){
    try {
        let {data} = await axios.get(`https://63d14a1e3f08e4a8ff94b1a5.mockapi.io/documents`)
        getUser(data)
    }
    catch (error) {
        console.log(error);
    }
}
///DELETE
let nameDelete = async function(id){
    try {
        let {data} = await axios.delete(`https://63d14a1e3f08e4a8ff94b1a5.mockapi.io/documents/${id}`)
        getData()
    }
    catch (error) {
        console.log(error);
    }
}
//// ADD
let addUser = async function(myUser){
    try {
        let {data} = await axios.post(`https://63d14a1e3f08e4a8ff94b1a5.mockapi.io/documents`, myUser)
        getData()    
    }
    catch (error) {
        console.log(error);      
    }
} 
/////EDIT

let change = async function(id, editUser){
    try {
        let {data} = await axios.put(`https://63d14a1e3f08e4a8ff94b1a5.mockapi.io/documents/${id}`, editUser)
        getData();
    }
    catch (error) {
        console.log(error);
    }
}

/////////////SEARCH
let searchUser = async function(v){
    let {data} = await axios.get(`https://63d14a1e3f08e4a8ff94b1a5.mockapi.io/documents`)
    let ar = data.filter((e)=>{
        if(e.correspondent == v){
            head.innerHTML = e.id
        }
        return head
    })
}
export {getData, nameDelete, addUser, change, searchUser}

