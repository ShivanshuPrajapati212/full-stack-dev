const user_form = document.getElementById("myform")
const user_username = document.getElementById("user_username")
const info_container = document.getElementById("info-container")

user_form.addEventListener("submit", function (event){
    event.preventDefault()

    const user_info = fetch(`https://api.github.com/users/${user_username.value}`)

    user_info.then((response)=>{
        return response.json()
    }).then((response)=>{
        info_container.innerHTML = `
        <h1 class="text-center fs-1">Results for ${user_username.value}</h1>
        <div class="card mt-5">
            <div class="card-body mt-2">
                <p class="fs-5"><strong>Name</strong>: ${response["name"]}</p>
                <p class="fs-5"><strong>Login</strong>: ${response["login"]}</p>
                <p class="fs-5"><strong>Id</strong>: ${response["id"]}</p>
                <p class="fs-5"><strong>node_id</strong>: ${response["node_id"]}</p>
                <p class="fs-5"><strong>avatar_url</strong>: ${response["avatar_url"]}</p>
                <p class="fs-5"><strong>url</strong>: ${response["url"]}</p>
                <p class="fs-5"><strong>repos_url</strong>: ${response["repos_url"]}</p>
            </div>
        </div>`
    })
})