create_btn = document.getElementById("create")
delete_btn = document.getElementById("delete")
container = document.getElementById("todo-container")

create_btn.addEventListener("click", function() {
    let name = prompt("Enter the name of Todo : ")
    let todo = prompt("Enter the Todo : ")
    localStorage.setItem(name, todo)
    alert("Saved Todo!!")
  });

delete_btn.addEventListener("click", function(){
    let name = prompt("Enter the name of Todo you want to delete: ")
    let confirm_user = confirm("Do want to delete that")
    if(confirm_user){
    localStorage.removeItem(name)
    alert("Deleted the Todo")
    }
})


for(let i = 0; i < localStorage.length; i++){
    container.innerHTML += `<tr class="bg-white border-b dark:bg-gray-800 dark:border-gray-700">
    <td class="px-6 py-4">${localStorage.key(i)}</td>
    <td class="px-6 py-4">${localStorage.getItem(localStorage.key(i))}</td></tr>
    ` 
}