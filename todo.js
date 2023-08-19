function addTodo() {
    var list = document.getElementById("list");
    var todo = document.getElementById("todo");
    var date = new Date()
    list.innerHTML = `
        
         <input class='todo-input' type='text' value='${todo.value}' disabled/>
        
         <button onclick='delTodo()'>Delete</button> 
         <button onclick='editTodo(this)'>Edit</button>`

}

function delTodo() {
    event.target.parentNode.remove()
}
var edit = false;
function editTodo(e) {
    if (edit) {
        e.parentNode.childNodes[1].disabled = true;
        e.parentNode.childNodes[1].blur()
        e.parentNode.childNodes[5].innerHTML = "Edit"
        edit = false;
    } else {
        e.parentNode.childNodes[1].disabled = false;
        e.parentNode.childNodes[1].focus()
        e.parentNode.childNodes[5].innerHTML = "Update"
        edit = true;
    }
}


function deleteAll() {
    var list = document.getElementById("list");
    list.innerHTML = ""
}


// var student = {
//     name: "ghous",
//     roll: 87756755,
//     class: "tts"
// }

// console.log(student.time)